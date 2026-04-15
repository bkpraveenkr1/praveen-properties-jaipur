import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'dream-city',
    name: 'Dream City',
    location: 'Ajmer Road, Jaipur',
    description: 'A premium plot township at Ajmer road with all modern amenities.',
    startingPrice: '25 Lacs',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800', // Plot/Land image
    isNew: true,
    features: ['JDA Approved', '60ft Road', 'Electricity & Water', 'Park Facing'],
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
      'Located on Jaipur-Ajmer Expressway.',
      'Proposed Metro station nearby.',
      'Under JDA scheme, assured development.',
      'Gated community with 24/7 security.'
    ]
  },
  {
    id: 'green-enclave',
    name: 'Green Enclave',
    location: 'Sikar Road, Jaipur',
    description: 'Eco-friendly plotted development near Chomu, ideal for retirement homes.',
    startingPrice: '15 Lacs',
    imageUrl: 'https://images.unsplash.com/photo-1542332213-31f87348057f?w=800',
    isNew: false,
    features: ['Near NH-52', 'Street Lights', 'Community Hall', 'Temple'],
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
    description: 'Budget-friendly plots in one of JDA\'s fastest-growing sectors.',
    startingPrice: '20 Lacs',
    imageUrl: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800',
    isNew: true,
    features: ['Fast Development', 'Sewerage Line', 'Close to Jhotwara', 'Easy Loan'],
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
