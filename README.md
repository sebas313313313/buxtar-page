# Buxtar Digital Solutions - Sitio Web Corporativo

Sitio web corporativo de Buxtar Digital Solutions. Aplicacion de una sola pagina (SPA) construida con React y Vite, con soporte multilenguaje, formulario de contacto con validacion y sanitizacion, y un sistema de diseno basado en Tailwind CSS.

---

## Tabla de contenidos

1. [Tecnologias utilizadas](#tecnologias-utilizadas)
2. [Requisitos previos](#requisitos-previos)
3. [Instalacion y ejecucion](#instalacion-y-ejecucion)
4. [Scripts disponibles](#scripts-disponibles)
5. [Estructura del proyecto](#estructura-del-proyecto)
6. [Arquitectura de la aplicacion](#arquitectura-de-la-aplicacion)
7. [Sistema de rutas](#sistema-de-rutas)
8. [Componentes](#componentes)
9. [Sistema de internacionalizacion (i18n)](#sistema-de-internacionalizacion-i18n)
10. [Datos estaticos](#datos-estaticos)
11. [Hooks personalizados](#hooks-personalizados)
12. [Utilidades](#utilidades)
13. [Sistema de diseno](#sistema-de-diseno)
14. [Configuracion de Vite](#configuracion-de-vite)
15. [Configuracion de Tailwind CSS](#configuracion-de-tailwind-css)
16. [Seguridad](#seguridad)
17. [SEO](#seo)
18. [Variables de entorno](#variables-de-entorno)
19. [Linting](#linting)
20. [Assets publicos](#assets-publicos)
21. [Despliegue](#despliegue)

---

## Tecnologias utilizadas

| Tecnologia | Version | Proposito |
|---|---|---|
| React | 19.2.7 | Libreria de UI, componentes funcionales |
| React DOM | 19.2.7 | Renderizado del DOM |
| React Router DOM | 7.18.1 | Enrutamiento SPA con rutas declarativas |
| Framer Motion | 12.42.2 | Animaciones y transiciones de componentes |
| React Helmet Async | 3.0.0 | Gestion dinamica de meta tags y SEO |
| DOMPurify | 3.4.11 | Sanitizacion de inputs contra XSS |
| Vite | 8.1.1 | Bundler y servidor de desarrollo |
| @vitejs/plugin-react | 6.0.3 | Plugin de React para Vite (Fast Refresh) |
| Tailwind CSS | 3.4.19 | Framework de utilidades CSS |
| PostCSS | 8.5.16 | Procesador CSS (requerido por Tailwind) |
| Autoprefixer | 10.5.2 | Prefijos de navegador automaticos |
| OxLint | 1.71.0 | Linter rapido para JavaScript y React |

---

## Requisitos previos

- Node.js version 18 o superior
- npm version 9 o superior

---

## Instalacion y ejecucion

```bash
# 1. Clonar el repositorio
git clone https://github.com/sebas313313313/buxtar-page.git
cd buxtar-page

# 2. Instalar dependencias
npm install

# 3. Copiar variables de entorno (opcional)
cp .env.example .env

# 4. Iniciar servidor de desarrollo
npm run dev
```

El servidor de desarrollo se ejecuta por defecto en `http://localhost:5173`.

---

## Scripts disponibles

| Comando | Descripcion |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo de Vite con Hot Module Replacement |
| `npm run build` | Genera el bundle de produccion en la carpeta `dist/` |
| `npm run preview` | Sirve el bundle de produccion localmente para verificacion |
| `npm run lint` | Ejecuta OxLint sobre el codigo fuente |

---

## Estructura del proyecto

```
buxtar-page/
├── index.html                    # Punto de entrada HTML (CSP, SEO, Open Graph)
├── package.json                  # Dependencias y scripts
├── vite.config.js                # Configuracion de Vite (seguridad, chunks)
├── tailwind.config.js            # Tema personalizado de Tailwind CSS
├── postcss.config.js             # Plugins PostCSS (Tailwind + Autoprefixer)
├── .oxlintrc.json                # Configuracion del linter OxLint
├── .env.example                  # Plantilla de variables de entorno
├── .gitignore                    # Archivos excluidos de Git
│
├── public/                       # Assets estaticos (servidos tal cual)
│   ├── logos/                    # Logos de la empresa, clientes y aliados
│   ├── logosapps/                # Logos de aplicaciones desarrolladas
│   ├── images/
│   │   └── services/             # Imagenes de cada servicio
│   ├── consultoria_hero.png      # Imagen hero de consultoria
│   └── marketing_hero.png        # Imagen hero de marketing
│
└── src/                          # Codigo fuente de la aplicacion
    ├── main.jsx                  # Punto de entrada de React (StrictMode)
    ├── App.jsx                   # Componente raiz (Router, Providers, Routes)
    ├── index.css                 # Estilos globales, CSS vars, Tailwind layers
    │
    ├── components/               # Componentes reutilizables
    │   ├── layout/               # Componentes de estructura
    │   │   ├── Navbar.jsx        # Barra de navegacion fija con menu movil
    │   │   ├── Footer.jsx        # Pie de pagina con redes sociales
    │   │   ├── Container.jsx     # Contenedor con max-width y padding
    │   │   └── Section.jsx       # Wrapper de seccion con espaciado
    │   │
    │   ├── sections/             # Secciones reutilizables de paginas
    │   │   ├── Hero.jsx          # Seccion hero con estadisticas animadas
    │   │   ├── Services.jsx      # Grid de servicios con tarjetas de imagen
    │   │   ├── About.jsx         # Mision, vision y valores
    │   │   ├── Clients.jsx       # Carrusel infinito de logos de clientes
    │   │   ├── Allies.jsx        # Carrusel infinito de logos de aliados
    │   │   ├── News.jsx          # Grid de noticias recientes
    │   │   └── Contact.jsx       # Formulario de contacto con validacion
    │   │
    │   └── ui/                   # Componentes UI primitivos
    │       ├── index.js          # Barrel export de todos los componentes UI
    │       ├── Button.jsx        # Boton con variantes y estado de carga
    │       ├── Card.jsx          # Tarjeta con glassmorphism y sub-componentes
    │       ├── Badge.jsx         # Etiqueta/chip con variantes de color
    │       ├── Input.jsx         # Input/textarea con validacion visual
    │       ├── SectionTitle.jsx  # Titulo de seccion con badge y divider
    │       └── LanguageSwitcher.jsx  # Selector de idioma dropdown
    │
    ├── pages/                    # Paginas de la aplicacion (una por ruta)
    │   ├── Home.jsx              # Pagina principal (Hero + Que hacemos + Valores)
    │   ├── ServicesPage.jsx      # Listado general de servicios
    │   ├── ServiceDetailPage.jsx # Detalle generico de un servicio (por ID)
    │   ├── ConsultoriaPage.jsx   # Pagina dedicada: Consultoria y Transformacion
    │   ├── MarketingPage.jsx     # Pagina dedicada: Marketing Digital
    │   ├── SoftwarePage.jsx      # Pagina dedicada: Desarrollo de Software
    │   ├── ProyectosPage.jsx     # Pagina dedicada: Formulacion de Proyectos
    │   ├── ClientsPage.jsx       # Pagina completa de clientes con timeline
    │   ├── AlliesPage.jsx        # Pagina de aliados estrategicos
    │   ├── AboutPage.jsx         # Pagina de nosotros (equipo, historia)
    │   ├── NewsPage.jsx          # Pagina de noticias
    │   ├── ContactPage.jsx       # Pagina de contacto + CTA de empleo
    │   └── CareersPage.jsx       # Pagina de empleo con listado de vacantes
    │
    ├── context/                  # Contextos de React
    │   └── LanguageContext.jsx   # Proveedor de idioma global con persistencia
    │
    ├── hooks/                    # Hooks personalizados
    │   ├── useFormValidation.js  # Validacion de formularios con sanitizacion
    │   └── useRateLimit.js       # Rate limiting para envio de formularios
    │
    ├── i18n/                     # Traducciones
    │   ├── index.js              # Barrel export, idiomas soportados, idioma default
    │   ├── es.js                 # Espanol (idioma por defecto)
    │   ├── en.js                 # Ingles
    │   ├── fr.js                 # Frances
    │   └── pt.js                 # Portugues
    │
    ├── data/                     # Datos estaticos de la aplicacion
    │   ├── services.js           # Lista de servicios (id, icono, imagen)
    │   ├── clients.js            # Lista de clientes (nombre, logo, sector, descripcion)
    │   ├── allies.js             # Lista de aliados (nombre, logo, descripcion)
    │   └── news.js               # Noticias/actualizaciones recientes
    │
    ├── utils/                    # Funciones utilitarias
    │   ├── constants.js          # Constantes globales (empresa, nav links, stats)
    │   ├── sanitize.js           # Sanitizacion de inputs con DOMPurify
    │   ├── security.js           # Helpers de seguridad (CSP, secure fetch)
    │   └── validation.js         # Reglas de validacion de formularios
    │
    └── assets/                   # Assets procesados por Vite
        └── fondos/               # Fondos e imagenes (reservado)
```

---

## Arquitectura de la aplicacion

La aplicacion sigue una arquitectura de componentes organizada en capas:

```
LanguageProvider (Contexto global de idioma)
  └── HelmetProvider (SEO dinamico)
        └── BrowserRouter (React Router)
              └── Layout fijo
                    ├── Navbar (sticky, animado)
                    ├── <Routes> (contenido de paginas)
                    └── Footer
```

### Flujo de datos

1. `LanguageProvider` envuelve toda la aplicacion. Cualquier componente puede acceder al idioma actual y a la funcion de traduccion `t()` mediante el hook `useLanguage()`.
2. `HelmetProvider` permite que cada pagina defina sus propias meta tags de forma dinamica.
3. `BrowserRouter` maneja la navegacion del lado del cliente. Cada ruta renderiza un componente de pagina diferente.
4. Los componentes de pagina componen secciones y componentes UI. Los datos se importan directamente desde `src/data/`.

### Punto de entrada

El archivo `src/main.jsx` monta la aplicacion en el elemento `#root` dentro de `StrictMode` de React. Importa los estilos globales de `index.css`.

---

## Sistema de rutas

Todas las rutas estan definidas en `src/App.jsx`. Se usa React Router DOM v7 con `BrowserRouter`.

| Ruta | Componente | Descripcion |
|---|---|---|
| `/` | `Home` | Pagina principal con Hero, "Que hacemos" y Valores |
| `/servicios` | `ServicesPage` | Grid con los 4 servicios principales |
| `/servicios/consultoria-transformacion` | `ConsultoriaPage` | Detalle de Consultoria y Transformacion Digital |
| `/servicios/marketing-digital` | `MarketingPage` | Detalle de Marketing Digital |
| `/servicios/desarrollo-software` | `SoftwarePage` | Detalle de Desarrollo de Software |
| `/servicios/formulacion-proyectos` | `ProyectosPage` | Detalle de Formulacion de Proyectos |
| `/servicios/:id` | `ServiceDetailPage` | Pagina generica de servicio (fallback por ID) |
| `/clientes` | `ClientsPage` | Timeline completo de clientes con carrusel |
| `/aliados` | `AlliesPage` | Carrusel de aliados estrategicos |
| `/nosotros` | `AboutPage` | Historia, equipo, mision y vision |
| `/noticias` | `NewsPage` | Grid de noticias recientes |
| `/contacto` | `ContactPage` | Formulario de contacto + CTA de empleo |
| `/trabaja-con-nosotros` | `CareersPage` | Listado de vacantes y formulario de aplicacion |

Las rutas de servicios especificos (`/servicios/consultoria-transformacion`, etc.) tienen prioridad sobre la ruta dinamica `/servicios/:id` porque estan declaradas primero en el componente `Routes`.

### Navegacion

- El Navbar usa `NavLink` de React Router, que aplica la clase activa automaticamente.
- El Navbar hace scroll to top y cierra el menu movil al cambiar de ruta (via `useEffect` sobre `location.pathname`).

---

## Componentes

### Layout (`src/components/layout/`)

| Componente | Props | Descripcion |
|---|---|---|
| `Navbar` | ninguna | Header sticky con logo, links de navegacion, selector de idioma, boton CTA y menu movil con overlay animado. Se oscurece al hacer scroll. |
| `Footer` | ninguna | Pie de pagina con logo, descripcion, iconos de redes sociales, CTA de contacto y enlaces legales. |
| `Container` | `children`, `className`, `narrow` | Contenedor con `max-w-7xl` (o `max-w-4xl` si `narrow=true`) y padding horizontal responsivo. |
| `Section` | `children`, `id`, `className`, `dark`, `noPadding` | Wrapper semantico `<section>` con padding vertical `py-16 md:py-24` y overflow hidden. |

### Secciones (`src/components/sections/`)

| Componente | Descripcion |
|---|---|
| `Hero` | Hero centrado con badge animado, titulo con highlight naranja, descripcion, dos CTAs (primario y secundario), strip de estadisticas (4 metricas) e indicador de scroll. Usa Framer Motion para animaciones de entrada. |
| `Services` | Grid 2 columnas de tarjetas con imagen de fondo, overlay degradado y texto sobre la imagen. Cada tarjeta enlaza a su pagina de detalle. |
| `About` | Dos tarjetas (Mision y Vision) en grid 2 columnas + grid de 4 valores con iconos animados al hover. |
| `Clients` | Carrusel infinito con scroll horizontal automatico que se pausa al hover. Al hacer clic en un logo, se abre un modal con detalles del cliente. |
| `Allies` | Mismo patron que Clients pero con datos de aliados estrategicos. |
| `News` | Grid de 3 columnas con tarjetas `Card` que muestran categoria, fecha formateada segun el idioma, titulo, extracto y enlace "Leer mas". |
| `Contact` | Formulario de 5 campos (nombre, email, telefono, asunto, mensaje) con validacion en tiempo real, sanitizacion via DOMPurify, rate limiting (3 envios por minuto) y mensajes de exito/error animados. Incluye informacion de contacto a la izquierda. |

### UI (`src/components/ui/`)

| Componente | Props principales | Descripcion |
|---|---|---|
| `Button` | `variant` (primary/secondary/outline/ghost), `size` (sm/md/lg), `loading`, `disabled` | Boton animado con Framer Motion (scale al hover/tap), spinner de carga y 4 variantes visuales. |
| `Card` | `glass`, `hover`, `padding` | Tarjeta con bordes redondeados, efecto hover (elevacion -4px), opcion de glassmorphism. Incluye sub-componentes `Card.Header`, `Card.Body`, `Card.Footer`. |
| `Badge` | `variant` (primary/secondary/success/info) | Etiqueta inline con borde y fondo semi-transparente. |
| `Input` | `label`, `name`, `type`, `error`, `touched`, `maxLength` | Input o textarea con estados visuales de foco, error y deshabilitado. Muestra errores con animacion y contador de caracteres si `maxLength` esta definido. |
| `SectionTitle` | `badge`, `title`, `subtitle`, `centered`, `lightText` | Titulo de seccion con badge opcional, subtitulo, divider naranja y animacion de entrada. |
| `LanguageSwitcher` | `className` | Dropdown con banderas que permite cambiar entre los 4 idiomas soportados. Se cierra al hacer clic fuera o con Escape. |

Todos los componentes UI se exportan desde `src/components/ui/index.js` como barrel export.

---

## Sistema de internacionalizacion (i18n)

El sistema de traducciones es personalizado (sin dependencia de librerías i18n externas).

### Configuracion

- Definido en `src/i18n/index.js`
- Idioma por defecto: `es` (Espanol)
- Idiomas soportados: `es`, `en`, `fr`, `pt`
- Las banderas se cargan desde `flagcdn.com`

### Archivos de traduccion

Cada archivo de idioma (`es.js`, `en.js`, `fr.js`, `pt.js`) exporta un objeto con claves anidadas que cubren:

- `nav` - Etiquetas de navegacion
- `hero` - Textos del hero (titulo, descripcion, CTAs)
- `stats` - Etiquetas de estadisticas
- `services` - Titulos y descripciones de servicios
- `about` - Mision, vision y valores
- `clients` - Seccion de clientes
- `news` - Seccion de noticias
- `contact` - Formulario, etiquetas, placeholders y mensajes de validacion
- `footer` - Textos legales

### Uso en componentes

```jsx
import { useLanguage } from './context/LanguageContext';

const MyComponent = () => {
  const { t, language, setLanguage } = useLanguage();
  return <h1>{t('hero.title')}</h1>;
};
```

### Interpolacion

Las traducciones soportan placeholders con la sintaxis `{variable}`:

```jsx
t('contact.validation.messageTooShort', { min: 10 })
// "El mensaje debe tener al menos 10 caracteres"
```

### Persistencia

- El idioma seleccionado se guarda en `localStorage` con la clave `buxtar-lang`.
- Se sincroniza entre pestanas del navegador mediante el evento `storage`.
- El atributo `lang` del tag `<html>` se actualiza automaticamente.

---

## Datos estaticos

Los datos de la aplicacion se encuentran en `src/data/` como arrays de objetos JavaScript.

### `services.js`

Contiene los 4 servicios principales:

| ID | Servicio |
|---|---|
| `consultoria-transformacion` | Consultoria y Transformacion Digital |
| `marketing-digital` | Marketing Digital |
| `desarrollo-software` | Desarrollo de Software |
| `formulacion-proyectos` | Formulacion de Proyectos |

Cada servicio tiene: `id`, `icon` (SVG path), `image` (ruta a imagen en `/public/images/services/`).

### `clients.js`

23 clientes con: `id`, `name`, `year`, `logo`, `sector`, `description`. Los logos se encuentran en `/public/logos/`. Sectores cubiertos: Educacion, Gobierno, Banca, Tecnologia, Medios, Salud, Gastronomia, Agroindustria, entre otros.

### `allies.js`

14 aliados estrategicos con: `id`, `name`, `logo`, `description`. Incluye entidades como Innpulsa, SENA, Minciencias, Confecamaras, CIAT, Sura, entre otros.

### `news.js`

3 noticias/actualizaciones con: `id`, `title`, `excerpt`, `date`, `category`, `image`. Las categorias incluyen Innovacion, Alianzas y Reconocimientos.

---

## Hooks personalizados

### `useFormValidation(initialValues, validationRules)`

Ubicacion: `src/hooks/useFormValidation.js`

Hook que combina validacion en tiempo real con sanitizacion de datos.

**Parametros:**
- `initialValues` - Objeto con los valores iniciales del formulario
- `validationRules` - Objeto que mapea nombres de campo a funciones validadoras

**Retorna:**
- `values` - Valores actuales del formulario
- `errors` - Errores actuales por campo
- `touched` - Campos que han sido tocados por el usuario
- `isValid` - Booleano indicando si el formulario es valido
- `handleChange` - Handler para cambios en inputs
- `handleBlur` - Handler para blur (activa validacion)
- `handleSubmit(callback)` - Handler para submit que valida, sanitiza y ejecuta el callback
- `resetForm()` - Resetea el formulario al estado inicial
- `setFieldValue(name, value)` - Establece un valor programaticamente

**Comportamiento:**
1. Al cambiar un campo que ya fue tocado, se valida en tiempo real.
2. Al hacer blur, se marca como tocado y se valida.
3. Al hacer submit, se marcan todos los campos como tocados, se validan todos, y si pasan, se sanitizan con `sanitizeFormData()` antes de llamar al callback.
4. Siempre verifica patrones de inyeccion (XSS) en cada campo.

### `useRateLimit({ maxRequests, windowMs })`

Ubicacion: `src/hooks/useRateLimit.js`

Hook que previene abuso limitando el numero de acciones en una ventana de tiempo.

**Parametros (opcionales):**
- `maxRequests` - Maximo de solicitudes permitidas (por defecto 3, configurable via `.env`)
- `windowMs` - Ventana de tiempo en milisegundos (por defecto 60000ms = 1 minuto)

**Retorna:**
- `isLimited` - Booleano indicando si el usuario esta limitado
- `remainingAttempts` - Intentos restantes en la ventana actual
- `cooldownTime` - Segundos restantes de cooldown
- `checkRateLimit()` - Funcion que retorna `true` si la accion esta permitida, `false` si no
- `resetLimit()` - Resetea el contador de intentos

---

## Utilidades

### `constants.js`

Ubicacion: `src/utils/constants.js`

Define las constantes globales de la aplicacion:

- `COMPANY` - Informacion de la empresa (nombre, logo, email, telefono, direccion, sitio web)
- `NAV_LINKS` - Array de enlaces de navegacion (7 items: Inicio, Servicios, Clientes, Aliados, Nosotros, Noticias, Contacto)
- `SOCIAL_LINKS` - Redes sociales (LinkedIn, Instagram, Facebook, Twitter)
- `STATS` - Estadisticas de la empresa (10+ anos, 100+ proyectos, 50+ clientes, 15+ aliados)
- `RATE_LIMIT` - Configuracion de rate limiting (lee de variables de entorno)

### `validation.js`

Ubicacion: `src/utils/validation.js`

Funciones de validacion reutilizables:

| Funcion | Descripcion |
|---|---|
| `validateRequired(value, fieldName)` | Valida que un campo no este vacio |
| `validateEmail(email)` | Valida formato de email (regex + longitud max 254) |
| `validateName(name)` | Valida nombre (solo letras, espacios, acentos; max 100 chars) |
| `validatePhone(phone)` | Valida telefono (opcional, formato internacional; max 20 chars) |
| `validateMessage(message, minLength)` | Valida mensaje (min 10 chars, max 2000 chars) |
| `validateNoInjection(value)` | Detecta patrones de inyeccion (`<script>`, `javascript:`, `eval()`, etc.) |
| `validateField(value, validators)` | Ejecuta multiples validadores en secuencia |

Exporta tambien `MAX_LENGTHS` y `PATTERNS` para uso externo.

### `sanitize.js`

Ubicacion: `src/utils/sanitize.js`

Funciones de sanitizacion basadas en DOMPurify:

| Funcion | Descripcion |
|---|---|
| `sanitizeInput(input)` | Elimina todo HTML y contenido peligroso |
| `sanitizeEmail(email)` | Sanitiza y limpia a caracteres validos de email |
| `sanitizePhone(phone)` | Sanitiza y limita a digitos, espacios, guiones y parentesis |
| `sanitizeFormData(formData)` | Sanitiza todos los campos de un objeto de formulario |
| `sanitizeRichText(html)` | Permite solo tags basicos de formato (b, i, em, strong, br, p, span) |

### `security.js`

Ubicacion: `src/utils/security.js`

Funciones de seguridad frontend:

| Funcion | Descripcion |
|---|---|
| `CSP_DIRECTIVES` | Objeto con directivas de Content Security Policy |
| `generateCSP(directives)` | Genera string CSP a partir de un objeto de directivas |
| `secureFetch(url, options)` | Wrapper de fetch con headers de seguridad y validacion HTTPS en produccion |
| `isAllowedDomain(url, allowedDomains)` | Verifica si una URL pertenece a un dominio permitido |
| `getExternalLinkProps(href)` | Retorna `target="_blank"` y `rel="noopener noreferrer"` para links externos |

---

## Sistema de diseno

### Paleta de colores

| Token | Valor | Uso |
|---|---|---|
| `brand-orange` | `#F68618` | Color primario, CTAs, acentos |
| `brand-orange-light` | `#F89B4D` | Hovers, gradientes |
| `brand-orange-dark` | `#D4651A` | Hovers oscuros, bordes activos |
| `brand-gray` | `#989797` | Texto secundario, bordes |
| `dark` (DEFAULT) | `#0D0D0D` | Fondo principal oscuro |
| `dark-50` a `dark-900` | Escala de grises | Superficies, tarjetas, bordes |

### Tipografia

- **Body (sans):** Apple System Font Stack: -apple-system, BlinkMacSystemFont, SF Pro Text, Inter, Segoe UI, Roboto, Helvetica Neue
- **Headings (heading):** Misma stack con SF Pro Display como prioridad
- **Web font cargada:** Inter (pesos 300-900) via Google Fonts

### CSS Custom Properties

Definidas en `:root` dentro de `src/index.css`:

```css
--color-brand-orange: #F47920;
--color-brand-orange-light: #F89B4D;
--color-brand-orange-dark: #D4651A;
--color-brand-gray: #3C3C3C;
--color-dark-bg: #0D0D0D;
--color-dark-surface: #1A1A1A;
--color-dark-card: #1F1F1F;
--color-dark-border: #2D2D2D;
```

### Clases CSS personalizadas

Definidas en las capas de Tailwind (`@layer components` y `@layer utilities`):

| Clase | Descripcion |
|---|---|
| `.glass-card` | Tarjeta con efecto glassmorphism (backdrop-blur + fondo semi-transparente) |
| `.text-gradient` | Texto con gradiente naranja |
| `.glow-orange` | Sombra naranja brillante |
| `.section-divider` | Linea horizontal naranja degradada |
| `.custom-scrollbar` | Scrollbar estilizado |
| `.bg-noise` | Overlay de textura de ruido SVG |
| `.gradient-border` | Borde con gradiente animado usando mascaras CSS |
| `.animate-float` | Animacion de flotacion vertical |
| `.logos-slide` | Animacion de scroll horizontal para carruseles de logos |

### Animaciones (Tailwind)

Configuradas en `tailwind.config.js`:

| Nombre | Duracion | Descripcion |
|---|---|---|
| `scroll` | 60s | Scroll horizontal infinito para carruseles |
| `fade-in` | 0.6s | Aparicion con opacidad |
| `slide-up` | 0.6s | Deslizamiento desde abajo |
| `slide-in-left` | 0.6s | Deslizamiento desde la izquierda |
| `slide-in-right` | 0.6s | Deslizamiento desde la derecha |
| `pulse-glow` | 2s | Pulso de sombra naranja |

---

## Configuracion de Vite

Archivo: `vite.config.js`

### Plugin

- `@vitejs/plugin-react` para Fast Refresh y transformacion JSX.

### Headers de seguridad del servidor de desarrollo

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### Build de produccion

- Source maps deshabilitados (`sourcemap: false`)
- Chunks manuales: `react` y `react-dom` se separan en un chunk `vendor` para mejor caching

---

## Configuracion de Tailwind CSS

Archivo: `tailwind.config.js`

### Content

Escanea `index.html` y todos los archivos `.js`, `.ts`, `.jsx`, `.tsx` dentro de `src/`.

### Tema extendido

- **Colores personalizados:** `brand` (orange, orange-light, orange-dark, gray) y escala `dark` (9 tonos)
- **Fuentes:** `sans` y `heading` con stack de Apple + Inter + sistema
- **Animaciones y keyframes:** 6 animaciones con sus keyframes
- **Background images:** `gradient-radial` y `hero-gradient`

### PostCSS

Archivo: `postcss.config.js`

Plugins activos:
1. `tailwindcss` - Procesa las directivas de Tailwind
2. `autoprefixer` - Agrega prefijos de navegador

---

## Seguridad

La aplicacion implementa multiples capas de seguridad frontend:

### Content Security Policy (CSP)

Definida en `index.html` como meta tag:

- `default-src 'self'` - Solo recursos del mismo origen
- `script-src 'self'` - Solo scripts propios
- `style-src 'self' 'unsafe-inline' fonts.googleapis.com` - Estilos propios + Google Fonts
- `font-src 'self' fonts.gstatic.com` - Fuentes propias + Google Fonts
- `img-src 'self' data: https:` - Imagenes propias + data URIs + HTTPS
- `frame-src 'none'` - Sin iframes
- `object-src 'none'` - Sin plugins
- `form-action 'self'` - Formularios solo al mismo origen

### Sanitizacion de inputs

- Todos los inputs del formulario de contacto se sanitizan con DOMPurify antes de enviarse.
- Se aplican sanitizadores especificos segun el tipo de campo (email, telefono, texto general).

### Validacion anti-inyeccion

- Regex que detecta patrones `<script>`, `javascript:`, `on*=`, `<iframe>`, `eval()`, `alert()`.
- Se ejecuta como primera validacion en cada campo.

### Rate limiting

- El formulario de contacto permite maximo 3 envios por minuto.
- Muestra un contador de cooldown cuando se excede el limite.

### Links externos seguros

- Todos los links externos reciben `target="_blank"` y `rel="noopener noreferrer"` automaticamente.

---

## SEO

### Meta tags estaticos (`index.html`)

- Title, description, keywords, author
- Open Graph (og:title, og:description, og:type, og:image)
- Twitter Card (summary)

### Meta tags dinamicos (React Helmet Async)

El componente `App.jsx` define meta tags que se actualizan segun el idioma seleccionado:

- `<title>` con nombre de la empresa + badge traducido
- `<meta name="description">` con la descripcion traducida
- Open Graph y Twitter tags actualizados

### Optimizaciones

- Preconnect a Google Fonts (`fonts.googleapis.com` y `fonts.gstatic.com`)
- HTML semantico (`<header>`, `<main>`, `<footer>`, `<section>`, `<nav>`)
- Atributo `lang` en `<html>` actualizado segun el idioma
- Imagenes con `loading="lazy"` en carruseles
- Alt text en todas las imagenes

---

## Variables de entorno

Archivo de referencia: `.env.example`

| Variable | Valor por defecto | Descripcion |
|---|---|---|
| `VITE_API_BASE_URL` | `https://api.example.com` | URL base de la API (para uso futuro) |
| `VITE_CONTACT_FORM_ENDPOINT` | `https://api.example.com/contact` | Endpoint del formulario de contacto |
| `VITE_RATE_LIMIT_MAX_REQUESTS` | `3` | Maximo de envios de formulario por ventana |
| `VITE_RATE_LIMIT_WINDOW_MS` | `60000` | Ventana de tiempo para rate limiting (ms) |
| `VITE_GOOGLE_MAPS_API_KEY` | - | API key de Google Maps (comentado) |
| `VITE_GA_TRACKING_ID` | - | ID de Google Analytics (comentado) |

Todas las variables con prefijo `VITE_` son accesibles en el cliente via `import.meta.env`.

---

## Linting

Archivo de configuracion: `.oxlintrc.json`

El proyecto usa OxLint (alternativa rapida a ESLint) con los siguientes plugins y reglas:

**Plugins activos:**
- `react`
- `oxc`

**Reglas:**
- `react/rules-of-hooks`: `error` - Asegura que los hooks se usen correctamente
- `react/only-export-components`: `warn` - Advierte si se exporta algo que no sea un componente (con excepcion para exports constantes)

Ejecutar con: `npm run lint`

---

## Assets publicos

### `/public/logos/`

Contiene los logos de la empresa, clientes y aliados. Formatos: PNG, JPG. Se referencian directamente con rutas absolutas (ejemplo: `/logos/logo-buxtar-200.png`).

Logos principales de la empresa:
- `logo-buxtar-200.png` - Logo estandar
- `logo-buxtar-200blank.png` - Logo en blanco

### `/public/images/services/`

Imagenes de fondo para cada tarjeta de servicio:
- `consultoria.png`
- `marketing.png`
- `software.png`
- `proyectos.png`

### `/public/logosapps/`

Logos de aplicaciones desarrolladas por Buxtar (ApuestaleALaPaz, agendacafetera, conexcoffe, endiosconfio, heroesporlapaz, heroican).

---

## Despliegue

### Build de produccion

```bash
npm run build
```

Genera la carpeta `dist/` con los archivos optimizados. El output incluye:
- Chunk `vendor` separado (React + ReactDOM) para mejor caching
- Sin source maps
- Assets con hash en el nombre para cache busting

### Preview local

```bash
npm run preview
```

Sirve el contenido de `dist/` en un servidor local para verificar el build antes de desplegar.

### Plataformas compatibles

El proyecto puede desplegarse en cualquier plataforma de hosting estatico:
- Vercel
- Netlify
- GitHub Pages (requiere configuracion adicional para SPA)
- AWS S3 + CloudFront
- Firebase Hosting

Para plataformas SPA, asegurar que todas las rutas redirigen a `index.html` (configuracion de fallback/rewrite).
