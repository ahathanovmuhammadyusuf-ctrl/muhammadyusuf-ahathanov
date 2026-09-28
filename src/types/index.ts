export type Language = 'uz' | 'ru' | 'en';
export type Theme = 'dark' | 'light';

export interface ProjectDetail {
  id: string;
  projectNumber: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  category: Record<Language, string>;
  technologies: string[];
  description: Record<Language, string>;
  overview: Record<Language, string>;
  purpose: Record<Language, string>;
  concept: Record<Language, string>;
  resultGoal: Record<Language, string>;
  image: string;
  featured?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'programming' | 'creative_ai' | 'robotics' | 'development' | 'computer';
  description: Record<Language, string>;
  iconName: string;
}

export interface CarModelItem {
  id: string;
  name: string;
  brand: string;
  category: Record<Language, string>;
  power: string;
  engine: string;
  transmission: string;
  fuelConsumption: string;
  priceCategory: Record<Language, string>;
  highlights: Record<Language, string[]>;
  description: Record<Language, string>;
  targetAudience: Record<Language, string>;
  imageUrl?: string;
}

export interface CarFactItem {
  id: string;
  category: Record<Language, string>;
  title: Record<Language, string>;
  fact: Record<Language, string>;
  techContext: Record<Language, string>;
}

export interface DriverTipItem {
  id: string;
  title: Record<Language, string>;
  tip: Record<Language, string>;
  priority: 'essential' | 'safety' | 'maintenance' | 'practical';
  icon: string;
}
