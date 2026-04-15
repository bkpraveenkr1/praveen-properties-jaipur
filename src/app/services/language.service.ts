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
    'NAV_PROPERTIES': { EN: 'Projects', HI: 'प्रोजेक्ट्स' },
    'NAV_ABOUT': { EN: 'About Me', HI: 'मेरे बारे में' },
    'NAV_CONTACT': { EN: 'Contact', HI: 'संपर्क करें' },

    // Home Page
    'HERO_TITLE': { EN: 'Investment in Land is Investment in Future', HI: 'जमीन में निवेश, सुखद भविष्य का आधार' },
    'HERO_SUBTITLE': { EN: "Discover premium, verified residential plots in Jaipur's most promising locations.", HI: 'जयपुर के प्रमुख और तेजी से विकसित हो रहे स्थानों में प्रीमियम, वेरिफाइड प्लॉट्स खोजें।' },
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
    'EXPLORE_PROJECTS': { EN: 'Explore Our Projects', HI: 'हमारे प्रोजेक्ट्स देखें' },
    'EXPLORE_PROJECTS_DESC': { EN: "Exclusive land plot townships in Jaipur's prime locations", HI: 'जयपुर के प्रमुख स्थानों में एक्सक्लूसिव लैंड प्लॉट टाउनशिप' },
    'STARTING_AT': { EN: 'Starting at', HI: 'शुरुआती कीमत' },
    'VIEW_DETAILS': { EN: 'View Details', HI: 'विवरण देखें' },
    'NEW_BADGE': { EN: 'NEW', HI: 'नया' },
    'CALL_NOW': { EN: 'Call Now', HI: 'अभी कॉल करें' },
    'WHATSAPP_US': { EN: 'WhatsApp', HI: 'व्हाट्सएप' },
    'TRUST_EXPERT_TITLE': { EN: 'Local Jaipur Expert', HI: 'स्थानीय जयपुर विशेषज्ञ' },
    'TRUST_EXPERT_DESC': { EN: "Deep knowledge of Jaipur's growing areas and JDA schemes.", HI: 'जयपुर के बढ़ते क्षेत्रों और JDA योजनाओं का गहरा ज्ञान।' },
    'TRUST_DIRECT_TITLE': { EN: 'Direct Owner Deals', HI: 'सीधे मालिक से सौदे' },
    'TRUST_DIRECT_DESC': { EN: 'Transparent pricing without middle-man markups.', HI: 'बिचौलियों के बिना पारदर्शी मूल्य।' },
    'TRUST_CHARGES_TITLE': { EN: 'No Hidden Charges', HI: 'कोई छिपा शुल्क नहीं' },
    'TRUST_CHARGES_DESC': { EN: 'Complete clarity on registry, development, and other costs.', HI: 'रजिस्ट्री, विकास और अन्य लागतों पर पूरी स्पष्टता।' },

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
