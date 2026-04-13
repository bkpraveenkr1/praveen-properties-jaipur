import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  agent = {
    name: 'Praveen Kumar',
    title: 'Senior Real Estate Consultant',
    experience: '12+ Years',
    bio: 'With over a decade of experience in the Jaipur real estate market, I specialize in luxury residential properties and strategic commercial investments. My mission is to provide transparent, data-driven, and personalized guidance to help you find your dream home or the perfect investment opportunity.',
    specialties: [
      { id: 1, title: 'Luxury Villas', icon: '🏠' },
      { id: 2, title: 'Commercial Spaces', icon: '🏢' },
      { id: 3, title: 'Investment Consulting', icon: '📈' },
      { id: 4, title: 'Property Management', icon: '🔑' }
    ]
  };
}
