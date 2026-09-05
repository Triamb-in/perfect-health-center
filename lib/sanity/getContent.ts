import { defaultClinicData } from "@/content/defaultClinicData";
import { ClinicData } from "@/types";
import { sanityClient, urlFor } from "./client";
import { getSignedMediaUrl } from "@/lib/mediaSecurity";

function signClinicMedia(data: ClinicData): ClinicData {
  return {
    ...data,
    certificates: data.certificates.map((c) => {
      const fileName = c.imageUrl.split("/").pop() || "";
      return {
        ...c,
        imageUrl: getSignedMediaUrl(`certificates/${fileName}`),
      };
    }),
  };
}

export async function getClinicData(): Promise<ClinicData> {
  // If Sanity is not connected yet, serve verified default data with zero latency
  if (!sanityClient) {
    return signClinicMedia(defaultClinicData);
  }

  try {
    const settings = await sanityClient.fetch(
      `*[_type == "clinicSettings"][0]`
    );
    const specialties = await sanityClient.fetch(
      `*[_type == "specialty"] | order(order asc)`
    );
    const faqs = await sanityClient.fetch(
      `*[_type == "faq"] | order(order asc)`
    );
    const testimonials = await sanityClient.fetch(
      `*[_type == "testimonial"] | order(order asc)`
    );
    const certificates = await sanityClient.fetch(
      `*[_type == "certificate"] | order(order asc)`
    );
    const youtubeVideos = await sanityClient.fetch(
      `*[_type == "youtubeVideo"] | order(order asc)`
    );
    const gallery = await sanityClient.fetch(
      `*[_type == "galleryItem"] | order(order asc)`
    );

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
        email: s.email || defaultClinicData.contact.email,
        youtubeChannelUrl:
          s.youtubeChannelUrl || defaultClinicData.contact.youtubeChannelUrl,
        youtubeChannelName:
          s.youtubeChannelName || defaultClinicData.contact.youtubeChannelName,
      },
      address: {
        ...defaultClinicData.address,
        street: s.streetAddress || defaultClinicData.address.street,
        locality: s.locality || defaultClinicData.address.locality,
        pincode: s.pincode || defaultClinicData.address.pincode,
        fullFormatted: `${s.clinicName || defaultClinicData.clinicName}, ${s.streetAddress || defaultClinicData.address.street}, ${s.locality || defaultClinicData.address.locality} – ${s.pincode || defaultClinicData.address.pincode}, Maharashtra`,
      },
      specialties:
        specialties && specialties.length > 0
          ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
            specialties.map((s: any) => ({
              id: s.slug?.current || s._id,
              title: s.title,
              shortDesc: s.shortDesc || "",
              fullDesc: s.fullDesc || "",
              iconName: s.iconName || "Pill",
              conditions: s.conditions || [],
              benefits: [],
            }))
          : defaultClinicData.specialties,
      faqs: (() => {
        if (!faqs || faqs.length === 0) return defaultClinicData.faqs;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sanityMapped = faqs.map((f: any) => ({
          id: f._id,
          question: f.question,
          answer: f.answer,
          category: f.category || "General",
        }));
        // Deduplicate so Sanity edits take priority over default questions
        const sanityQuestionTitles = new Set(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          sanityMapped.map((f: any) => f.question.trim().toLowerCase())
        );
        const remainingDefaults = defaultClinicData.faqs.filter(
          (d) => !sanityQuestionTitles.has(d.question.trim().toLowerCase())
        );
        return [...sanityMapped, ...remainingDefaults];
      })(),
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
              thumbnailUrl: y.thumbnail ? urlFor(y.thumbnail) : "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
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
    console.error("Failed to fetch from Sanity, falling back to default clinic data:", error);
    return signClinicMedia(defaultClinicData);
  }
}
