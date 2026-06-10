import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="project-detail-page" *ngIf="project">
      <!-- Back Button -->
      <div class="back-container">
        <div class="container">
          <a routerLink="/" class="back-link">← Back to Projects</a>
        </div>
      </div>

      <!-- Project Overview Section -->
      <section class="overview-section">
        <div class="container">
          <!-- Project Title (Uppercase, elegant) -->
          <h1 class="project-title">{{ project.name | uppercase }}</h1>
          
          <!-- Gold Divider/Flourish -->
          <div class="gold-divider">
            <div class="line"></div>
            <div class="ornament"></div>
            <div class="line"></div>
          </div>

          <!-- Overview Heading -->
          <h2 class="overview-heading">Overview</h2>
          
          <!-- Overview Description -->
          <p class="overview-desc">{{ project.description }}</p>

          <!-- Details Grid -->
          <div class="details-grid">
            <!-- Project Name -->
            <div class="detail-item">
              <div class="icon-box">❯</div>
              <div class="detail-text">
                <span class="detail-label">Project Name :</span>
                <span class="detail-value">{{ project.name }}</span>
              </div>
            </div>

            <!-- Location -->
            <div class="detail-item">
              <div class="icon-box">❯</div>
              <div class="detail-text">
                <span class="detail-label">Location :</span>
                <span class="detail-value">{{ project.location }}</span>
              </div>
            </div>

            <!-- Property Type -->
            <div class="detail-item" *ngIf="project.propertyType">
              <div class="icon-box">❯</div>
              <div class="detail-text">
                <span class="detail-label">Property Type :</span>
                <span class="detail-value">{{ project.propertyType }}</span>
              </div>
            </div>

            <!-- Property Status -->
            <div class="detail-item" *ngIf="project.propertyStatus">
              <div class="icon-box">❯</div>
              <div class="detail-text">
                <span class="detail-label">Property Status :</span>
                <span class="detail-value">{{ project.propertyStatus }}</span>
              </div>
            </div>

            <!-- Total Area -->
            <div class="detail-item" *ngIf="project.totalArea">
              <div class="icon-box">❯</div>
              <div class="detail-text">
                <span class="detail-label">Total Area :</span>
                <span class="detail-value">{{ project.totalArea }}</span>
              </div>
            </div>

            <!-- Legality -->
            <div class="detail-item" *ngIf="project.legality">
              <div class="icon-box">❯</div>
              <div class="detail-text">
                <span class="detail-label">Legality :</span>
                <span class="detail-value">{{ project.legality }}</span>
              </div>
            </div>

            <!-- RERA Registration No. -->
            <div class="detail-item" *ngIf="project.reraNo">
              <div class="icon-box">❯</div>
              <div class="detail-text">
                <span class="detail-label">RERA Registration No. :</span>
                <span class="detail-value">{{ project.reraNo }}</span>
              </div>
            </div>

            <!-- Project Status -->
            <div class="detail-item" *ngIf="project.projectStatus">
              <div class="icon-box">❯</div>
              <div class="detail-text">
                <span class="detail-label">Project Status -</span>
                <span class="detail-value">{{ project.projectStatus }}</span>
              </div>
            </div>
          </div>

          <!-- Enquiry Now CTA -->
          <div class="enquiry-cta-container">
            <button class="enquiry-btn" (click)="openEnquiryModal()">Enquiry Now</button>
          </div>
        </div>
      </section>

      <!-- Why This Project -->
      <section class="why-us-section">
        <div class="container">
          <h2>Why this project?</h2>
          <div class="features-grid">
            <div class="feature-item" *ngFor="let point of project.whyThisProject">
              <span class="icon">✅</span>
              <p>{{ point }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Amenities Section -->
      <section class="amenities-section">
        <div class="container">
          <h2>Key Features & Amenities</h2>
          <div class="amenities-list">
            <span class="amenity-tag" *ngFor="let feature of project.features">
              {{ feature }}
            </span>
          </div>
        </div>
      </section>
      
      <!-- Bottom CTA for Mobile -->
      <div class="bottom-cta-padding"></div>

      <!-- Enquiry Modal Popup -->
      <div class="modal-overlay" *ngIf="showEnquiryModal" (click)="closeEnquiryModal()">
        <div class="modal-content" (click)="$event.stopPropagation()">
          <button class="close-btn" (click)="closeEnquiryModal()">&times;</button>
          <h3 class="modal-title">Enquire Now</h3>
          <p class="modal-desc">Connect with us to get more details about <strong>{{ project.name }}</strong></p>
          
          <div class="contact-methods">
            <!-- Call Option -->
            <a href="tel:+91919784180199" class="contact-method call-method">
              <span class="method-icon">📞</span>
              <div class="method-details">
                <span class="method-label">Call Us</span>
                <span class="method-value">+91 97841 80199</span>
              </div>
            </a>

            <!-- WhatsApp Option -->
            <a [href]="getWhatsAppUrl()" target="_blank" class="contact-method whatsapp-method">
              <span class="method-icon">💬</span>
              <div class="method-details">
                <span class="method-label">WhatsApp Chat</span>
                <span class="method-value">Chat Live Now</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .back-container {
      padding: 20px 0 10px 0;
      background-color: white;
    }

    .back-link {
      color: #0d4b75;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      display: inline-block;
      transition: color 0.2s;
    }

    .back-link:hover {
      color: #002d4d;
    }

    .overview-section {
      padding: 30px 0 60px 0;
      background-color: white;
      text-align: center;
    }

    .project-title {
      font-size: 2.6rem;
      font-weight: 700;
      color: #0d4b75;
      letter-spacing: 1.5px;
      margin: 0 0 15px 0;
      font-family: 'Times New Roman', Times, serif, 'Inter', sans-serif;
    }

    /* Gold Flourish Divider */
    .gold-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      margin: 15px auto 35px auto;
      max-width: 500px;
    }

    .gold-divider .line {
      height: 1px;
      background: linear-gradient(90deg, transparent, #c5a880, transparent);
      flex-grow: 1;
    }

    .gold-divider .ornament {
      width: 80px;
      height: 18px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' fill='none'%3E%3Cpath d='M10 10 C 30 2, 70 2, 90 10 C 70 18, 30 18, 10 10 Z' stroke='%23c5a880' stroke-width='1.5'/%3E%3Ccircle cx='50' cy='10' r='3' fill='%23c5a880'/%3E%3Cpath d='M40 10 C 45 6, 55 6, 60 10' stroke='%23c5a880' stroke-width='1'/%3E%3C/svg%3E");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }

    .overview-heading {
      font-size: 1.8rem;
      font-weight: 600;
      color: #0d4b75;
      margin-bottom: 20px;
    }

    .overview-desc {
      font-size: 1.05rem;
      line-height: 1.7;
      color: #444;
      max-width: 850px;
      margin: 0 auto 40px auto;
      text-align: justify;
      text-justify: inter-word;
    }

    /* Details Grid */
    .details-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px 30px;
      max-width: 900px;
      margin: 0 auto 40px auto;
      text-align: left;
    }

    .detail-item {
      display: flex;
      align-items: stretch;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
      transition: border-color 0.2s;
    }

    .detail-item:hover {
      border-color: #cbd5e1;
    }

    .icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #0d4b75;
      color: white;
      width: 42px;
      min-width: 42px;
      font-weight: 700;
      font-size: 0.95rem;
    }

    .detail-text {
      padding: 12px 18px;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;
    }

    .detail-label {
      font-weight: 700;
      color: #334155;
    }

    .detail-value {
      color: #475569;
      font-weight: 500;
    }

    /* Enquiry Button */
    .enquiry-cta-container {
      margin-top: 40px;
    }

    .enquiry-btn {
      background-color: #ffc107;
      color: #212529;
      border: none;
      padding: 14px 45px;
      font-size: 1.1rem;
      font-weight: 700;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0,0,0,0.08);
      transition: all 0.2s ease;
    }

    .enquiry-btn:hover {
      background-color: #e0a800;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.12);
    }

    .enquiry-btn:active {
      transform: translateY(0);
    }

    /* Why Us Section */
    .why-us-section {
      padding: 60px 0;
      background: white;
    }

    .why-us-section h2 {
      margin-bottom: 30px;
      font-size: 1.8rem;
      font-weight: 800;
      color: #0d4b75;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .feature-item {
      display: flex;
      gap: 15px;
      align-items: flex-start;
      padding: 18px;
      background: #f8fafc;
      border-radius: 8px;
      border-left: 4px solid #0d4b75;
    }

    .feature-item p {
      font-weight: 600;
      margin: 0;
      color: #334155;
    }

    /* Amenities Section */
    .amenities-section {
      padding: 60px 0;
      background: #f8fafc;
    }

    .amenities-section h2 {
      margin-bottom: 25px;
      font-size: 1.8rem;
      font-weight: 800;
      color: #0d4b75;
    }

    .amenities-list {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .amenity-tag {
      background: white;
      border: 1px solid #e2e8f0;
      padding: 10px 22px;
      border-radius: 50px;
      font-weight: 600;
      color: #475569;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }

    .bottom-cta-padding {
      height: 100px;
    }

    /* Modal Styling */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(6px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2000;
      animation: fadeIn 0.2s ease-out;
    }

    .modal-content {
      background: white;
      border-radius: 12px;
      padding: 35px;
      width: 90%;
      max-width: 440px;
      position: relative;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
      animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      background: none;
      border: none;
      font-size: 1.8rem;
      cursor: pointer;
      color: #94a3b8;
      line-height: 1;
      padding: 5px;
      transition: color 0.2s;
    }

    .close-btn:hover {
      color: #334155;
    }

    .modal-title {
      font-size: 1.6rem;
      font-weight: 800;
      color: #0d4b75;
      margin: 0 0 10px 0;
      text-align: center;
    }

    .modal-desc {
      text-align: center;
      color: #64748b;
      margin-bottom: 25px;
      font-size: 0.95rem;
      line-height: 1.5;
    }

    .contact-methods {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 18px;
      padding: 15px 20px;
      border-radius: 8px;
      text-decoration: none;
      color: white;
      transition: transform 0.2s, box-shadow 0.2s;
      box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }

    .contact-method:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 12px rgba(0,0,0,0.1);
    }

    .call-method {
      background-color: #007bff;
    }

    .call-method:hover {
      background-color: #0069d9;
    }

    .whatsapp-method {
      background-color: #25d366;
    }

    .whatsapp-method:hover {
      background-color: #218838;
    }

    .method-icon {
      font-size: 1.6rem;
    }

    .method-details {
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    .method-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      opacity: 0.85;
    }

    .method-value {
      font-size: 1.1rem;
      font-weight: 700;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideUp {
      from { transform: translateY(20px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }

    @media (max-width: 768px) {
      .project-title { font-size: 2rem; }
      .overview-section { padding: 20px 0 40px 0; }
      .details-grid { grid-template-columns: 1fr; gap: 12px; }
      .why-us-section, .amenities-section { padding: 40px 0; }
      .overview-desc { text-align: left; }
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  showEnquiryModal = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = PROJECTS.find(p => p.id === id);
    }
  }

  openEnquiryModal() {
    this.showEnquiryModal = true;
  }

  closeEnquiryModal() {
    this.showEnquiryModal = false;
  }

  getWhatsAppUrl() {
    if (!this.project) return 'https://wa.me/91919784180199';
    const text = `Hi, I am interested in your project "${this.project.name}". Please provide more information about it.`;
    return `https://wa.me/91919784180199?text=${encodeURIComponent(text)}`;
  }
}

