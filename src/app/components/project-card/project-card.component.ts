import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { RouterModule } from '@angular/router';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslatePipe],
  template: `
    <div class="project-card">
      <div class="card-image" [style.backgroundImage]="'url(' + project.imageUrl + ')'">
        <span *ngIf="project.isNew" class="badge">{{ 'NEW_BADGE' | translate }}</span>
      </div>
      <div class="card-content">
        <h3 class="project-name">{{ project.name }}</h3>
        <p class="project-location">📍 {{ project.location }}</p>
        <div class="card-footer">
          <span class="price-label">{{ 'STARTING_AT' | translate }}</span>
          <span class="price-value">₹ {{ project.startingPrice }}</span>
        </div>
        <a [routerLink]="['/project', project.id]" class="view-details-btn">{{ 'VIEW_DETAILS' | translate }}</a>
      </div>
    </div>
  `,
  styles: [`
    .project-card {
      background: white;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .project-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.12);
    }

    .card-image {
      height: 200px;
      background-size: cover;
      background-position: center;
      position: relative;
    }

    .badge {
      position: absolute;
      top: 15px;
      right: 15px;
      background: #ff5722;
      color: white;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .card-content {
      padding: 20px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .project-name {
      font-size: 1.4rem;
      font-weight: 800;
      margin-bottom: 5px;
      color: #2b2b2b;
    }

    .project-location {
      color: #666;
      font-size: 0.95rem;
      margin-bottom: 20px;
    }

    .card-footer {
      display: flex;
      flex-direction: column;
      margin-top: auto;
      margin-bottom: 20px;
    }

    .price-label {
      font-size: 0.85rem;
      color: #888;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .price-value {
      font-size: 1.5rem;
      font-weight: 800;
      color: #e91e63;
    }

    .view-details-btn {
      display: block;
      text-align: center;
      background: #2b2b2b;
      color: white;
      text-decoration: none;
      padding: 12px;
      border-radius: 8px;
      font-weight: 600;
      transition: background 0.2s;
    }

    .view-details-btn:hover {
      background: #000;
    }
  `]
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
