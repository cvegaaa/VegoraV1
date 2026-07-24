import {
  Workflow,
  Brain,
  BarChart3,
  ShieldCheck,
  Network,
  Layers,
  Gauge,
  Target,
  Handshake,
  Rocket,
  Lightbulb,
  Eye,
  HandHeart,
  Clock,
  Users,
  TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    icon: Workflow,
    title: 'Automatización de Procesos',
    description:
      'Rediseñamos sus flujos operacionales con tecnología que elimina tareas manuales, reduce errores y libera el tiempo de su equipo para lo que realmente importa.',
  },
  {
    icon: Brain,
    title: 'Inteligencia Artificial Aplicada',
    description:
      'Integramos modelos de IA que analizan sus datos en tiempo real, predicen tendencias y toman decisiones con la precisión que su negocio exige.',
  },
  {
    icon: BarChart3,
    title: 'Analítica y Business Intelligence',
    description:
      'Convertimos sus datos dispersos en tableros claros y accionables. Cada decisión queda respaldada por evidencia, no por intuición.',
  },
  {
    icon: ShieldCheck,
    title: 'Ciberseguridad Corporativa',
    description:
      'Protegemos su información con protocolos de nivel bancario. Auditorías, monitoreo y respuesta ante incidentes para que duerma tranquilo.',
  },
  {
    icon: Network,
    title: 'Infraestructura y Nube',
    description:
      'Migramos sus sistemas a la nube con cero interrupciones. Escalabilidad, disponibilidad y costos optimizados bajo un solo techo.',
  },
  {
    icon: Layers,
    title: 'Desarrollo a Medida',
    description:
      'Construimos software que se adapta a su operación, no al revés. Plataformas web, móviles e integraciones que crecen con su empresa.',
  },
];

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const values: ValueItem[] = [
  {
    icon: Rocket,
    title: 'Resultados, no promesas',
    description:
      'Cada peso invertido se traduce en métricas verificables. Trabajamos con KPIs acordados desde el primer día.',
  },
  {
    icon: Lightbulb,
    title: 'Innovación con propósito',
    description:
      'No adoptamos tecnología por moda. La implementamos cuando genera valor real y medible para su operación.',
  },
  {
    icon: Eye,
    title: 'Transparencia radical',
    description:
      'Acceso completo al progreso, a los entregables y a las decisiones. Cero cajas negras, cero sorpresas.',
  },
  {
    icon: HandHeart,
    title: 'Compromiso humano',
    description:
      'La tecnología no reemplaza a las personas: las potencia. Capacitamos a su equipo para liderar el cambio.',
  },
];

export interface DifferentialItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const differentials: DifferentialItem[] = [
  {
    icon: Gauge,
    title: 'Implementación en semanas, no meses',
    description:
      'Nuestra metodología ágil entrega valor desde la primera iteración. Sin eternas fases de diagnóstico que nunca terminan.',
  },
  {
    icon: Target,
    title: 'Enfoque en ROI, no en modas',
    description:
      'Cada recomendación pasa por el filtro del retorno. Si no genera impacto medible, no lo proponemos.',
  },
  {
    icon: Handshake,
    title: 'Transferencia real de conocimiento',
    description:
      'No creamos dependencia. Su equipo queda capacitado para operar y escalar lo que construimos juntos.',
  },
  {
    icon: Clock,
    title: 'Soporte 24/7 con SLA garantizado',
    description:
      'Respuesta en minutos, no en días. Su operación no se detiene y nosotros tampoco.',
  },
];

