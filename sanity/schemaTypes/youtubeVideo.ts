import { defineField, defineType } from "sanity";

export const youtubeVideo = defineType({
  name: "youtubeVideo",
  title: "YouTube Health Videos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Video Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "youtubeId",
      title: "YouTube Video ID or URL",
      type: "string",
      description: "e.g. 'MEphim0ujWk' or 'https://www.youtube.com/watch?v=MEphim0ujWk'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Video Summary",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "thumbnail",
      title: "Custom Thumbnail (Optional)",
      type: "image",
    }),
    defineField({
      name: "uploadDate",
      title: "Upload Date",
      type: "date",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
