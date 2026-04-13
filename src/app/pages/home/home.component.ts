import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredColony = {
    name: 'Colony Ghar Niwas',
    location: 'Patrakar Colony, Jaipur',
    description: 'A premium residential project offering JDA approved plots with state-of-the-art infrastructure, wide roads, and green spaces.',
    highlights: [
      'JDA Approved Plots',
      'Gated Community',
      '24/7 Water Supply',
      'Prime Location'
    ]
  };

  popularPlots = [
    {
      id: 1,
      title: 'Corner Residential Plot',
      size: '111 Sq Yards',
      price: '₹ 45 Lakhs',
      facing: 'North-East',
      feature: 'Corner Plot'
    },
    {
      id: 2,
      title: 'Prime Commercial Plot',
      size: '200 Sq Yards',
      price: '₹ 1.2 Crores',
      facing: 'Main Road',
      feature: 'Commercial'
    },
    {
      id: 3,
      title: 'Standard Residential Plot',
      size: '166 Sq Yards',
      price: '₹ 62 Lakhs',
      facing: 'West',
      feature: 'Ready to Build'
    }
  ];
}
