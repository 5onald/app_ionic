import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

export interface Lenguaje {
  id: number;
  nombre: string;
  icono: string;
  logo: string;
  categoria: string[];
  salarioPromedio: number;
  salarioMin: number;
  salarioMax: number;
  demanda: string;
  descripcion: string;
  accentColor: string;
  sectores: string[];
  tags: string[];
}

export interface Filtro {
  etiqueta: string;
  valor: string;
}

export interface Beneficio {
  id: number;
  icono: string;
  titulo: string;
  descripcion: string;
  destacado: boolean;
}

@Component({
  selector: 'app-beneficios',
  templateUrl: './beneficios.page.html',
  styleUrls: ['./beneficios.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class BeneficiosPage implements OnInit {

  lenguajes: Lenguaje[] = [
    {
      id: 1,
      nombre: 'Python',
      icono: 'logo-python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      categoria: ['backend','datos'],
      salarioPromedio: 95,
      salarioMin: 60,
      salarioMax: 140,
      demanda: 'Alta',
      descripcion: 'Ideal para IA, data science y backend.',
      accentColor: '#3776AB',
      sectores: ['Inteligencia Artificial', 'Data Science', 'Finanzas', 'Salud'],
      tags: ['IA', 'Backend', 'Data']
    },
    {
      id: 2,
      nombre: 'JavaScript',
      icono: 'logo-javascript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      categoria: ['frontend','web'],
      salarioPromedio: 88,
      salarioMin: 55,
      salarioMax: 130,
      demanda: 'Alta',
      descripcion: 'El lenguaje de la web, frontend y backend.',
      accentColor: '#F7DF1E',
      sectores: ['E-commerce', 'Startups', 'Medios digitales', 'Educación'],
      tags: ['Frontend', 'Node.js', 'Web']
    },
    {
      id: 3,
      nombre: 'Java',
      icono: 'logo-java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      categoria: ['backend'],
      salarioPromedio: 92,
      salarioMin: 65,
      salarioMax: 135,
      demanda: 'Media',
      descripcion: 'Robusto para aplicaciones empresariales.',
      accentColor: '#ED8B00',
      sectores: ['Banca', 'Seguros', 'Telecomunicaciones', 'Gobierno'],
      tags: ['Backend', 'Enterprise', 'Android']
    },
    {
      id: 4,
      nombre: 'TypeScript',
      icono: 'logo-typescript',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      categoria: ['frontend'],
      salarioPromedio: 90,
      salarioMin: 58,
      salarioMax: 132,
      demanda: 'Alta',
      descripcion: 'JavaScript con tipado estático.',
      accentColor: '#3178C6',
      sectores: ['SaaS', 'Fintech', 'E-commerce', 'Startups'],
      tags: ['Frontend', 'Angular', 'React']
    },
    {
      id: 5,
      nombre: 'C++',
      icono: 'logo-cplusplus',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
      categoria: ['backend'],
      salarioPromedio: 98,
      salarioMin: 65,
      salarioMax: 145,
      demanda: 'Media',
      descripcion: 'Rendimiento máximo para sistemas críticos y software de alto impacto.',
      accentColor: '#00599C',
      sectores: ['Videojuegos AAA', 'Automotriz', 'Aeroespacial', 'Robótica', 'Sistemas embebidos', 'Trading de alta frecuencia'],
      tags: ['Sistemas', 'Juegos', 'Embebidos', 'Performance']
    },
    {
      id: 5,
      nombre: 'Kotlin',
      icono: 'logo-kotlin',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg',
      categoria: ['mobile'],
      salarioPromedio: 93,
      salarioMin: 62,
      salarioMax: 138,
      demanda: 'Alta',
      descripcion: 'El lenguaje oficial de Android, moderno y conciso.',
      accentColor: '#7F52FF',
      sectores: ['Aplicaciones móviles', 'Banca digital', 'Salud digital', 'Transporte', 'Delivery', 'IoT'],
      tags: ['Android', 'Mobile', 'Backend', 'Multiplatform']
    },
    {
    id: 6,
    nombre: 'Swift',
    icono: 'logo-swift',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    categoria: ['mobile'],
    salarioPromedio: 96,
    salarioMin: 68,
    salarioMax: 145,
    demanda: 'Alta',
    descripcion: 'Lenguaje principal para desarrollo iOS y macOS.',
    accentColor: '#FA7343',
    sectores: ['Aplicaciones iOS', 'Fintech móvil', 'Salud digital', 'Medios y streaming', 'Juegos móviles', 'Retail'],
    tags: ['iOS', 'macOS', 'Mobile', 'Apple']
    },
    {
    id: 7,
    nombre: 'C#',
    icono: 'logo-csharp',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    categoria: ['backend'],
    salarioPromedio: 91,
    salarioMin: 60,
    salarioMax: 133,
    demanda: 'Media',
    descripcion: 'Ecosistema .NET para apps empresariales y videojuegos.',
    accentColor: '#9B4F96',
    sectores: ['Videojuegos (Unity)', 'Banca', 'Gobierno', 'Manufactura', 'Salud', 'ERP empresarial'],
    tags: ['Backend', '.NET', 'Unity', 'Enterprise']
  },
  {
    id: 8,
    nombre: 'PHP',
    icono: 'logo-php',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    categoria: ['backend'],
    salarioPromedio: 75,
    salarioMin: 45,
    salarioMax: 115,
    demanda: 'Media',
    descripcion: 'Potencia el 70% de la web, incluido WordPress.',
    accentColor: '#777BB4',
    sectores: ['Agencias web', 'E-commerce', 'Medios digitales', 'Educación online', 'CMS', 'Startups'],
    tags: ['Backend', 'WordPress', 'Laravel', 'Web']
  },
  {
    id: 9,
    nombre: 'R',
    icono: 'logo-r',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
    categoria: ['datos'],
    salarioPromedio: 89,
    salarioMin: 58,
    salarioMax: 130,
    demanda: 'Media',
    descripcion: 'El estándar en estadística, análisis y visualización de datos.',
    accentColor: '#276DC3',
    sectores: ['Investigación académica', 'Farmacéutica', 'Finanzas', 'Salud pública', 'Consultoría', 'Seguros'],
    tags: ['Data Science', 'Estadística', 'Visualización', 'ML']
  },
  {
    id: 10,
    nombre: 'Lua',
    icono: 'logo-lua',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg',
    categoria: ['backend'],
    salarioPromedio: 72,
    salarioMin: 42,
    salarioMax: 110,
    demanda: 'Baja',
    descripcion: 'Ligero y embebible, rey del scripting en videojuegos y sistemas.',
    accentColor: '#000080',
    sectores: ['Videojuegos', 'Motores de juego', 'Sistemas embebidos', 'Ciberseguridad', 'Redes y telecomunicaciones', 'Automatización'],
    tags: ['Scripting', 'Juegos', 'Embebido']
    },
    {
      id: 11,
      nombre: 'Ruby',
      icono: 'logo-ruby',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg',
      categoria: ['backend','web'],
      salarioPromedio: 85,
      salarioMin: 55,
      salarioMax: 125,
      demanda: 'Media',
      descripcion: 'Lenguaje de programación dinámica, orientada a objetos, ideal para desarrollo web.',
      accentColor: '#CC0000',
      sectores: ['Desarrollo web', 'Startups', 'E-commerce', 'Educación', 'Consultoría', 'Finanzas'],
      tags: ['Backend', 'Web', 'OOP', 'Ruby on Rails']
    }
  ];

  beneficios = [
  { icono: 'trending-up-outline', color: '#4f46e5', bg: '#eef2ff', titulo: 'Alta demanda laboral', descripcion: '...' },
  { icono: 'cash-outline', color: '#d97706', bg: '#fef3c7', titulo: 'Salarios competitivos', descripcion: '...' },
  { icono: 'globe-outline', color: '#059669', bg: '#d1fae5', titulo: 'Trabajo remoto global', descripcion: '...' },
  { icono: 'rocket-outline', color: '#db2777', bg: '#fce7f3', titulo: 'Crecimiento profesional', descripcion: '...' },
  { icono: 'construct-outline', color: '#7c3aed', bg: '#ede9fe', titulo: 'Ecosistemas maduros', descripcion: '...' },
  { icono: 'people-outline', color: '#0284c7', bg: '#e0f2fe', titulo: 'Comunidad y aprendizaje', descripcion: '...' }
];

  filtros: Filtro[] = [
    { etiqueta: 'Todos',    valor: 'todos' },
    { etiqueta: 'Frontend', valor: 'frontend' },
    { etiqueta: 'Backend',  valor: 'backend' },
    {etiqueta: 'Mobile',  valor: 'mobile' },
    {etiqueta: 'Web', valor: 'web' },
    { etiqueta: 'Data',    valor: 'datos' }
  ];

  filtroActivo: string = 'todos';
  lenguajesFiltrados: Lenguaje[] = [];
  salarioPromedio: number = 0;

  constructor() {}

  ngOnInit() {
    this.aplicarFiltro('todos');
    this.calcularSalarioPromedio();
  }

  aplicarFiltro(valor: string): void {
    this.filtroActivo = valor;
    this.lenguajesFiltrados = valor === 'todos'
      ? this.lenguajes
      : this.lenguajes.filter(l => l.categoria.includes(valor));
  }

  calcularPorcentaje(salario: number): number {
    const max = Math.max(...this.lenguajes.map(l => l.salarioPromedio));
    return max > 0 ? (salario / max) * 100 : 0;
  }

  private calcularSalarioPromedio(): void {
    const total = this.lenguajes.reduce((sum, l) => sum + l.salarioPromedio, 0);
    this.salarioPromedio = Math.round(total / this.lenguajes.length);
  }
}