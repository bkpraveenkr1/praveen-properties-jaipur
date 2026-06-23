import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
            <button class="enquiry-btn" (click)="openEnquiryModal()">Enquire Now</button>
          </div>
        </div>
      </section>

      <!-- Why This Project -->
      <!-- <section class="why-us-section">
        <div class="container">
          <h2>Why this project?</h2>
          <div class="features-grid">
            <div class="feature-item" *ngFor="let point of project.whyThisProject">
              <span class="icon">✅</span>
              <p>{{ point }}</p>
            </div>
          </div>
        </div>
      </section> -->

      <!-- Amenities Section -->
      <!-- <section class="amenities-section">
        <div class="container">
          <h2>Key Features & Amenities</h2>
          <div class="amenities-list">
            <span class="amenity-tag" *ngFor="let feature of project.features">
              {{ feature }}
            </span>
          </div>
        </div>
      </section> -->

      <!-- Project Video Section -->
      <section class="video-section" *ngIf="project.videoUrl && safeVideoUrl">
        <div class="container">
          <h2 class="video-heading">Project Video</h2>
          
          <!-- Gold Divider/Flourish -->
          <div class="gold-divider">
            <div class="line"></div>
            <div class="ornament"></div>
            <div class="line"></div>
          </div>
          
          <div class="video-card">
            <div class="video-wrapper">
              <iframe
                [src]="safeVideoUrl"
                title="Project Video"
                frameborder="0"
                allowfullscreen>
              </iframe>
            </div>
            <div class="video-actions">
              <button class="watch-youtube-btn" (click)="viewBrochure(project.videoUrl)">
                <span class="btn-icon">▶</span> Watch on YouTube
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Project Documents & Downloads Section -->
      <section class="documents-section" *ngIf="project.brochureUrl || project.layoutPlanUrl || project.reraUrl || project.marketingMapUrl">
        <div class="container">
          <h2 class="documents-heading">Documents & Downloads</h2>
          
          <!-- Gold Divider/Flourish -->
          <div class="gold-divider">
            <div class="line"></div>
            <div class="ornament"></div>
            <div class="line"></div>
          </div>
          
          <div class="documents-grid">
            <!-- Brochure Card -->
            <div class="document-card" *ngIf="project.brochureUrl">
              <div class="document-header">
                <div class="document-icon brochure-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="pdf-svg">
                    <path d="M12 16H19V18H12V16M12 12H19V14H12V12M12 8H19V10H12V8M16 2H8C6.9 2 6 2.9 6 4V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2 16 2M16 20H8V4H12V8H16V20Z" />
                  </svg>
                </div>
                <div class="document-info">
                  <h3>Project Brochure</h3>
                  <!-- <p>Download or view the detailed brochure to explore highlights and features.</p> -->
                </div>
              </div>
              <div class="document-actions">
                <button class="view-btn" (click)="viewBrochure(project.brochureUrl)">
                  <span class="btn-icon">👁️</span> View Brochure
                </button>
                <a [href]="project.brochureUrl" download class="download-btn">
                  <span class="btn-icon">📥</span> Download Brochure
                </a>
              </div>
            </div>

            <!-- Layout Plan Card -->
            <div class="document-card" *ngIf="project.layoutPlanUrl">
              <div class="document-header">
                <div class="document-icon layout-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="pdf-svg">
                    <path d="M12 16H19V18H12V16M12 12H19V14H12V12M12 8H19V10H12V8M16 2H8C6.9 2 6 2.9 6 4V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2 16 2M16 20H8V4H12V8H16V20Z" />
                  </svg>
                </div>
                <div class="document-info">
                  <h3>Layout Plan</h3>
                  <!-- <p>View the approved layout map showcasing the plot plan and community layout.</p> -->
                </div>
              </div>
              <div class="document-actions">
                <button class="view-btn" (click)="viewBrochure(project.layoutPlanUrl)">
                  <span class="btn-icon">👁️</span> View Layout Plan
                </button>
                <a [href]="project.layoutPlanUrl" download class="download-btn">
                  <span class="btn-icon">📥</span> Download Layout Plan
                </a>
              </div>
            </div>

            <!-- RERA Certificate Card -->
            <div class="document-card" *ngIf="project.reraUrl">
              <div class="document-header">
                <div class="document-icon rera-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="pdf-svg">
                    <path d="M12 16H19V18H12V16M12 12H19V14H12V12M12 8H19V10H12V8M16 2H8C6.9 2 6 2.9 6 4V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2 16 2M16 20H8V4H12V8H16V20Z" />
                  </svg>
                </div>
                <div class="document-info">
                  <h3>RERA Certificate</h3>
                  <!-- <p>Check the project's official RERA registration and compliance approvals.</p> -->
                </div>
              </div>
              <div class="document-actions">
                <button class="view-btn" (click)="viewBrochure('https://rera.rajasthan.gov.in/Home')">
                  <span class="btn-icon">✔️</span> Verify
                </button>
                <a [href]="project.reraUrl" download class="download-btn">
                  <span class="btn-icon">📥</span> Download Certificate
                </a>
              </div>
            </div>

            <!-- Marketing Map Card -->
            <div class="document-card" *ngIf="project.marketingMapUrl">
              <div class="document-header">
                <div class="document-icon marketing-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="pdf-svg">
                    <path d="M12 16H19V18H12V16M12 12H19V14H12V12M12 8H19V10H12V8M16 2H8C6.9 2 6 2.9 6 4V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2 16 2M16 20H8V4H12V8H16V20Z" />
                  </svg>
                </div>
                <div class="document-info">
                  <h3>Marketing Map</h3>
                  <!-- <p>Explore the marketing map for plotting options, parks, roads, and orientations.</p> -->
                </div>
              </div>
              <div class="document-actions">
                <button class="view-btn" (click)="viewBrochure(project.marketingMapUrl)">
                  <span class="btn-icon">👁️</span> View Mark. Map
                </button>
                <a [href]="project.marketingMapUrl" download class="download-btn">
                  <span class="btn-icon">📥</span> Download Mark. Map
                </a>
              </div>
            </div>
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
            <div class="contact-method call-method non-clickable">
              <span class="method-icon">📞</span>
              <div class="method-details">
                <span class="method-label">Call Us</span>
                <span class="method-value">+91 97841 80199</span>
              </div>
            </div>

            <!-- WhatsApp Option -->
            <a [href]="getWhatsAppUrl()" target="_blank" class="contact-method whatsapp-method">
              <span class="method-icon">💬</span>
              <div class="method-details">
                <span class="method-value">WhatsApp</span>
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
      background: linear-gradient(135deg, #e6a817 0%, #c8860a 100%);
      color: white;
      border: none;
      padding: 14px 45px;
      font-size: 1.1rem;
      font-weight: 700;
      border-radius: 50px;
      cursor: pointer;
      box-shadow: 0 6px 20px rgba(200, 134, 10, 0.45);
      transition: all 0.3s ease;
      font-family: 'Inter', sans-serif;
      letter-spacing: 0.3px;
    }

    .enquiry-btn:hover {
      background: linear-gradient(135deg, #f0b820 0%, #d49210 100%);
      transform: translateY(-3px) scale(1.04);
      box-shadow: 0 10px 28px rgba(200, 134, 10, 0.55);
    }

    .enquiry-btn:active {
      transform: scale(0.97);
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

    .contact-method:not(.non-clickable):hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 12px rgba(0,0,0,0.1);
    }

    .contact-method.non-clickable {
      cursor: default;
    }

    .call-method {
      background-color: #007bff;
    }

    .call-method:not(.non-clickable):hover {
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
      
      .documents-grid {
        grid-template-columns: 1fr !important;
        gap: 20px;
      }
      .document-card {
        padding: 20px;
      }
      .document-header {
        flex-direction: column;
        text-align: center;
        align-items: center;
        gap: 15px;
      }
      .document-actions {
        flex-direction: column;
        width: 100%;
        gap: 10px;
        margin-top: 15px;
      }
      .view-btn, .download-btn {
        width: 100%;
      }
    }

    /* Documents & Downloads Section */
    .documents-section {
      padding: 60px 0;
      background-color: #f8fafc;
      border-top: 1px solid #e2e8f0;
      border-bottom: 1px solid #e2e8f0;
      text-align: center;
    }

    .documents-heading {
      font-size: 1.8rem;
      font-weight: 600;
      color: #0d4b75;
      margin-bottom: 5px;
    }

    .documents-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 30px;
      max-width: 900px;
      margin: 0 auto;
      text-align: left;
    }

    .document-card {
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .document-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
    }

    .document-header {
      display: flex;
      align-items: flex-start;
      gap: 20px;
      margin-bottom: 20px;
    }

    .document-icon {
      border-radius: 10px;
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .brochure-icon {
      background-color: #fef2f2;
      color: #ef4444;
    }

    .layout-icon {
      background-color: #eff6ff;
      color: #3b82f6;
    }

    .rera-icon {
      background-color: #f0fdf4;
      color: #22c55e;
    }

    .marketing-icon {
      background-color: #fff7ed;
      color: #f97316;
    }

    .pdf-svg {
      width: 36px;
      height: 36px;
    }

    .document-info {
      flex-grow: 1;
    }

    .document-info h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0d4b75;
      margin: 0 0 6px 0;
    }

    .document-info p {
      color: #64748b;
      font-size: 0.9rem;
      line-height: 1.5;
      margin: 0;
    }

    .document-actions {
      display: flex;
      gap: 12px;
      margin-top: auto;
    }

    .view-btn, .download-btn {
      flex: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 16px;
      font-weight: 600;
      font-size: 0.88rem;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      text-decoration: none;
      white-space: nowrap;
    }

    .view-btn {
      background-color: white;
      border: 1.5px solid #0d4b75;
      color: #0d4b75;
    }

    .view-btn:hover {
      background-color: #f0f7ff;
    }

    .download-btn {
      background-color: #0d4b75;
      border: 1.5px solid #0d4b75;
      color: white;
    }

    .download-btn:hover {
      background-color: #0a3c5e;
      border-color: #0a3c5e;
    }

    /* Project Video Section */
    .video-section {
      padding: 60px 0;
      background-color: white;
      text-align: center;
    }

    .video-heading {
      font-size: 1.8rem;
      font-weight: 600;
      color: #0d4b75;
      margin-bottom: 5px;
    }

    .video-card {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    }

    .video-wrapper {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 ratio */
      height: 0;
      overflow: hidden;
      border-radius: 8px;
      background: #000;
      margin-bottom: 20px;
      box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
    }

    .video-wrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }

    .video-actions {
      display: flex;
      justify-content: center;
    }

    .watch-youtube-btn {
      background-color: #ff0000;
      color: white;
      border: none;
      padding: 12px 30px;
      font-size: 0.95rem;
      font-weight: 700;
      border-radius: 50px;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(255, 0, 0, 0.2);
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }

    .watch-youtube-btn:hover {
      background-color: #cc0000;
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(255, 0, 0, 0.35);
    }

    .watch-youtube-btn:active {
      transform: translateY(0);
    }

    .btn-icon {
      font-size: 1rem;
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  showEnquiryModal = false;
  safeVideoUrl: SafeResourceUrl | undefined;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = PROJECTS.find(p => p.id === id);
      if (this.project && this.project.videoUrl) {
        this.safeVideoUrl = this.getSafeVideoUrl(this.project.videoUrl);
      }
    }
  }

  openEnquiryModal() {
    this.showEnquiryModal = true;
  }

  closeEnquiryModal() {
    this.showEnquiryModal = false;
  }

  getWhatsAppUrl() {
    if (!this.project) return 'https://wa.me/919784180199';
    const text = `Hi, I am interested in your project "${this.project.name}". Please provide more information about it.`;
    return `https://wa.me/919784180199?text=${encodeURIComponent(text)}`;
  }

  viewBrochure(url?: string) {
    if (url) {
      window.open(url, '_blank');
    }
  }

  getSafeVideoUrl(url?: string): SafeResourceUrl | undefined {
    if (!url) return undefined;
    let videoId = '';
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      videoId = match[2];
    } else {
      return undefined;
    }
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}

