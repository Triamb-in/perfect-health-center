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
      title: "Patient Photo / Avatar (Optional)",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Upload an optional patient photo or portrait",
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
      validation: (Rule) => Rule.required(),
      description: "Upload the high-resolution photo or the video thumbnail poster",
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
