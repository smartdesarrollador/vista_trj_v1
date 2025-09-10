export interface DigitalCard {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    photo: string;
  };
  contact: {
    email: string;
    phone: string;
    linkedin?: string;
    website?: string;
    twitter?: string;
    instagram?: string;
    github?: string;
    youtube?: string;
    tiktok?: string;
    whatsapp?: string;
    facebook?: string;
  };
  about?: {
    description: string;
    skills: string[];
    experience: number;
  };
}