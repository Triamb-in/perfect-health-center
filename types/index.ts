export interface Specialty {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  conditions: string[];
  benefits: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  altText: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuingAuthority: string;
  year?: string;
  imageUrl: string;
  altText: string;
  description: string;
}

export interface YouTubeVideoItem {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnailUrl: string;
  uploadDate?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  condition: string;
  comment: string;
  rating: number;
}

export interface PillarItem {
  title: string;
  desc: string;
  iconName: string;
}

export interface ClinicHours {
  days: string;
  time: string;
  isClosed?: boolean;
}

export interface ClinicData {
  clinicName: string;
  doctorName: string;
  // Confirm exact qualification degree with client before final production launch.
  doctorDegreePlaceholder?: string;
  doctorTitle: string;
  doctorBio: string;
  doctorExperienceYears: string;
  tagline: string;
  quote: string;
  address: {
    clinicName: string;
    street: string;
    locality: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
    regionContext: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    whatsappUrl: string;
    youtubeChannelUrl: string;
    youtubeChannelName: string;
  };
  developerCredit: {
    text: string;
    brand: string;
    handle: string;
    url: string;
  };
  hours: ClinicHours[];
  paymentModes: string[];
  specialties: Specialty[];
  pillars: PillarItem[];
  faqs: FAQItem[];
  gallery: GalleryItem[];
  certificates: CertificateItem[];
  youtubeVideos: YouTubeVideoItem[];
  testimonials: TestimonialItem[];
}
