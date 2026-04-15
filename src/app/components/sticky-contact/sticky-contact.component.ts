import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sticky-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sticky-contact-container">
      <a href="tel:+91919784180199" class="contact-button call-btn" aria-label="Call Now">
        <span class="icon">📞</span>
        <span class="text">Call Now</span>
      </a>
      <a [href]="whatsappUrl" target="_blank" class="contact-button whatsapp-btn" aria-label="WhatsApp Us">
        <span class="icon">💬</span>
        <span class="text">WhatsApp</span>
      </a>
    </div>
  `,
  styles: [`
    .sticky-contact-container {
      position: fixed;
      bottom: 20px;
      left: 15px;
      right: 15px;
      display: flex;
      justify-content: space-between;
      gap: 15px;
      z-index: 1000;
      pointer-events: none;
    }

    .contact-button {
      pointer-events: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 20px;
      border-radius: 50px;
      color: white;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      transition: transform 0.2s, box-shadow 0.2s;
      flex: 1;
      max-width: 180px;
    }

    .contact-button:active {
      transform: scale(0.95);
    }

    .call-btn {
      background-color: #007bff;
    }

    .whatsapp-btn {
      background-color: #25d366;
    }

    .icon {
      font-size: 1.2rem;
    }

    @media (min-width: 768px) {
      .sticky-contact-container {
        left: auto;
        right: 30px;
        bottom: 30px;
        flex-direction: column;
        width: auto;
      }
      .contact-button {
        max-width: none;
        width: 150px;
      }
    }
  `]
})
export class StickyContactComponent {
  whatsappUrl = 'https://wa.me/91919784180199?text=Hi%20I%20am%20interested%20in%20your%20property';
}
