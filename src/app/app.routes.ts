import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PropertyListComponent } from './pages/property-list/property-list.component';
import { PropertyDetailComponent } from './pages/property-detail/property-detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'properties', component: PropertyListComponent },
  { path: 'properties/:id', component: PropertyDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', redirectTo: '' }
];
