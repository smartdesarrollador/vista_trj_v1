export interface DigitalCard {
  id: number;
  personalInfo: {
    name: string;
    title: string;
    location: string;
    photo: string;
  } | null;
  contact: {
    email: string | null;
    phone: string | null;
    linkedin?: string | null;
    website?: string | null;
    twitter?: string | null;
    instagram?: string | null;
    github?: string | null;
    youtube?: string | null;
    tiktok?: string | null;
    whatsapp?: string | null;
    facebook?: string | null;
  } | null;
  about?: {
    description: string;
    skills: string[];
    experience: number;
  } | null;
  is_active: boolean;
  is_public: boolean;
  slug: string;
  created_at: string;
  updated_at: string;
}

// Interfaces para las operaciones CRUD
export interface CreateDigitalCardData {
  personalInfo: {
    name: string;
    title?: string;
    location?: string;
    photo?: string;
  };
  contact?: {
    email?: string;
    phone?: string;
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
    description?: string;
    skills?: string[];
    experience?: number;
  };
  is_active?: boolean;
  is_public?: boolean;
}

export interface UpdateDigitalCardData extends Partial<CreateDigitalCardData> {}

export interface DigitalCardToggleStatus {
  is_active?: boolean;
  is_public?: boolean;
}

export interface DigitalCardResponse {
  data: DigitalCard;
}

export interface DigitalCardListResponse {
  data: DigitalCard[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
    links: Array<{
      url: string | null;
      label: string;
      active: boolean;
    }>;
  };
}