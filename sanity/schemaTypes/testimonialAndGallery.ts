import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Patient Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Patient Name (e.g. S. Kulkarni)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "condition",
      title: "Condition Addressed (e.g. Chronic Asthma & Dust Allergy)",
      type: "string",
    }),
    defineField({
      name: "comment",
      title: "Testimonial Comment / Review",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Patient Avatar / Photo (Optional)",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload the patient's avatar or portrait photo (displayed next to their name)",
    }),
    defineField({
      name: "proofImage",
      title: "Review Screenshot / Case Document (Optional)",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload an optional review screenshot, WhatsApp feedback, handwritten note, or clinical photo",
    }),
    defineField({
      name: "postOrImageUrl",
      title: "Or Post Link / Image URL (Instagram, Google Review, Facebook, etc.)",
      type: "url",
      description:
        "Alternatively, paste an Instagram Post, Google Review, Facebook Post, or direct image URL (e.g. https://www.instagram.com/p/... or https://.../image.jpg)",
    }),
    defineField({
      name: "embedVideoOrImage",
      title: "Embed Video or Image",
      type: "url",
      description:
        "Paste an embed video link or image link (YouTube, Instagram Reel, Facebook Video, etc.)",
    }),
    defineField({
      name: "videoFile",
      title: "Video Testimonial File (Optional)",
      type: "file",
      options: {
        accept: "video/*",
      },
      description: "Upload an MP4, MOV, or WebM video testimonial clip directly",
    }),
    defineField({
      name: "videoUrl",
      title: "Video Link (Instagram Reel, Facebook, YouTube, etc.)",
      type: "url",
      description:
        "Paste a link to an Instagram Reel / Post, Facebook Video, YouTube video, or cloud video link (e.g. https://www.instagram.com/reel/...)",
    }),
    defineField({
      name: "rating",
      title: "Rating (1 to 5 Stars)",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});

export const galleryItem = defineType({
  name: "galleryItem",
  title: "Clinic Gallery Images & Videos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Image / Media Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle / Caption",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Photo / Video Poster",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload the high-resolution photo or the video thumbnail poster",
    }),
    defineField({
      name: "imageUrl",
      title: "Or Image URL / Photo Link (Optional)",
      type: "url",
      description: "Alternatively paste an external image URL or direct photo link",
    }),
    defineField({
      name: "videoFile",
      title: "Video File (Optional)",
      type: "file",
      options: {
        accept: "video/*",
      },
      description: "Upload an optional MP4 or WebM video clip directly",
    }),
    defineField({
      name: "videoUrl",
      title: "Video Link (Instagram Reel, Facebook, YouTube, etc.)",
      type: "url",
      description:
        "Paste a link to an Instagram Reel / Post, Facebook Video, YouTube video, or cloud video link (e.g. https://www.instagram.com/reel/...)",
    }),
    defineField({
      name: "embedVideo",
      title: "Embed Video",
      type: "url",
      description:
        "Paste an embed video link (YouTube, Instagram Reel, Facebook Video, etc.)",
    }),
    defineField({
      name: "altText",
      title: "Alt Text (for SEO & Accessibility)",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Gallery Category",
      type: "string",
      options: {
        list: [
          { title: "Clinical Results", value: "Clinical Results" },
          { title: "Clinic Facilities", value: "Clinic Facilities" },
        ],
        layout: "radio",
      },
      initialValue: "Clinic Facilities",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});
