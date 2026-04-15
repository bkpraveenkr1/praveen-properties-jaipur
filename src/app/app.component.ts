import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { LanguageService } from './services/language.service';
import { TranslatePipe } from './pipes/translate.pipe';
import { StickyContactComponent } from './components/sticky-contact/sticky-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, TranslatePipe, StickyContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly languageService = inject(LanguageService);
  protected readonly currentLanguage = this.languageService.currentLanguage;

  public toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
