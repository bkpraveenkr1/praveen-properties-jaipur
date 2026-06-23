import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 'riyasat-eco-park',
    name: 'Neelkanth Nagar',
    location: 'Village- CHAKSU, Jaipur - 303901',
    description: 'Spanning into 133 bighas, Neelkanth Nagar is Jaipur’s largest township-a place inspired by Lord Shiva. Here, everyday life unfolds in a spiritual blessing, offering a blend of devotion and modern elegance. The township is fully connected to major areas of Jaipur. Neelkanth Nagar is fully secured by boundary walls and 24/7 CCTV surveillance, which will give you peace of mind that your loved ones are safe. Here, you will get luxurious amenities like a swimming pool, clubhouse, and sculptures inspired by Lord Shiva.',
    startingPrice: '',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800',
    isNew: true,
    features: ['JDA Approved', '60ft Road', 'Electricity & Water', 'Park Facing'],
    propertyType: 'Plotted Development',
    totalArea: '333692.83 sqm.',
    reraNo: 'RAJ/P/2026/5056',
    propertyStatus: 'Nagar Palika (Govt.) and RERA Approved',
    legality: 'RERA registration and Govt. Approved Map',
    projectStatus: 'Ongoing',
    images: [
      '/assets/projects/riyasat-eco-park/gate.jpg',
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200',
      'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
    ],
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
    ],
    brochureUrl: 'assets/brochures/neelkanth-nagar-brochure.pdf',
    layoutPlanUrl: 'assets/layout-plans/neelkanth-nagar-layout-plan.pdf',
    reraUrl: 'assets/rera/neelkanth-nagar-rera.pdf',
    marketingMapUrl: 'assets/marketing-maps/neelkanth-nagar-marketing-map.pdf',
    videoUrl: 'https://youtu.be/kztiv639Rfc?si=EPvxGl9vEyM4qHZu'
  },
  {
    id: 'green-enclave',
    name: 'Aman Enclave',
    location: 'Boyatwala (Loha Mandi), Jaipur',
    description: 'Eco-friendly plotted development , ideal for retirement homes and serene living.',
    startingPrice: '15 Lacs',
    imageUrl: 'https://images.unsplash.com/photo-1542332213-31f87348057f?w=800',
    isNew: false,
    features: ['Near NH-52', 'Street Lights', 'Community Hall', 'Temple'],
    propertyType: 'Plotted Development',
    totalArea: '63075.38 sqm',
    reraNo: 'RAJ/P/2022/2089',
    propertyStatus: 'JDA and RERA Approved',
    legality: '90 A Letter, Approved Map',
    projectStatus: 'Inprogress',
    images: [
      'https://images.unsplash.com/photo-1542332213-31f87348057f?w=1200',
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1200',
      'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=1200',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200',
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200',
    ],
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
