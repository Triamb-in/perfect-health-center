import { defineField, defineType } from "sanity";

export const clinicSettings = defineType({
  name: "clinicSettings",
  title: "Clinic & Doctor Settings",
  type: "document",
  fields: [
    defineField({
      name: "clinicName",
      title: "Clinic Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "doctorName",
      title: "Doctor Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "doctorTitle",
      title: "Doctor Professional Title",
      type: "string",
    }),
    defineField({
      name: "doctorBio",
      title: "Doctor Bio / About Summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "experienceYears",
      title: "Years of Experience Badge",
      type: "string",
      description: "e.g. '20+'",
    }),
    defineField({
      name: "tagline",
      title: "Hero Tagline",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Inspirational Quote",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "streetAddress",
      title: "Street Address",
      type: "string",
    }),
    defineField({
      name: "locality",
      title: "Locality & District",
      type: "string",
    }),
    defineField({
      name: "pincode",
      title: "Pincode",
      type: "string",
    }),
    defineField({
      name: "youtubeChannelUrl",
      title: "YouTube Channel URL",
      type: "url",
    }),
    defineField({
      name: "youtubeChannelName",
      title: "YouTube Channel Name",
      type: "string",
    }),
    defineField({
      name: "hours",
      title: "Clinic Timings & Consultation Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "days",
              title: "Days (e.g. 'Monday – Saturday')",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "time",
              title: "Hours (e.g. '10:30 AM – 10:00 PM')",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "isClosed",
              title: "Mark as Closed",
              type: "boolean",
              initialValue: false,
            }),
          ],
        },
      ],
    }),
  ],
});
