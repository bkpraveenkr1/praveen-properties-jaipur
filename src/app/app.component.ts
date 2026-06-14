import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LanguageService } from './services/language.service';
import { TranslatePipe } from './pipes/translate.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly languageService = inject(LanguageService);
  protected readonly currentLanguage = this.languageService.currentLanguage;
  public showEnquiryModal = false;

  public toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }

  public openEnquiryModal(): void {
    this.showEnquiryModal = true;
  }

  public closeEnquiryModal(): void {
    this.showEnquiryModal = false;
  }

  public getWhatsAppUrl(): string {
    const text = 'Hi, I am interested in your properties. Please provide more details.';
    return `https://wa.me/919784180199?text=${encodeURIComponent(text)}`;
  }
}
