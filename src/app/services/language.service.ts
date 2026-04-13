import { Injectable, signal } from '@angular/core';

export type Language = 'EN' | 'HI';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public readonly currentLanguage = signal<Language>('EN');

  private readonly translations: Record<string, Record<Language, string>> = {
    // Navigation
    'NAV_HOME': { EN: 'Home', HI: 'मुख्य पृष्ठ' },
    'NAV_PROPERTIES': { EN: 'Properties', HI: 'प्लॉट्स और विला' },
    'NAV_ABOUT': { EN: 'About Me', HI: 'मेरे बारे में' },
    'NAV_CONTACT': { EN: 'Contact', HI: 'संपर्क करें' },

    // Home Page
    'HERO_TITLE': { EN: 'Investment in Land is Investment in Future', HI: 'जमीन में निवेश, सुखद भविष्य का आधार' },
    'HERO_SUBTITLE': { EN: 'Exclusive Plots at Colony Ghar Niwas, Patrakar Colony, Jaipur', HI: 'कॉलोनी घर निवास, पत्रकार कॉलोनी, जयपुर में शानदार प्लॉट्स' },
    'BTN_VIEW_PLOTS': { EN: 'View All Plots', HI: 'सभी प्लॉट्स देखें' },
    'BTN_INQUIRE': { EN: 'Inquire Now', HI: 'अभी जानकारी लें' },
    'FEATURED_BADGE': { EN: 'Featured Project', HI: 'मुख्य प्रोजेक्ट' },
    'RECENT_OPPORTUNITIES': { EN: 'Recent Opportunities', HI: 'नए अवसर' },
    'HAND_PICKED_PLOTS': { EN: 'Hand-picked plots for immediate possession', HI: 'तुरंत कब्जे के लिए चुनिंदा प्लॉट्स' },
    'DETAILS': { EN: 'Details', HI: 'विवरण' },
    'WHY_PATRAKAR': { EN: 'Why Patrakar Colony?', HI: 'पत्रकार कॉलोनी ही क्यों?' },
    'BENEFIT_CONNECTED': { EN: 'Connected', HI: 'बेहतरीन कनेक्टिविटी' },
    'BENEFIT_CONNECTED_DESC': { EN: 'Excellent connectivity to Mansarovar Metro and main Jaipur bypass.', HI: 'मानसरोवर मेट्रो और मुख्य जयपुर बाईपास से शानदार जुड़ाव।' },
    'BENEFIT_DEVELOPING': { EN: 'Developing', HI: 'तेजी से विकास' },
    'BENEFIT_DEVELOPING_DESC': { EN: 'Rapidly developing residential hub with high ROI potential.', HI: 'उच्च निवेश लाभ की संभावनाओं वाला विकसित क्षेत्र।' },
    'BENEFIT_AMENITIES': { EN: 'Amenities', HI: 'सुविधाएं' },
    'BENEFIT_AMENITIES_DESC': { EN: 'Proximity to top schools, hospitals, and shopping complexes.', HI: 'प्रमुख स्कूलों, अस्पतालों और शॉपिंग कॉम्प्लेक्स के पास।' },

    // About Me Page
    'EXPERIENCE': { EN: 'Experience', HI: 'अनुभव' },
    'PROPERTIES_SOLD': { EN: 'Properties Sold', HI: 'प्रॉपर्टीज सेल' },
    'MY_SPECIALTIES': { EN: 'My Specialties', HI: 'मेरी विशेषताएं' },
    'GET_IN_TOUCH': { EN: 'Get In Touch', HI: 'मुझसे संपर्क करें' },
    'CTA_FIND_NEXT': { EN: "Let's Find Your Next Property Together", HI: 'आइए, साथ मिलकर आपकी अगली प्रॉपर्टी खोजें' },
    'CTA_GUIDE': { EN: "I'm here to guide you through every step of the process.", HI: 'मैं प्रक्रिया के हर कदम पर आपका मार्गदर्शन करने के लिए तैयार हूं।' },

    // Others
    'FOOTER_RIGHTS': { EN: 'All rights reserved.', HI: 'सर्वाधिकार सुरक्षित।' }
  };

  public toggleLanguage(): void {
    this.currentLanguage.update(lang => lang === 'EN' ? 'HI' : 'EN');
  }

  public translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) return key;
    return translation[this.currentLanguage()];
  }
}
