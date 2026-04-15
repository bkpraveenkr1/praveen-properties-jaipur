export interface Plot {
  id: string;
  size: string; // e.g. "100 Sq Yards"
  price: string; // e.g. "25 Lacs"
  facing?: string; // e.g. "East"
  status: 'Available' | 'Sold';
}

export interface Project {
  id: string;
  name: string;
  location: string;
  description: string;
  startingPrice: string;
  imageUrl: string;
  isNew: boolean;
  features: string[]; // e.g. ["JDA Approved", "60ft Road", "Park Facing"]
  plots: Plot[];
  whyThisProject: string[];
}
