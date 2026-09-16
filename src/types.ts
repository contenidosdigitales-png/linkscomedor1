export type CategoryType = 'all' | 'forms' | 'menu' | 'pautas';

export interface PautaContent {
  level: string;
  subtitle: string;
  prices: {
    menuRegular: string;
    ticketEventual: string;
    vianda?: string;
  };
  deadlines: {
    cancelacion: string;
    ticketEventual: string;
    modificaciones?: string;
  };
  keyPoints: string[];
  metodologia?: string[];
  organizacion: string[];
  contacto: string;
}

export interface PortalLink {
  id: string;
  title: string;
  category: 'forms' | 'menu' | 'pautas';
  url: string;
  badge: string;
  description: string;
  highlight?: string;
  priceTag?: string;
  iconName: 'Ticket' | 'ClipboardCheck' | 'CalendarX' | 'Utensils' | 'BookOpen' | 'GraduationCap' | 'School';
  isPauta?: boolean;
  pautaData?: PautaContent;
}
