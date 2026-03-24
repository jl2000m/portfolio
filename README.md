# José Martínez — Portfolio

Portfolio personal construido con Next.js 14, Tailwind CSS y Framer Motion.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Fonts:** Syne (display) + Space Mono (mono) via `next/font/google`
- **Icons:** Lucide React
- **Deployment:** Vercel

## Estructura

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout con fonts, scanlines, grid bg
│   ├── page.tsx            # Home page
│   ├── globals.css         # Variables CSS, clases de utilidad
│   ├── about/page.tsx      # Página sobre mí
│   ├── content/page.tsx    # Pilares de contenido
│   ├── contact/page.tsx    # Página de contacto
│   └── projects/
│       ├── page.tsx        # Grid de proyectos filtrable
│       └── [slug]/page.tsx # Página individual de proyecto
├── components/             # Componentes reutilizables
├── lib/
│   └── projects.ts         # Data de todos los proyectos
├── public/
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── vercel.json
```

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
# → http://localhost:3000

# Build de producción
npm run build

# Preview del build
npm start
```

## Deploy en Vercel

### Opción 1: CLI

```bash
npm i -g vercel
vercel
```

### Opción 2: Vercel Dashboard

1. Push el repositorio a GitHub
2. Ir a [vercel.com/new](https://vercel.com/new)
3. Importar el repositorio
4. Framework: **Next.js** (auto-detectado)
5. Deploy

No se requieren variables de entorno para este proyecto.

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Home con hero, proyectos destacados, skills y CTA |
| `/projects` | Grid filtrable de los 6 proyectos |
| `/projects/[slug]` | Caso de estudio individual |
| `/about` | Bio, timeline, valores y stack |
| `/contact` | Opciones de contacto |

## Proyectos incluidos

1. **Birriapp** — App de coordinación deportiva con pagos en tiempo real
2. **Reggi** — Sitio y funnel de producto (KYC/AML, debida diligencia digital)
3. **Astro Asistencias** — Plataforma de corretaje digital de seguros
4. **RM Seguros Landing** — Landing de seguros de vida (PoC)
5. **Excenet Asistencias** — Plataforma insurtech primera generación
6. **Customer Intelligence Hub** — Pipeline multi-agente de inteligencia de clientes

## Personalización

Los datos de proyectos están en `lib/projects.ts`. Para agregar o modificar proyectos, editar ese archivo.

Los colores y variables están en `app/globals.css` y `tailwind.config.ts`.
