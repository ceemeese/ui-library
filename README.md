# UI Library

Librería de componentes Vue 3 reutilizables de VoleApp. Encapsula la capa visual común (formularios, tablas, calendarios, cabeceras, tarjetas…) sobre [PrimeVue](https://primevue.org/) y [Tailwind CSS](https://tailwindcss.com/), y la expone como paquete instalable y consumible por el [frontend de VoleApp](../voleapp-frontend).

El objetivo es separar el **diseño/componentes** de la **lógica de negocio**: la app se centra en datos y flujos, y la librería en la presentación coherente y reutilizable.

## Tecnologías

- **[Vue 3](https://vuejs.org/)** (`<script setup>`) — componentes
- **[Vite](https://vite.dev/)** en modo *library* — empaquetado (ES / CJS / UMD)
- **[TypeScript](https://www.typescriptlang.org/)** + **[vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts)** — tipos (`.d.ts`)
- **[PrimeVue 4](https://primevue.org/)** — base de los componentes (peer dependency)
- **[Tailwind CSS 4](https://tailwindcss.com/)** — estilos (compilados aparte a `dist/styles.css`)
- **[Zod](https://zod.dev/)** — tipado/validación de formularios
- **[Storybook 10](https://storybook.js.org/)** — catálogo y desarrollo aislado de componentes
- **[Vitest](https://vitest.dev/)** + **[Playwright](https://playwright.dev/)** — tests de componentes/historias

## Arquitectura (Atomic Design)

Los componentes se organizan siguiendo *Atomic Design*:

```
src/
├── components/
│   ├── atoms/       # piezas básicas: BaseInput, BaseButton, BasePassword,
│   │                #   BaseCard, BaseDatePicker, BaseDateSelector,
│   │                #   BaseInfoField, BaseGroupedItem, BasePill
│   └── organisms/   # bloques compuestos: LoginForm, RegisterForm,
│                    #   ForgotPasswordForm, ResetPasswordForm, Header, HeaderM,
│                    #   Navbar, NavbarMobile, Footer, NavUserCard,
│                    #   UserCardProfile, BaseDataTable, BaseDialog, ConfirmCard,
│                    #   ScheduleManager, EventCalendar, GroupedList
├── types/           # tipos públicos (forms, datatable, navigation)
├── utils/           # utilidades
└── index.ts         # punto de entrada: exports + plugin de instalación
```

### Punto de entrada (`src/index.ts`)

Expone tres cosas:

1. **Exportación individual** de cada componente (`import { LoginForm } from 'ui'`).
2. **Exportación de tipos** (`LoginValues`, `ColumnConfig`, `ActionColumn`, `BaseInputProps`, `CalendarEvent`…).
3. Un **plugin por defecto** (`UILibrary`) que registra todos los componentes globalmente de una vez con `app.use(UILibrary)`.

## Build y empaquetado

La librería se compila con Vite en modo *library*:

```bash
npm run build
```

Esto genera en `dist/`:

- `ui.es.js`, `ui.cjs.js`, `ui.umd.js` — los *bundles* (según formato de import).
- `index.d.ts` y tipos — declaraciones TypeScript (vía `vite-plugin-dts`).
- `styles.css` — los estilos de Tailwind compilados (paso `build:css`, independiente del JS).

`vue`, `vue-router` y todo el ecosistema PrimeVue/PrimeIcons son **peer dependencies** y se marcan como `external`: no se empaquetan, los aporta la app anfitriona. Así se evita duplicar Vue/PrimeVue y los problemas de contexto que eso conlleva.

> Los artefactos de `dist/` se versionan en el repositorio, de modo que el frontend pueda instalar la librería directamente desde GitHub sin necesidad de compilarla en cada instalación.

## Desarrollo con Storybook

Storybook es el entorno para desarrollar y revisar los componentes de forma aislada (hay ~25 historias):

```bash
npm run storybook          # arranca Storybook en http://localhost:6006
npm run build-storybook    # build estático del catálogo
```

## Scripts

| Script | Descripción |
|--------|-------------|
| `npm run build` | Compila tipos + bundles + CSS a `dist/` |
| `npm run build:css` | Compila solo el CSS de Tailwind a `dist/styles.css` |
| `npm run dev` | Servidor Vite de la librería |
| `npm run storybook` | Catálogo de componentes (desarrollo) |
| `npm run build-storybook` | Build estático de Storybook |

## Uso desde una aplicación

Instalación (en el frontend ya está declarada como `"ui": "github:ceemeese/ui-library"`):

```bash
npm install github:ceemeese/ui-library
```

Registro global (plugin) e importación de estilos:

```ts
import { createApp } from 'vue';
import UILibrary from 'ui';
import 'ui/style.css';
import App from './App.vue';

createApp(App).use(UILibrary).mount('#app');
```

O importación individual de un componente / tipo:

```ts
import { LoginForm } from 'ui';
import type { LoginValues } from 'ui';
```

> **Requisito**: la app anfitriona debe tener instaladas las *peer dependencies* (Vue, PrimeVue, etc.) y haber configurado PrimeVue, ya que la librería se apoya en ellas. Conviene además deduplicar `vue` y `primevue` en la app para garantizar una única instancia compartida.

## Relación con el resto del proyecto

```
ui-library  ──(build → dist/, publicado en GitHub)──►  voleapp-frontend  ──►  voleapp-backend (API REST)
```

- `ui-library` aporta los componentes visuales.
- `voleapp-frontend` los consume (plugin + auto-import) y añade la lógica de negocio, el estado y las llamadas a la API.
- `voleapp-backend` expone la API REST que alimenta al frontend.

### Flujo de trabajo al cambiar la librería

1. Modificar/crear componentes en `ui-library` (probar en Storybook).
2. `npm run build` para regenerar `dist/`.
3. Commit y push a GitHub (el `dist/` versionado).
4. En `voleapp-frontend`, reinstalar/actualizar la dependencia `ui` para traer la nueva versión.
