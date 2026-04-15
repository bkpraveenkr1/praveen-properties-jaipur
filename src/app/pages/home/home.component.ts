import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { TrustSectionComponent } from '../../components/trust-section/trust-section.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    TrustSectionComponent, 
    ProjectCardComponent,
    TranslatePipe
  ],
  template: `
    <div class="home-page">
      <app-hero></app-hero>
      
      <app-trust-section></app-trust-section>

      <section class="projects-section">
        <div class="container">
          <div class="section-header">
            <h2>{{ 'EXPLORE_PROJECTS' | translate }}</h2>
            <p>{{ 'EXPLORE_PROJECTS_DESC' | translate }}</p>
          </div>
          
          <div class="projects-grid">
            <app-project-card 
              *ngFor="let project of projects" 
              [project]="project">
            </app-project-card>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .projects-section {
      padding: 60px 20px;
      background-color: white;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-header {
      text-align: center;
      margin-bottom: 40px;
    }

    h2 {
      font-size: 2.2rem;
      font-weight: 800;
      color: #2b2b2b;
      margin-bottom: 10px;
    }

    p {
      color: #777;
      font-size: 1.1rem;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 30px;
    }

    @media (max-width: 768px) {
      .projects-section { padding: 40px 15px; }
      h2 { font-size: 1.8rem; }
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {
  projects: Project[] = PROJECTS;
}
