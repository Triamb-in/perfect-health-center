import { defaultClinicData } from "@/content/defaultClinicData";
import { ClinicData } from "@/types";
import { sanityClient, urlFor, isSanityConfigured } from "./client";
import { getSignedMediaUrl } from "@/lib/mediaSecurity";

function signClinicMedia(data: ClinicData): ClinicData {
  return {
    ...data,
    certificates: data.certificates.map((c) => {
      if (c.imageUrl && (c.imageUrl.startsWith("http://") || c.imageUrl.startsWith("https://"))) {
        return c;
      }
      const fileName = c.imageUrl.split("/").pop() || "";
      return {
        ...c,
        imageUrl: getSignedMediaUrl(`certificates/${fileName}`),
      };
    }),
  };
}

/**
 * Deduplicates documents when both drafts and published documents exist.
 * If a draft exists (e.g. drafts.xyz), it takes priority so fresh edits in Studio
 * reflect immediately on the website, while published documents serve as the baseline.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deduplicateSanityDocs<T extends { _id: string }>(docs: T[]): T[] {
  if (!docs || !Array.isArray(docs)) return [];
  const map = new Map<string, T>();

  // Pass 1: add published versions
  for (const doc of docs) {
    if (!doc._id.startsWith("drafts.")) {
      map.set(doc._id, doc);
    }
  }

  // Pass 2: add/overwrite with draft versions (latest edits in Studio)
  for (const doc of docs) {
    if (doc._id.startsWith("drafts.")) {
      const cleanId = doc._id.replace(/^drafts\./, "");
      map.set(cleanId, doc);
    }
  }

  return Array.from(map.values());
}

export async function getClinicData(): Promise<ClinicData> {
  // If Sanity is not configured, log clear server diagnostics and serve verified default data
  if (!sanityClient || !isSanityConfigured) {
    if (process.env.NODE_ENV === "production") {
      console.error(
        "[Sanity] Configuration missing in production: Serving verified fallback data. " +
        "Ensure NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET are set in Vercel."
      );
    } else {
      console.warn("[Sanity] Configuration missing in development: Serving default clinic data.");
    }
    return signClinicMedia(defaultClinicData);
  }

  try {
    const [
      settings,
      specialties,
      faqs,
      testimonials,
      certificates,
      youtubeVideos,
      gallery,
    ] = await Promise.all([
      sanityClient.fetch(`*[_type == "clinicSettings"][0]`),
      sanityClient.fetch(`*[_type == "specialty"] | order(order asc)`),
      sanityClient.fetch(`*[_type == "faq"] | order(order asc)`),
      sanityClient.fetch(`*[_type == "testimonial"] | order(order asc) { ..., "videoFileUrl": videoFile.asset->url }`),
      sanityClient.fetch(`*[_type == "certificate"] | order(order asc)`),
      sanityClient.fetch(`*[_type == "youtubeVideo"] | order(order asc)`),
      sanityClient.fetch(`*[_type == "galleryItem"] | order(order asc) { ..., "videoFileUrl": videoFile.asset->url }`),
    ]);

    console.log("[Sanity] Connected: Published CMS data successfully loaded from production dataset.");

    const s = settings || {};

    return signClinicMedia({
      ...defaultClinicData,
      clinicName: s.clinicName || defaultClinicData.clinicName,
      doctorName: s.doctorName || defaultClinicData.doctorName,
      doctorTitle: s.doctorTitle || defaultClinicData.doctorTitle,
      doctorBio: s.doctorBio || defaultClinicData.doctorBio,
      doctorExperienceYears:
        s.experienceYears || defaultClinicData.doctorExperienceYears,
      tagline: s.tagline || defaultClinicData.tagline,
      quote: s.quote || defaultClinicData.quote,
      highlightedConditions:
        s.highlightedConditions || defaultClinicData.highlightedConditions,
      contact: {
        ...defaultClinicData.contact,
        phoneFormatted: s.phone || defaultClinicData.contact.phoneFormatted,
        email: (s.email || defaultClinicData.contact.email).replace("@", "[at]"),
        youtubeChannelUrl:
          s.youtubeChannelUrl || defaultClinicData.contact.youtubeChannelUrl,
        youtubeChannelName:
          s.youtubeChannelName || defaultClinicData.contact.youtubeChannelName,
        secondaryPhone: s.secondaryPhone || defaultClinicData.contact.secondaryPhone,
        secondaryPhoneFormatted: s.secondaryPhone || defaultClinicData.contact.secondaryPhoneFormatted,
        secondaryEmail: (s.secondaryEmail || defaultClinicData.contact.secondaryEmail).replace("@", "[at]"),
        secondaryWhatsappUrl: s.secondaryPhone
          ? `https://wa.me/${s.secondaryPhone.replace(/\D/g, "")}`
          : defaultClinicData.contact.secondaryWhatsappUrl,
        secondaryContactName: s.secondaryContactName || defaultClinicData.contact.secondaryContactName,
      },
      address: {
        ...defaultClinicData.address,
        street: s.streetAddress || defaultClinicData.address.street,
        locality: s.locality || defaultClinicData.address.locality,
        pincode: s.pincode || defaultClinicData.address.pincode,
        fullFormatted: `${s.clinicName || defaultClinicData.clinicName}, ${s.streetAddress || defaultClinicData.address.street}, ${s.locality || defaultClinicData.address.locality} – ${s.pincode || defaultClinicData.address.pincode}, Maharashtra`,
      },
      // SANITY SOURCE-OF-TRUTH: If specialties exist in Sanity, use the published Sanity list exactly as returned.
      // Do NOT resurrect deleted or modified items from defaultClinicData.
      specialties: (() => {
        const uniqueSpecs = deduplicateSanityDocs(specialties || []);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return uniqueSpecs.map((spec: any) => ({
          id: spec.slug?.current || spec._id.replace("specialty-", "").replace(/^drafts\./, ""),
          title: spec.title,
          shortDesc: spec.shortDesc || "",
          fullDesc: spec.fullDesc || "",
          iconName: spec.iconName || "Pill",
          conditions: spec.conditions || [],
          benefits: spec.benefits || [],
        }));
      })(),
      faqs: (() => {
        const uniqueFaqs = deduplicateSanityDocs(faqs || []);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return uniqueFaqs.map((f: any) => ({
          id: f._id.replace(/^drafts\./, ""),
          question: f.question,
          answer: f.answer,
          category: f.category || "General",
        }));
      })(),
      certificates: (() => {
        const uniqueCerts = deduplicateSanityDocs(certificates || []);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return uniqueCerts.map((c: any) => ({
          id: c._id.replace(/^drafts\./, ""),
          title: c.title,
          issuingAuthority: c.issuingAuthority,
          year: c.year || "Verified",
          imageUrl: c.image ? urlFor(c.image) : "/images/certificates/cert_mch_digikyd_qr.jpg",
          altText: c.altText || c.title,
          description: c.description || "",
        }));
      })(),
      youtubeVideos: (() => {
        const uniqueVideos = deduplicateSanityDocs(youtubeVideos || []);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return uniqueVideos.map((y: any) => ({
          id: y._id.replace(/^drafts\./, ""),
          title: y.title,
          description: y.description || "",
          youtubeId: y.youtubeId,
          thumbnailUrl: y.thumbnail
            ? urlFor(y.thumbnail)
            : (y.youtubeId ? `https://i.ytimg.com/vi/${y.youtubeId}/hqdefault.jpg` : ""),
          uploadDate: y.uploadDate || "2026-01-01",
        }));
      })(),
      testimonials: (() => {
        const uniqueTestimonials = deduplicateSanityDocs(testimonials || []);
        // If there are no reviews in Sanity (or all reviews are deleted), return empty array so section on website is hidden
        return uniqueTestimonials.map((t: any) => {
          const avatarPhoto = t.photo ? urlFor(t.photo) : "";
          const proofPhoto = t.proofImage ? urlFor(t.proofImage) : "";
          const externalLink = (t.postOrImageUrl || "").trim();
          const isDirectImg =
            Boolean(externalLink) &&
            (/\.(jpeg|jpg|gif|png|webp|avif|svg)(\?.*)?$/i.test(externalLink) ||
              externalLink.includes("cdn.sanity.io/images"));

          return {
            id: t._id.replace(/^drafts\./, ""),
            name: t.name,
            condition: t.condition || "",
            comment: t.comment,
            rating: t.rating || 5,
            avatarUrl: avatarPhoto,
            imageUrl: proofPhoto || (isDirectImg ? externalLink : ""),
            postUrl: !isDirectImg ? externalLink : "",
            videoUrl: t.videoFileUrl || t.videoUrl || "",
          };
        });
      })(),
      hours:
        s.hours && s.hours.length > 0
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            s.hours.map((h: any) => ({
              days: h.days,
              time: h.time,
              isClosed: !!h.isClosed,
            }))
          : defaultClinicData.hours,
      gallery: (() => {
        const uniqueGallery = deduplicateSanityDocs(gallery || []);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return uniqueGallery.map((g: any) => ({
          id: g._id.replace(/^drafts\./, ""),
          title: g.title,
          subtitle: g.subtitle || "",
          imageUrl: (g.image ? urlFor(g.image) : "") || g.imageUrl || "",
          videoUrl: g.videoFileUrl || g.videoUrl || "",
          altText: g.altText || g.title,
          category:
            g.category ||
            (g.title?.toLowerCase().includes("swelling") ||
            g.title?.toLowerCase().includes("acne") ||
            g.title?.toLowerCase().includes("dermatitis") ||
            g.title?.toLowerCase().includes("peeling") ||
            g.title?.toLowerCase().includes("lesion")
              ? "Clinical Results"
              : "Clinic Facilities"),
        }));
      })(),
    });
  } catch (error) {
    console.error(
      "❌ [Sanity CMS Request Failed]:",
      error instanceof Error ? error.message : error
    );
    return signClinicMedia(defaultClinicData);
  }
}
