import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  gradient: string;
  shape: ProjectShape;
}

export type ProjectCategory = 'Web Design' | 'AI' | 'Marketing';

export type ProjectShape = 'circles' | 'grid' | 'waves' | 'triangles' | 'hexagons' | 'spline';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatarGradient: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

export interface Differentiator {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface FormData {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}
