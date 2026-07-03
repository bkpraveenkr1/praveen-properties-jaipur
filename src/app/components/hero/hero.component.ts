import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <header class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1>{{ 'HERO_TITLE' | translate }}</h1>
        <p class="subheading">{{ 'HERO_SUBTITLE' | translate }}</p>
        <div class="hero-actions">
          <div class="call-cta-container non-clickable">
            <span class="call-label">{{ 'CALL_NOW' | translate }}</span>
            <span class="phone-text">+91 97841 80199</span>
          </div>
          <a href="https://wa.me/919784180199?text=Hi%20I%20am%20interested%20in%20your%20property" 
             target="_blank" class="cta-button secondary-cta">{{ 'WHATSAPP_US' | translate }}</a>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .hero-section {
      position: relative;
      height: 60vh;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      background: url('/assets/common/hero_land.png') center/cover no-repeat;
      padding: 0 20px;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4));
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
    }

    h1 {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 10px;
      line-height: 1.2;
    }

    .subheading {
      font-size: 1.2rem;
      margin-bottom: 30px;
      opacity: 0.9;
    }

    .hero-actions {
      display: flex;
      gap: 15px;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    .call-cta-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px 25px;
      border-radius: 8px;
      background-color: #007bff;
      border: 1px solid #007bff;
      width: 220px;
      height: 60px;
      box-sizing: border-box;
      transition: all 0.3s ease;
      cursor: default;
    }

    .call-cta-container:not(.non-clickable) {
      cursor: pointer;
    }

    .call-cta-container:not(.non-clickable):hover {
      background-color: #0069d9;
      border-color: #0069d9;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .call-label {
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: rgba(255, 255, 255, 0.85);
      margin-bottom: 2px;
    }

    .phone-text {
      font-size: 1.15rem;
      font-weight: 700;
      color: #fff;
    }

    .phone-link {
      font-size: 1.15rem;
      font-weight: 700;
      color: #fff;
      text-decoration: none;
      transition: color 0.2s;
    }

    .phone-link:hover {
      color: #ffeb3b;
    }

    .cta-button {
      border-radius: 8px;
      font-weight: 700;
      text-decoration: none;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      width: 220px;
      height: 60px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .primary-cta {
      background-color: #e91e63;
      color: white;
    }

    .secondary-cta {
      background-color: #25d366;
      color: white;
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    @media (max-width: 768px) {
      h1 { font-size: 2rem; }
      .subheading { font-size: 1rem; }
      .hero-section { height: 50vh; }
    }
  `]
})
export class HeroComponent { }