export interface ProblemItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const problems: ProblemItem[] = [
  {
    icon: TrendingUp,
    title: 'Estancamiento operativo',
    description:
      'Sus procesos siguen siendo manuales mientras la competencia avanza. Cada mes que pasa, la brecha se amplía.',
  },
  {
    icon: BarChart3,
    title: 'Datos sin aprovechar',
    description:
      'Tiene información valiosa dispersa en hojas de cálculo y sistemas que no se comunican entre sí.',
  },
  {
    icon: Users,
    title: 'Talento desconectado',
    description:
      'Su equipo invierte horas en tareas repetitivas que la tecnología debería resolver automáticamente.',
  },
  {
    icon: ShieldCheck,
    title: 'Riesgos invisibles',
    description:
      'Sin una estrategia de ciberseguridad, cada día es una lotería que no quiere ganar.',
  },
];

export interface StatItem {
  value: string;
  label: string;
}

export const stats: StatItem[] = [
  { value: '+15', label: 'Empresas transformadas' },
  { value: '92%', label: 'Automatización lograda' },
  { value: '4.5x', label: 'Retorno de inversión' },
  { value: '24/7', label: 'Soporte y monitoreo' },
];

export interface QuizQuestion {
  question: string;
  options: { text: string; score: number }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: '¿Cuánto de su operación depende aún de procesos manuales y hojas de cálculo?',
    options: [
      { text: 'Menos del 25%', score: 4 },
      { text: 'Entre 25% y 50%', score: 3 },
      { text: 'Entre 50% y 75%', score: 2 },
      { text: 'Más del 75%', score: 1 },
    ],
  },
  {
    question: '¿Sus datos están integrados y accesibles para tomar decisiones en tiempo real?',
    options: [
      { text: 'Sí, totalmente integrados', score: 4 },
      { text: 'Parcialmente, algunos sistemas conectados', score: 3 },
      { text: 'Poco, la mayoría está aislado', score: 2 },
      { text: 'No, todo está disperso', score: 1 },
    ],
  },
  {
    question: '¿Cuenta con un plan formal de ciberseguridad y respaldo de información?',
    options: [
      { text: 'Sí, con auditorías periódicas', score: 4 },
      { text: 'Tenemos medidas básicas', score: 3 },
      { text: 'Pocas medidas implementadas', score: 2 },
      { text: 'No tenemos un plan', score: 1 },
    ],
  },
  {
    question: '¿Su equipo está capacitado para adoptar nuevas tecnologías?',
    options: [
      { text: 'Totalmente, cultura digital sólida', score: 4 },
      { text: 'En transición, con capacitación activa', score: 3 },
      { text: 'Resistencia moderada al cambio', score: 2 },
      { text: 'Alta resistencia al cambio', score: 1 },
    ],
  },
  {
    question: '¿Ha implementado inteligencia artificial o automatización en su operación?',
    options: [
      { text: 'Sí, en varios procesos clave', score: 4 },
      { text: 'En un proceso piloto', score: 3 },
      { text: 'Lo estamos evaluando', score: 2 },
      { text: 'No lo hemos considerado', score: 1 },
    ],
  },
];

export interface QuizResult {
  min: number;
  max: number;
  level: string;
  description: string;
}

export const quizResults: QuizResult[] = [
  {
    min: 5,
    max: 8,
    level: 'Inicial',
    description:
      'Su empresa está en el punto de partida. Existe una oportunidad enorme de transformación. Un diagnóstico estructurado le permitirá priorizar las acciones de mayor impacto.',
  },
  {
    min: 9,
    max: 12,
    level: 'En desarrollo',
    description:
      'Ha dado los primeros pasos, pero la transformación aún es fragmentada. Necesita una estrategia integral que conecte sus esfuerzos y los convierta en resultados medibles.',
  },
  {
    min: 13,
    max: 16,
    level: 'Avanzado',
    description:
      'Su empresa tiene bases sólidas. El siguiente nivel requiere optimización, IA aplicada y cultura digital madura para sostener la ventaja competitiva.',
  },
  {
    min: 17,
    max: 20,
    level: 'Líder digital',
    description:
      'Es referente en su sector. El reto ahora es la innovación continua, escalar lo aprendido y anticiparse a las tendencias con tecnología de vanguardia.',
  },
];
