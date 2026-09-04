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
      title: "Condition Addressed",
      type: "string",
    }),
    defineField({
      name: "comment",
      title: "Testimonial Comment",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1 to 5)",
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
  title: "Clinic Gallery Images",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Image Title",
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
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "altText",
      title: "Alt Text (for SEO & Accessibility)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
});
