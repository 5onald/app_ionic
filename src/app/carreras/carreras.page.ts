import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonChip,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonMenuButton,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  homeOutline,
  schoolOutline,
  briefcaseOutline,
  chevronBackOutline,
  chevronForwardOutline,
  timeOutline,
  ribbonOutline,
  trendingUpOutline,
  desktopOutline,
  layersOutline,
  codeSlashOutline,
  rocketOutline,
  globeOutline,
  logoGithub,
  logoLinkedin,
} from 'ionicons/icons';

interface Career {
  name: string;
  tagline: string;
  overview: string;
  images: string[];
  scope: string;
  demand: string;
  duration: string;
  degrees: string[];
  modality: string[];
}

@Component({
  selector: 'app-carreras',
  templateUrl: './carreras.page.html',
  styleUrls: ['./carreras.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonFooter,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonChip,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonMenuButton,
  ],
})
export class CarrerasPage implements OnInit, OnDestroy {
  careers: Career[] = [
    {
      name: 'Ingenieria en Desarrollo de Software',
      tagline: 'Especializacion en construir productos de software escalables y mantenibles.',
      overview:
        'La Ingenieria en Desarrollo de Software se enfoca en el ciclo completo de creacion de aplicaciones: desde el analisis de requisitos hasta el despliegue y mantenimiento. El profesional aprende a trabajar en equipos agiles, dominar lenguajes modernos, construir interfaces, disenar APIs robustas y aplicar buenas practicas de calidad, seguridad y arquitectura de software. Es una de las carreras con mayor oferta laboral remota y crecimiento sostenido a nivel global.',
      images: [
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80',
      ],
      scope:
        'Ingenieria de requisitos, frontend, backend, DevOps, calidad de software, metodologias agiles y cloud.',
      demand: 'Una de las profesiones con mayor crecimiento global y oferta laboral remota.',
      duration: '4 anos (8 semestres).',
      degrees: ['Bachillerato Universitario', 'Licenciatura'],
      modality: ['Presencial', 'Virtual'],
    },
    {
      name: 'Ingenieria en Sistemas Computacionales',
      tagline: 'Disena, construye y opera soluciones de software de nivel empresarial.',
      overview:
        'Carrera amplia que combina fundamentos de computacion, electronica, redes y administracion de sistemas. Forma profesionales capaces de disenar arquitecturas tecnologicas completas, integrar hardware y software, gestionar infraestructura empresarial y liderar proyectos de transformacion digital. Su perfil generalista permite trabajar en multiples sectores tech.',
      images: [
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
      ],
      scope:
        'Programacion, bases de datos, redes, arquitectura de software, sistemas operativos y gestion de proyectos tecnologicos.',
      demand:
        'Alta demanda nacional e internacional. Costa Rica forma parte del nearshoring tecnologico para LATAM y EE. UU.',
      duration: '4 a 5 anos (8 a 10 semestres).',
      degrees: ['Bachillerato Universitario', 'Licenciatura', 'Maestria opcional'],
      modality: ['Presencial', 'Virtual', 'Hibrida'],
    },
    {
      name: 'Ingenieria en Ciberseguridad',
      tagline: 'Protege la informacion y la infraestructura digital de las organizaciones.',
      overview:
        'Forma profesionales especializados en proteger sistemas, redes y datos frente a amenazas digitales. Combina conocimientos de programacion, redes, criptografia y normativa internacional. El egresado puede desempenarse en areas como hacking etico, analisis forense, gobernanza de seguridad, respuesta a incidentes y auditoria de sistemas.',
      images: [
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80',
      ],
      scope:
        'Hacking etico, criptografia, seguridad de redes, gobernanza, analisis forense y respuesta a incidentes.',
      demand: 'Demanda critica y creciente. Deficit mundial estimado de millones de profesionales.',
      duration: '4 a 5 anos (8 a 10 semestres).',
      degrees: ['Bachillerato Universitario', 'Licenciatura', 'Certificaciones internacionales'],
      modality: ['Presencial', 'Hibrida'],
    },
    {
      name: 'Ciencia de Datos e Inteligencia Artificial',
      tagline: 'Convierte datos en decisiones usando estadistica, machine learning y big data.',
      overview:
        'Carrera multidisciplinaria que integra matematica, estadistica, programacion y conocimiento de negocio para extraer valor de grandes volumenes de datos. El profesional disena modelos predictivos, sistemas de inteligencia artificial, soluciones de big data y herramientas de visualizacion que apoyan la toma de decisiones estrategicas en empresas y organismos publicos.',
      images: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
      ],
      scope:
        'Estadistica, modelos predictivos, redes neuronales, vision computacional, NLP y visualizacion de datos.',
      demand: 'Sector con la mayor proyeccion para la proxima decada segun el WEF.',
      duration: '4 a 5 anos. Posgrados de 2 anos adicionales.',
      degrees: ['Bachillerato Universitario', 'Licenciatura', 'Maestria'],
      modality: ['Presencial', 'Virtual', 'Hibrida'],
    },
  ];

  selectedIndex = 0;
  slideIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor() {
    addIcons({
      'home-outline': homeOutline,
      'school-outline': schoolOutline,
      'briefcase-outline': briefcaseOutline,
      'chevron-back-outline': chevronBackOutline,
      'chevron-forward-outline': chevronForwardOutline,
      'time-outline': timeOutline,
      'ribbon-outline': ribbonOutline,
      'trending-up-outline': trendingUpOutline,
      'desktop-outline': desktopOutline,
      'layers-outline': layersOutline,
      'code-slash-outline': codeSlashOutline,
      'rocket-outline': rocketOutline,
      'globe-outline': globeOutline,
      'logo-github': logoGithub,
      'logo-linkedin': logoLinkedin,
    });
  }

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  get current(): Career {
    return this.careers[this.selectedIndex];
  }

  selectCareer(index: number): void {
    this.selectedIndex = index;
    this.slideIndex = 0;
    this.restartAutoplay();
  }

  onSegmentChange(value: string | number | undefined): void {
    const idx = Number(value);
    if (!Number.isNaN(idx)) {
      this.selectCareer(idx);
    }
  }

  nextSlide(): void {
    const total = this.current.images.length;
    this.slideIndex = (this.slideIndex + 1) % total;
  }

  prevSlide(): void {
    const total = this.current.images.length;
    this.slideIndex = (this.slideIndex - 1 + total) % total;
  }

  goToSlide(i: number): void {
    this.slideIndex = i;
    this.restartAutoplay();
  }

  private startAutoplay(): void {
    this.intervalId = setInterval(() => this.nextSlide(), 5000);
  }

  private stopAutoplay(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private restartAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
