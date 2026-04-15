import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../models/project.model';
import { PlotCardComponent } from '../../components/plot-card/plot-card.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, PlotCardComponent],
  template: `
    <div class="project-detail-page" *ngIf="project">
      <!-- Project Header -->
      <section class="project-header">
        <div class="container">
          <a routerLink="/" class="back-link">← Back to Projects</a>
          <h1 class="project-name">{{ project.name }}</h1>
          <p class="project-location">📍 {{ project.location }}</p>
          <div class="price-range">
            Starting from <span class="price">₹ {{ project.startingPrice }}</span>
          </div>
        </div>
      </section>

      <!-- Plots Listing -->
      <section class="plots-section">
        <div class="container">
          <div class="section-title">
            <h2>Available Plots</h2>
            <p>Select a plot to inquire about details and availability.</p>
          </div>
          
          <div class="plots-grid">
            <app-plot-card 
              *ngFor="let plot of paginatedPlots" 
              [plot]="plot"
              [projectName]="project.name">
            </app-plot-card>
          </div>
          
          <!-- Pagination -->
          <div class="pagination" *ngIf="totalPages > 1">
            <button class="page-btn" [disabled]="currentPage === 1" (click)="prevPage()">Previous</button>
            <span class="page-info">Page {{ currentPage }} of {{ totalPages }}</span>
            <button class="page-btn" [disabled]="currentPage === totalPages" (click)="nextPage()">Next</button>
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
    </div>
  `,
  styles: [`
    .container {
      max-width: 1000px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .project-header {
      padding: 40px 0;
      background-color: #2b2b2b;
      color: white;
    }

    .back-link {
      color: #e91e63;
      text-decoration: none;
      font-weight: 600;
      font-size: 0.9rem;
      display: block;
      margin-bottom: 20px;
    }

    .project-name {
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 5px;
    }

    .project-location {
      font-size: 1.1rem;
      opacity: 0.8;
      margin-bottom: 25px;
    }

    .price-range {
      font-size: 1.2rem;
    }

    .price-range .price {
      font-weight: 800;
      color: #e91e63;
      font-size: 1.8rem;
      margin-left: 10px;
    }

    .plots-section {
      padding: 60px 0;
      background-color: #fcfcfc;
    }

    .section-title {
      margin-bottom: 40px;
    }

    .section-title h2 {
      font-size: 1.8rem;
      font-weight: 800;
      margin-bottom: 10px;
    }

    .plots-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 25px;
    }

    .why-us-section {
      padding: 60px 0;
      background: white;
    }

    .why-us-section h2 {
      margin-bottom: 30px;
      font-size: 1.8rem;
      font-weight: 800;
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
      padding: 15px;
      background: #f8f9fa;
      border-radius: 10px;
    }

    .feature-item p {
      font-weight: 600;
      margin: 0;
      color: #333;
    }

    .amenities-section {
      padding: 60px 0;
      background: #fcfcfc;
    }

    .amenities-section h2 {
      margin-bottom: 25px;
      font-size: 1.8rem;
      font-weight: 800;
    }

    .amenities-list {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }

    .amenity-tag {
      background: white;
      border: 1px solid #ddd;
      padding: 8px 18px;
      border-radius: 50px;
      font-weight: 600;
      color: #555;
    }

    .bottom-cta-padding {
      height: 100px;
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 40px;
      gap: 15px;
    }

    .page-btn {
      padding: 10px 20px;
      background-color: #2b2b2b;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: background 0.3s;
    }

    .page-btn:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }

    .page-btn:not(:disabled):hover {
      background-color: #000;
    }

    .page-info {
      font-weight: 600;
      color: #555;
    }

    @media (max-width: 768px) {
      .project-name { font-size: 2rem; }
      .plots-section, .why-us-section, .amenities-section { padding: 40px 0; }
    }
  `]
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;
  
  currentPage = 1;
  pageSize = 6;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.project = PROJECTS.find(p => p.id === id);
    }
  }

  get paginatedPlots() {
    if (!this.project || !this.project.plots) return [];
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.project.plots.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    if (!this.project || !this.project.plots) return 0;
    return Math.ceil(this.project.plots.length / this.pageSize);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
