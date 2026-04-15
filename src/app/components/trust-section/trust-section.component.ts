import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-trust-section',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section class="trust-section">
      <div class="container">
        <div class="trust-grid">
          <div class="trust-item">
            <div class="trust-icon">🏠</div>
            <h3>{{ 'TRUST_EXPERT_TITLE' | translate }}</h3>
            <p>{{ 'TRUST_EXPERT_DESC' | translate }}</p>
          </div>
          <div class="trust-item">
            <div class="trust-icon">🤝</div>
            <h3>{{ 'TRUST_DIRECT_TITLE' | translate }}</h3>
            <p>{{ 'TRUST_DIRECT_DESC' | translate }}</p>
          </div>
          <div class="trust-item">
            <div class="trust-icon">💎</div>
            <h3>{{ 'TRUST_CHARGES_TITLE' | translate }}</h3>
            <p>{{ 'TRUST_CHARGES_DESC' | translate }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .trust-section {
      padding: 60px 20px;
      background-color: #f8f9fa;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .trust-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }

    .trust-item {
      background: white;
      padding: 40px 30px;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s ease;
      box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    }

    .trust-item:hover {
      transform: translateY(-5px);
    }

    .trust-icon {
      font-size: 3rem;
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 15px;
      color: #333;
    }

    p {
      color: #666;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .trust-section { padding: 40px 15px; }
      .trust-item { padding: 30px 20px; }
    }
  `]
})
export class TrustSectionComponent {}
