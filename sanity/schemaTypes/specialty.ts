import { defineField, defineType } from "sanity";

export const specialty = defineType({
  name: "specialty",
  title: "Clinical Specialties",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Specialty Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "iconName",
      title: "Icon Name",
      type: "string",
      description: "Pill, Stethoscope, HeartPulse, Baby, Activity, Sparkles",
    }),
    defineField({
      name: "shortDesc",
      title: "Short Description (Card summary)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "fullDesc",
      title: "Full Detailed Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "conditions",
      title: "Treated Conditions / Symptoms",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "benefits",
      title: "Therapeutic Advantages / Key Benefits",
      type: "array",
      of: [{ type: "string" }],
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
