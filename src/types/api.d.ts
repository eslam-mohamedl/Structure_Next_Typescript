// type for card components
export interface CardProps {
  title: string;
  description: string;
  buttonText: string;
}

// type for hero section components
export interface HeroSectionProps {
  title1?: string;
  title2?: string;
  title3?: string;
  title4?: string;
  title5?: string;
  subTitle?: string;
  primaryButton?: string;
  secondaryButton?: string;
  image?: string;
  reverse?: boolean;
  className?: string;
  center?: boolean;
}
// type for main layout components
export interface MainLayoutProps {
  children: React.ReactNode;
}
