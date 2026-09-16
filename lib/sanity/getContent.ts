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
      sanityClient.fetch(`*[_type == "testimonial"] | order(order asc)`),
      sanityClient.fetch(`*[_type == "certificate"] | order(order asc)`),
      sanityClient.fetch(`*[_type == "youtubeVideo"] | order(order asc)`),
      sanityClient.fetch(`*[_type == "galleryItem"] | order(order asc)`),
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
        if (!specialties || specialties.length === 0) {
          return defaultClinicData.specialties;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return specialties.map((spec: any) => ({
          id: spec.slug?.current || spec._id.replace("specialty-", ""),
          title: spec.title,
          shortDesc: spec.shortDesc || "",
          fullDesc: spec.fullDesc || "",
          iconName: spec.iconName || "Pill",
          conditions: spec.conditions || [],
          benefits: spec.benefits || [],
        }));
      })(),
      faqs:
        faqs && faqs.length > 0
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            faqs.map((f: any) => ({
              id: f._id,
              question: f.question,
              answer: f.answer,
              category: f.category || "General",
            }))
          : defaultClinicData.faqs,
      certificates:
        certificates && certificates.length > 0
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            certificates.map((c: any) => ({
              id: c._id,
              title: c.title,
              issuingAuthority: c.issuingAuthority,
              year: c.year || "Verified",
              imageUrl: c.image ? urlFor(c.image) : "/images/certificates/cert_mch_digikyd_qr.jpg",
              altText: c.altText || c.title,
              description: c.description || "",
            }))
          : defaultClinicData.certificates,
      youtubeVideos:
        youtubeVideos && youtubeVideos.length > 0
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            youtubeVideos.map((y: any) => ({
              id: y._id,
              title: y.title,
              description: y.description || "",
              youtubeId: y.youtubeId,
              thumbnailUrl: y.thumbnail
                ? urlFor(y.thumbnail)
                : (y.youtubeId ? `https://i.ytimg.com/vi/${y.youtubeId}/hqdefault.jpg` : ""),
              uploadDate: y.uploadDate || "2026-01-01",
            }))
          : defaultClinicData.youtubeVideos,
      testimonials:
        testimonials && testimonials.length > 0
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            testimonials.map((t: any) => ({
              id: t._id,
              name: t.name,
              condition: t.condition || "",
              comment: t.comment,
              rating: t.rating || 5,
            }))
          : defaultClinicData.testimonials,
      hours:
        s.hours && s.hours.length > 0
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            s.hours.map((h: any) => ({
              days: h.days,
              time: h.time,
              isClosed: !!h.isClosed,
            }))
          : defaultClinicData.hours,
      gallery:
        gallery && gallery.length > 0
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            gallery.map((g: any) => ({
              id: g._id,
              title: g.title,
              subtitle: g.subtitle || "",
              imageUrl: g.image ? urlFor(g.image) : defaultClinicData.gallery[0]?.imageUrl || "",
              altText: g.altText || g.title,
            }))
          : defaultClinicData.gallery,
    });
  } catch (error) {
    console.error(
      "❌ [Sanity CMS Request Failed]:",
      error instanceof Error ? error.message : error
    );
    return signClinicMedia(defaultClinicData);
  }
}
