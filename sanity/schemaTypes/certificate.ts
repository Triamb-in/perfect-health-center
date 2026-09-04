import { defineField, defineType } from "sanity";

export const certificate = defineType({
  name: "certificate",
  title: "Certificates & Credentials",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Certificate Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "issuingAuthority",
      title: "Issuing Authority / Board",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year / Status Badge",
      type: "string",
      description: "e.g. 'Verified Council Member', '2024'",
    }),
    defineField({
      name: "image",
      title: "Certificate Photo / Scan",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "altText",
      title: "Alt Text for Accessibility",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description / Clinical Scope",
      type: "text",
      rows: 3,
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
