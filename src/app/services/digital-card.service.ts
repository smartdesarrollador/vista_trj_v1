import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DigitalCard } from '../interfaces/digital-card.interface';

@Injectable({
  providedIn: 'root'
})
export class DigitalCardService {

  // Datos del perfil principal
  private profileData: DigitalCard = {
    personalInfo: {
      name: "Jeans Enrique Malón Reyna",
      title: "Desarrollador Full Stack",
      location: "Lima, Perú",
      photo: "assets/foto/perfil.png"
    },
    contact: {
      email: "sistema5000smart@gmail.com",
      phone: "+51 955365043",
      facebook: "https://www.facebook.com/jeansenrique.malonreyna",
      website: "https://portafolio.smartdigitaltec.com",
      whatsapp: "+51 955365043"
    },
    about: {
      description: "Especializado en desarrollo web moderno con Angular, React, Laravel y diseño centrado en el usuario.",
      skills: ["Angular", "React", "Laravel", "JavaScript", "TypeScript", "PHP"],
      experience: 5
    }
  };

  private currentProfileIndex = 0;

  constructor() { }

  /**
   * Obtener datos de la tarjeta digital
   * Simula una llamada a API con Observable
   */
  getDigitalCardData(): Observable<DigitalCard> {
    return of(this.profileData);
  }

  /**
   * Método futuro - para integración con API
   * Comentado para implementación futura
   */
  // getDigitalCardDataFromAPI(userId: string): Observable<DigitalCard> {
  //   return this.http.get<DigitalCard>(`/api/users/${userId}/digital-card`);
  // }

  // updateDigitalCardData(userId: string, data: DigitalCard): Observable<DigitalCard> {
  //   return this.http.put<DigitalCard>(`/api/users/${userId}/digital-card`, data);
  // }

  // createDigitalCardData(userId: string, data: DigitalCard): Observable<DigitalCard> {
  //   return this.http.post<DigitalCard>(`/api/users/${userId}/digital-card`, data);
  // }

  /**
   * Validar estructura de datos de tarjeta digital
   */
  validateDigitalCard(data: any): boolean {
    if (!data || typeof data !== 'object') return false;
    
    // Validar personalInfo
    if (!data.personalInfo || 
        !data.personalInfo.name || 
        !data.personalInfo.title || 
        !data.personalInfo.location) {
      return false;
    }

    // Validar contact
    if (!data.contact || 
        !data.contact.email || 
        !data.contact.phone) {
      return false;
    }

    // Validar about (opcional)
    if (data.about) {
      if (!data.about.description || 
          !Array.isArray(data.about.skills) || 
          typeof data.about.experience !== 'number') {
        return false;
      }
    }

    return true;
  }
}
