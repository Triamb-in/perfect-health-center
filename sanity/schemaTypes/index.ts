import { type SchemaTypeDefinition } from "sanity";
import { clinicSettings } from "./clinicSettings";
import { specialty } from "./specialty";
import { faq } from "./faq";
import { testimonial, galleryItem } from "./testimonialAndGallery";
import { certificate } from "./certificate";
import { youtubeVideo } from "./youtubeVideo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    clinicSettings,
    specialty,
    faq,
    testimonial,
    galleryItem,
    certificate,
    youtubeVideo,
  ],
};
