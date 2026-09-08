import { createClient } from "next-sanity";
import { defaultClinicData } from "../content/defaultClinicData";
import * as fs from "fs";
import * as path from "path";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "ciisvyoq";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error("❌ SANITY_API_WRITE_TOKEN is missing in environment.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-03-01",
  token,
  useCdn: false,
});

async function uploadLocalImage(filePath: string, filename: string) {
  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ File not found: ${filePath}`);
    return null;
  }
  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload("image", stream, { filename });
  return asset;
}

async function uploadRemoteImage(url: string, filename: string) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    const asset = await client.assets.upload("image", buffer, { filename });
    return asset;
  } catch (err) {
    console.warn(`⚠️ Failed to upload remote image ${url}:`, err);
    return null;
  }
}

async function seed() {
  console.log("🌱 Starting Sanity Content Seeding for project:", projectId);

  // 1. Clinic Settings
  console.log("1/7 Seeding Clinic Settings...");
  const clinicSettingsDoc = {
    _id: "clinicSettings",
    _type: "clinicSettings",
    clinicName: defaultClinicData.clinicName,
    doctorName: defaultClinicData.doctorName,
    doctorTitle: defaultClinicData.doctorTitle,
    doctorBio: defaultClinicData.doctorBio,
    experienceYears: defaultClinicData.doctorExperienceYears,
    tagline: defaultClinicData.tagline,
    quote: defaultClinicData.quote,
    phone: defaultClinicData.contact.phoneFormatted,
    email: defaultClinicData.contact.email,
    streetAddress: defaultClinicData.address.street,
    locality: defaultClinicData.address.locality,
    pincode: defaultClinicData.address.pincode,
    youtubeChannelUrl: defaultClinicData.contact.youtubeChannelUrl,
    youtubeChannelName: defaultClinicData.contact.youtubeChannelName,
    hours: defaultClinicData.hours.map((h, i) => ({
      _key: `hour_${i}`,
      days: h.days,
      time: h.time,
      isClosed: h.isClosed,
    })),
  };
  await client.createOrReplace(clinicSettingsDoc);
  console.log("✅ Clinic Settings seeded.");

  // 2. Specialties
  console.log("2/7 Seeding Specialties...");
  for (let i = 0; i < defaultClinicData.specialties.length; i++) {
    const s = defaultClinicData.specialties[i];
    const specDoc = {
      _id: `specialty-${s.id}`,
      _type: "specialty",
      title: s.title,
      slug: {
        _type: "slug",
        current: s.id,
      },
      iconName: s.iconName,
      shortDesc: s.shortDesc,
      fullDesc: s.fullDesc,
      conditions: s.conditions,
      benefits: s.benefits,
      order: i + 1,
    };
    await client.createOrReplace(specDoc);
  }
  console.log(`✅ ${defaultClinicData.specialties.length} Specialties seeded.`);

  // 3. FAQs
  console.log("3/7 Seeding FAQs...");
  for (let i = 0; i < defaultClinicData.faqs.length; i++) {
    const f = defaultClinicData.faqs[i];
    const faqDoc = {
      _id: `faq-${f.id}`,
      _type: "faq",
      question: f.question,
      answer: f.answer,
      category: f.category || "General",
      order: i + 1,
    };
    await client.createOrReplace(faqDoc);
  }
  console.log(`✅ ${defaultClinicData.faqs.length} FAQs seeded.`);

  // 4. Testimonials
  console.log("4/7 Seeding Testimonials...");
  for (let i = 0; i < defaultClinicData.testimonials.length; i++) {
    const t = defaultClinicData.testimonials[i];
    const testDoc = {
      _id: `testimonial-${t.id}`,
      _type: "testimonial",
      name: t.name,
      condition: t.condition,
      comment: t.comment,
      rating: t.rating,
      order: i + 1,
    };
    await client.createOrReplace(testDoc);
  }
  console.log(`✅ ${defaultClinicData.testimonials.length} Testimonials seeded.`);

  // 5. YouTube Videos
  console.log("5/7 Seeding YouTube Videos...");
  for (let i = 0; i < defaultClinicData.youtubeVideos.length; i++) {
    const y = defaultClinicData.youtubeVideos[i];
    const videoDoc = {
      _id: `video-${y.id}`,
      _type: "youtubeVideo",
      title: y.title,
      youtubeId: y.youtubeId,
      description: y.description,
      uploadDate: y.uploadDate,
      order: i + 1,
    };
    await client.createOrReplace(videoDoc);
  }
  console.log(`✅ ${defaultClinicData.youtubeVideos.length} YouTube Videos seeded.`);

  // 6. Certificates
  console.log("6/7 Seeding Certificates & uploading credentials scans...");
  for (let i = 0; i < defaultClinicData.certificates.length; i++) {
    const c = defaultClinicData.certificates[i];
    const fileName = c.imageUrl.split("/").pop() || "";
    const localCertPath = path.resolve(
      process.cwd(),
      "server-storage",
      "media",
      "certificates",
      fileName
    );

    const asset = await uploadLocalImage(localCertPath, fileName);
    const certDoc: any = {
      _id: `cert-${c.id}`,
      _type: "certificate",
      title: c.title,
      issuingAuthority: c.issuingAuthority,
      year: c.year,
      altText: c.altText,
      description: c.description,
      order: i + 1,
    };
    if (asset) {
      certDoc.image = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      };
    }
    await client.createOrReplace(certDoc);
  }
  console.log(`✅ ${defaultClinicData.certificates.length} Certificates seeded.`);

  // 7. Gallery
  console.log("7/7 Seeding Gallery items & images...");
  for (let i = 0; i < defaultClinicData.gallery.length; i++) {
    const g = defaultClinicData.gallery[i];
    const asset = await uploadRemoteImage(g.imageUrl, `gallery-${g.id}.jpg`);
    const galDoc: any = {
      _id: `gallery-${g.id}`,
      _type: "galleryItem",
      title: g.title,
      subtitle: g.subtitle,
      altText: g.altText,
      order: i + 1,
    };
    if (asset) {
      galDoc.image = {
        _type: "image",
        asset: {
          _type: "reference",
          _ref: asset._id,
        },
      };
    }
    await client.createOrReplace(galDoc);
  }
  console.log(`✅ ${defaultClinicData.gallery.length} Gallery items seeded.`);

  console.log("\n🎉 ALL CLINIC CONTENT HAS BEEN SUCCESSFULLY SEEDED INTO SANITY!");
}

seed().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
