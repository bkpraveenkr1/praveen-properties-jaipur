import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { Plot } from '../../models/project.model';

@Component({
  selector: 'app-plot-card',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <div class="plot-card" [class.sold]="plot.status === 'Sold'">
      <div class="plot-header">
        <span class="plot-id">Plot #{{ plot.id }}</span>
        <span class="status-badge" [class.available]="plot.status === 'Available'">
          {{ plot.status }}
        </span>
      </div>
      <div class="plot-body">
        <div class="info-item">
          <span class="label">Size</span>
          <span class="value">{{ plot.size }}</span>
        </div>
        <div class="info-item">
          <span class="label">Price</span>
          <span class="value price">₹ {{ plot.price }}</span>
        </div>
        <div class="info-item" *ngIf="plot.facing">
          <span class="label">Facing</span>
          <span class="value">{{ plot.facing }}</span>
        </div>
      </div>
      <div class="plot-footer" *ngIf="plot.status === 'Available'">
        <div class="action-buttons">
          <a href="tel:+91919784180199" class="contact-button call-btn" aria-label="Call Now">
            <span class="icon">📞</span>
            <span class="text">{{ 'CALL_NOW' | translate }}</span>
          </a>
          <a [href]="getWhatsappUrl()" target="_blank" class="contact-button whatsapp-btn" aria-label="WhatsApp Us">
            <span class="icon">💬</span>
            <span class="text">{{ 'WHATSAPP_US' | translate }}</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .plot-card {
      background: white;
      border: 1px solid #eee;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.04);
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .plot-card.sold {
      opacity: 0.7;
      background-color: #fcfcfc;
    }

    .plot-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f0f0f0;
      padding-bottom: 10px;
    }

    .plot-id {
      font-weight: 700;
      font-size: 1.1rem;
      color: #333;
    }

    .status-badge {
      font-size: 0.75rem;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 4px;
      background: #eee;
      color: #777;
    }

    .status-badge.available {
      background: #e8f5e9;
      color: #2e7d32;
    }

    .plot-body {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .info-item {
      display: flex;
      justify-content: space-between;
      font-size: 0.95rem;
    }

    .label {
      color: #888;
    }

    .value {
      font-weight: 600;
      color: #333;
    }

    .value.price {
      color: #e91e63;
      font-weight: 700;
    }

    .plot-footer {
      margin-top: 5px;
    }

    .action-buttons {
      display: flex;
      gap: 10px;
    }

    .contact-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 10px 6px;
      border-radius: 8px;
      color: white;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      transition: all 0.2s;
      flex: 1;
      white-space: nowrap;
    }

    .contact-button:active {
      transform: scale(0.95);
    }

    .call-btn {
      background-color: #007bff;
    }
    
    .call-btn:hover {
      background-color: #0056b3;
    }

    .whatsapp-btn {
      background-color: #25d366;
    }

    .whatsapp-btn:hover {
      background-color: #128c7e;
    }

    .icon {
      font-size: 1.1rem;
    }
  `]
})
export class PlotCardComponent {
  @Input() plot!: Plot;
  @Input() projectName: string = '';

  getWhatsappUrl(): string {
    const message = `Hi I am interested in Plot ${this.plot.id} in ${this.projectName}`;
    return `https://wa.me/91919784180199?text=${encodeURIComponent(message)}`;
  }
}
