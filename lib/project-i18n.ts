import type { Project } from "@/lib/projects";

export type ProjectLang = "en" | "es";

const TAG_LABELS_ES: Record<string, string> = {
  ALL: "Todos",
  "E-commerce": "E-commerce",
  Mobile: "Móvil",
  Web: "Web",
  InsurTech: "Insurtech",
  Growth: "Crecimiento",
  Compliance: "Cumplimiento normativo",
  KYC: "KYC",
  AI: "IA",
  App: "App",
  Supabase: "Supabase",
  "Performance Media": "Medios de performance",
  FinTech: "Fintech",
  Venezuela: "Venezuela",
  "Seguros de Vida": "Seguros de vida",
};

export function translateProjectTag(tag: string, lang: ProjectLang): string {
  if (lang === "en") return tag;
  return TAG_LABELS_ES[tag] ?? tag;
}

interface ProjectCopyEs {
  name?: string;
  tagline: string;
  description: string;
  problem: string;
  features: string[];
  architecture: string;
  learnings: string;
  liveUrlNote?: string | null;
}

const PROJECT_COPY_ES: Record<string, ProjectCopyEs> = {
  "sura-ecommerce": {
    tagline: "La primera plataforma digital multiproducto de seguros de Panamá.",
    description:
      "Lideré el lanzamiento y el crecimiento del primer e-commerce multiproducto de seguros de Panamá como Product Owner y líder comercial. No como dev: como quien definió qué construir, por qué y cómo rendía comercialmente. +200% YoY, más de $2M en ventas digitales.",
    problem:
      "SURA necesitaba el primer canal digital multiproducto de seguros de Panamá desde cero. No existía playbook local. Mi trabajo fue definir la visión de producto, alinear al equipo de desarrollo y hacerlo crecer comercialmente en un mercado que nunca había comprado seguros online.",
    features: [
      "Dueño del roadmap: prioridades, specs y criterios de aceptación",
      "Equipo de 4 personas gestionando más de 5k leads mensuales en todos los canales digitales",
      "Performance marketing multicanal (Meta Ads + Google Ads)",
      "Estrategia de CRO: A/B tests, análisis en Hotjar, iteración UX continua con Figma",
      "Dashboards ejecutivos de KPI en Looker Studio",
      "Implementación de tracking GA4 + GTM para atribución de embudo completo",
      "Puente entre requerimientos de negocio y el equipo de desarrollo de punta a punta",
    ],
    architecture:
      "Mi rol: Product Owner + líder comercial. No escribí el código. Fui dueño del roadmap, definí lo que la plataforma debía lograr comercialmente, coordiné con el equipo de desarrollo y fui responsable de los resultados del canal digital.",
    learnings:
      "Lo más difícil del rol de producto no es decidir qué construir. Es lograr que un equipo de desarrollo y una estructura corporativa avancen a velocidad de startup. La confianza del usuario, la transparencia de precios y el cambio interno fueron los verdaderos frenos. Los datos y un argumento comercial claro fueron lo único que abrió camino.",
    liveUrlNote:
      "Plataforma en vivo. Canal digital multiproducto de seguros líder en Panamá.",
  },
  "astro-asistencias": {
    tagline: "Correduría de seguros digital en Panamá.",
    description:
      "Plataforma de correduría digital para seguros en Panamá: SOAT, autos y viajes. Primera contratación de la empresa. Arquitectura full stack con API en Java + frontend en Next.js, integrada con Seguros SURA y un sistema de comisiones multinivel.",
    problem:
      "La cotización y compra de seguros en Panamá es offline, lenta y con mucha fricción. Astro digitaliza todo el flujo desde la cotización hasta la emisión de la póliza.",
    features: [
      "Cotizaciones en tiempo real vía API de SURA",
      "Portal de clientes y de agentes",
      "Sistema de comisiones multinivel",
      "Gestión de pólizas y pagos",
      "Historial de vehículo con Bluebook",
      "Más de 40 migraciones de BD con Flyway",
      "Documentación Swagger/OpenAPI",
    ],
    architecture:
      "Frontend (Next.js) → API Spring Boot → PostgreSQL (JOOQ ORM) → API de Seguros SURA + scraper Bluebook. Auth JWT, REST stateless, transacciones ACID con bloqueo optimista.",
    learnings:
      "Spring Boot con JOOQ es un stack infravalorado para APIs financieras. Type-safety de punta a punta desde la BD hasta el cliente. TestContainers para pruebas de integración contra una BD real cambia por completo la calidad de QA.",
  },
  "cobertura-completa-advisor": {
    name: "Asesor IA Cobertura Completa",
    tagline: "Orientación con RAG, modelos flagship y evaluación continua sobre cotizaciones reales.",
    description:
      "Experiencia asistida por IA para Cobertura Completa en Astro Asistencias: recomendaciones y seguimiento anclados a la cotización en vivo, con RAG sobre documentación aprobada de aseguradoras cuando el usuario pregunta por condiciones, exclusiones o endosos. Las recomendaciones se razonan con un enfoque tipo MECE (dimensiones de decisión mutuamente excluyentes que entre todas cubren lo relevante), para que el asistente no se quede en “siempre el más barato.” La generación usa modelos flagship de proveedores líderes. El diseño incluye evaluación en producción, no solo benchmarks puntuales. Lo que ve el cliente también queda en nuestro CRM para que el equipo siga con el contexto completo.",
    problem:
      "Las cotizaciones con varias aseguradoras saturan. Deducibles y beneficios compiten por atención. Un chat genérico o se queda corto o inventa cobertura. Hacía falta orientación personal que respete lo cotizado y una forma de saber qué modelo flagship y qué prompts aguantan con tráfico real.",
    features: [
      "Prompting inspirado en MECE: el modelo evalúa cada plan cotizado en dimensiones separadas (por ejemplo precio, beneficios y límites, solidez de la aseguradora, encaje con conductor y vehículo) antes de sintetizar, para no repetir la misma idea con distinto nombre y no saltarse por accidente un factor clave",
      "Texto de recomendación y siguientes preguntas sugeridas, anclados a la cotización en vivo, no a consejos genéricos de seguros",
      "Seguimiento por preguntas con reglas estrictas: comparar solo lo que figura en las opciones cotizadas, tono local para Panamá",
      "RAG (generación aumentada por recuperación): fragmentos con embeddings de material aprobado por aseguradora, búsqueda semántica y respuestas acotadas al producto correcto",
      "Enrutamiento: flujos simples de precio o “cuál plan” sin RAG pesado. RAG completo cuando la pregunta exige lenguaje de póliza",
      "Modelos flagship de OpenAI y Anthropic para la generación sensible. Modelos más livianos donde basta clasificar o enrutar",
      "Evaluación de modelos en producción: registro sistemático de costo, latencia y qué camino corrió (generación, cache, RAG) para comparar proveedores y prompts con conversiones reales, no solo con slides",
      "Cache y límites de uso para que el uso de modelos flagship siga rápido y sostenible a escala",
      "Las recomendaciones y respuestas de seguimiento se sincronizan con nuestro CRM en el contacto u oportunidad, para que ventas y operaciones vean la misma orientación que recibió el usuario",
    ],
    architecture:
      "APIs en Next.js, Vercel AI SDK, salidas estructuradas para la UI, pipeline RAG (embeddings + vector store en Postgres/Supabase), stack de la correduría para cotizaciones y cliente, e integración con CRM para que las salidas de la IA queden en el expediente con el que trabaja el equipo a diario.",
    learnings:
      "El RAG da credibilidad en letra chica. El JSON de la cotización manda en beneficios. Una rúbrica tipo MECE evita respuestas perezosas de “gana el más barato” y deja los trade offs explícitos. Los modelos flagship marcan la calidad, pero sin evaluación en producción no ves costo ni regresiones. Salidas estructuradas más telemetría convierten el tráfico vivo en el verdadero set de evaluación.",
    liveUrlNote:
      "Vive dentro del flujo de auto y Cobertura Completa de Astro. Mismo sitio en vivo, producto con superficie propia.",
  },
  birriapp: {
    tagline: "Coordina partidos. Cobra al instante.",
    description:
      "App para coordinar partidos deportivos con pagos en tiempo real, notificaciones push, check-in por QR y mapas integrados.",
    problem:
      "Organizar partidos amateur implica perseguir pagos, confirmar asistencia y coordinar sedes. Todo por WhatsApp. Birriapp centraliza todo en una sola plataforma.",
    features: [
      "Coordinación de partidos deportivos",
      "Gestión de pagos",
      "Check-in con código QR",
      "Notificaciones push (Firebase)",
      "Integración con Google Maps para sedes",
      "Sincronización automática del estado de pagos vía triggers en PostgreSQL",
    ],
    architecture:
      "Web Next.js + app móvil React Native → Supabase (PostgreSQL + RLS + Auth + Realtime) → Firebase (push) + Google Maps",
    learnings:
      "Implementar Row Level Security en Supabase desde el día uno ahorra semanas. Los triggers de PostgreSQL para el estado de pagos eliminan condiciones de carrera que en frontend serían complejas.",
    liveUrlNote:
      "El sitio de birriapp.com ya está en vivo. La app llega pronto — únete a la lista de espera para acceso anticipado.",
  },
  reggi: {
    tagline: "Debida diligencia digital, sin fricción.",
    description:
      "Sitio para Reggi, plataforma KYC/AML de debida diligencia para empresas reguladas en Panamá. La clave: una landing no bastaba. Reggi atiende 6 industrias distintas, cada una con sus dolores, así que construimos una página dedicada por industria. Next.js dentro del monorepo de la empresa para compartir componentes y mantener todo consistente.",
    problem:
      "Las empresas reguladas pierden tiempo en debida diligencia manual: archivos dispersos, formularios repetidos, screening PEP/sanciones uno a uno y poca trazabilidad. El reto de comunicación es que cada industria (abogados, brokers, bienes raíces) tiene un flujo distinto y un lenguaje distinto del problema.",
    features: [
      "Landing principal: hero, problema/solución, cómo funciona, FAQ, contacto",
      "6 páginas por industria: distribución, abogados, bienes raíces, brokers, contadores, notarios",
      "Sección Mi Reggi (expediente digital gratuito para personas y empresas)",
      "Animaciones y scroll-reveal con Framer Motion",
      "Formulario demo listo para integrar con CRM",
      "Componentes y tokens compartidos vía monorepo de la empresa",
    ],
    architecture:
      "Next.js App Router dentro del monorepo de la empresa. Componentes UI y tokens de diseño compartidos entre apps. Deploy independiente del resto de productos.",
    learnings:
      "Un sitio de compliance debe sonar serio sin ser aburrido. Lo más valioso: una landing genérica perdía a todos. Cada industria tiene su lenguaje de compliance y su miedo. Seis páginas específicas permitieron hablar directo a cada una en lugar de intentar abarcarlas todas a la vez.",
  },
  excenet: {
    name: "Excenet Asistencias",
    tagline: "Plataforma digital de asistencias de primera generación.",
    description:
      "Panel admin y portal de clientes para vender productos de asistencia en Venezuela y Panamá. Pagos multimoneda, scraping de la tasa BCV para precios VES en tiempo real e integración Cashea BNPL. Arquitectura monorepo con Turbo.",
    problem:
      "Vender asistencias en LatAm requería un sistema con pagos multimoneda, comisiones multinivel y tasas de cambio al día. En Venezuela la tasa BCV cambia constantemente: cualquier retraso en precios es vender a pérdida. Ningún SaaS genérico encajaba en el mercado.",
    features: [
      "Panel admin con analítica en tiempo real",
      "Portal de clientes para compras de asistencia",
      "Scraping de tasa BCV para actualización automática de precios en VES",
      "Sistema de comisiones multinivel",
      "Integración API SOAP ANCON (cotizaciones)",
      "API bancaria BDV + pagos Cashea BNPL",
      "Exportación Excel/PDF",
      "Trazabilidad completa",
      "OCR y validación de documentos",
      "Integración Google Wallet",
      "Monorepo (Turbo + pnpm)",
    ],
    architecture:
      "Monorepo Turbo: apps/admin (Next.js, puerto 3001) + apps/store (Next.js) + packages/shared. Supabase con RLS jerárquico. SOAP ANCON + API BDV + Cashea + Klaviyo.",
    learnings:
      "Montar bien un sistema de comisiones multinivel desde el inicio es más difícil de lo que parece. La deuda técnica en RLS con roles jerárquicos acabó pidiendo un refactor completo. En mercados volátiles, automatizar precios no es un lujo.",
    liveUrlNote:
      "Sitio en producción — experiencia ExceNet para productos de asistencia en Venezuela (representado por MIDC Inversiones y Asesoría C.A.).",
  },
  "rm-seguros": {
    tagline: "Landing de seguros de vida que convierte visitas en prospectos.",
    description:
      "Landing de seguros de vida con cotización integrada y demo de chatbot. Pensada para convertir visitantes en prospectos calificados para un corredor de vida.",
    problem:
      "Los corredores de vida necesitan demostrar su propuesta digital antes de un desarrollo completo. Esta landing funciona como un POC vendible que genera leads desde el día uno.",
    features: [
      "Cotización rápida de seguros de vida",
      "Demo de chatbot de seguros de vida",
      "Scraping de precios competitivos (Cheerio)",
      "Diseño orientado a conversión",
      "Formulario de captura de leads integrado",
    ],
    architecture:
      "Next.js → Supabase → scraper Cheerio para datos de precios. Demo hardcodeada para velocidad de presentación.",
    learnings:
      "A veces un entregable pequeño pero claro abre más conversaciones que un demo técnico largo. No reemplaza el producto final, pero alinea expectativas desde el inicio.",
    liveUrlNote:
      "Sitio en producción — cotización de vida y captación de leads para RM Seguros (WorldWide Medical, Panamá).",
  },
};

export function localizeProject(project: Project, lang: ProjectLang): Project {
  if (lang === "en") return project;
  const copy = PROJECT_COPY_ES[project.slug];
  if (!copy) return project;
  return {
    ...project,
    name: copy.name ?? project.name,
    tagline: copy.tagline,
    description: copy.description,
    problem: copy.problem,
    features: copy.features,
    architecture: copy.architecture,
    learnings: copy.learnings,
    liveUrlNote:
      copy.liveUrlNote !== undefined ? copy.liveUrlNote : project.liveUrlNote,
  };
}
