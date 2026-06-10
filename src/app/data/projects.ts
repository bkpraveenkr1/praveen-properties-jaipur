import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'riyasat-eco-park',
    name: 'Riyasat Eco Park',
    location: 'Bhated, Jaipur',
    description: 'Welcome to Riyasat Eco Park Township, where every day is a celebration of refined living. Discover a world of unmatched elegance, comfort, and serenity. Your journey to an extraordinary lifestyle begins here. Located in a prime area, our township offers seamless connectivity to the city\'s key destinations, educational institutions, healthcare facilities, and entertainment hubs. Enjoy the convenience of easy access to everything you need, while relishing the tranquility of your own private sanctuary.',
    startingPrice: '25 Lacs',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800', // Plot/Land image
    isNew: true,
    features: ['JDA Approved', '60ft Road', 'Electricity & Water', 'Park Facing'],
    propertyType: 'Plotted Development',
    totalArea: '1,00,000 Sq .Mtr',
    reraNo: 'RAJ/P/2023/2691',
    propertyStatus: 'JDA and RERA Approved',
    legality: '90 A Letter, Approved Map, Marketing Map',
    projectStatus: 'Ongoing',
    plots: [
      { id: '101', size: '100 Sq Yards', price: '25.5 Lacs', facing: 'East', status: 'Available' },
      { id: '102', size: '100 Sq Yards', price: '25 Lacs', facing: 'West', status: 'Available' },
      { id: '103', size: '150 Sq Yards', price: '38 Lacs', facing: 'North', status: 'Sold' },
      { id: '104', size: '200 Sq Yards', price: '50 Lacs', facing: 'South', status: 'Available' },
      { id: '105', size: '200 Sq Yards', price: '50 Lacs', facing: 'South', status: 'Available' },
      { id: '106', size: '200 Sq Yards', price: '50 Lacs', facing: 'South', status: 'Available' },
      { id: '107', size: '200 Sq Yards', price: '50 Lacs', facing: 'South', status: 'Available' }
    ],
    whyThisProject: [
      'Located in Bhated, Jaipur with excellent connectivity.',
      'JDA & RERA approved plotted township.',
      'State-of-the-art facilities and beautiful landscaping.',
      'Gated community with 24/7 security.'
    ]
  },
  {
    id: 'green-enclave',
    name: 'Green Enclave',
    location: 'Sikar Road, Jaipur',
    description: 'Eco-friendly plotted development near Chomu, ideal for retirement homes and serene living.',
    startingPrice: '15 Lacs',
    imageUrl: 'https://images.unsplash.com/photo-1542332213-31f87348057f?w=800',
    isNew: false,
    features: ['Near NH-52', 'Street Lights', 'Community Hall', 'Temple'],
    propertyType: 'Plotted Development',
    totalArea: '75,000 Sq .Mtr',
    reraNo: 'Not Applicable',
    propertyStatus: 'JDA Approved',
    legality: '90 A Letter, Approved Map',
    projectStatus: 'Completed',
    plots: [
      { id: 'G1', size: '120 Sq Yards', price: '15.6 Lacs', facing: 'East', status: 'Available' },
      { id: 'G2', size: '120 Sq Yards', price: '15 Lacs', facing: 'West', status: 'Sold' },
      { id: 'G3', size: '250 Sq Yards', price: '32 Lacs', facing: 'Corner', status: 'Available' }
    ],
    whyThisProject: [
      'Pollution-free environment.',
      'High growth potential area.',
      'Immediate possession available.',
      'Direct deal from owner.'
    ]
  },
  {
    id: 'ram-villa',
    name: 'Ram Villa Township',
    location: 'Kalwar Road, Jaipur',
    description: 'Budget-friendly plots in one of JDA\'s fastest-growing sectors with superb accessibility.',
    startingPrice: '20 Lacs',
    imageUrl: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800',
    isNew: true,
    features: ['Fast Development', 'Sewerage Line', 'Close to Jhotwara', 'Easy Loan'],
    propertyType: 'Plotted Development',
    totalArea: '50,000 Sq .Mtr',
    reraNo: 'Not Applicable',
    propertyStatus: 'JDA Approved',
    legality: '90 A Letter, Approved Map',
    projectStatus: 'Completed',
    plots: [
      { id: 'R1', size: '111 Sq Yards', price: '20 Lacs', facing: 'North', status: 'Available' },
      { id: 'R2', size: '111 Sq Yards', price: '21 Lacs', facing: 'East', status: 'Available' },
      { id: 'R3', size: '111 Sq Yards', price: '20.5 Lacs', facing: 'West', status: 'Available' }
    ],
    whyThisProject: [
      'Low entry price for investors.',
      'Well-connected to city center via Kalwar Road.',
      'Bank loan approved from major banks.',
      'Surrounded by developed colonies.'
    ]
  }
];
