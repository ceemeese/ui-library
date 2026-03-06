import { setup } from '@storybook/vue3';
import { createRouter, createWebHistory } from 'vue-router';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/Aura';
import '../src/style.css';
import { definePreset } from '@primevue/themes';
import type { Preview } from '@storybook/vue3-vite'
import '../src/assets/main.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: { render: () => null } },
    { path: '/login', name: 'login', component: { render: () => null } },
    { path: '/users', name: 'users', component: { render: () => null } },
    { path: '/club', name: 'club', component: { render: () => null } },
    { path: '/contact', name: 'contact', component: { render: () => null } },
    { path: '/register', name: 'register', component: { render: () => null } },
    { path: '/profile', name: 'profile', component: { render: () => null } },
  ],
});


const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{teal.50}',
            100: '{teal.100}',
            200: '{teal.200}',
            300: '{teal.300}',
            400: '{teal.400}',
            500: '{teal.500}',
            600: '{teal.600}',
            700: '{teal.700}',
            800: '{teal.800}',
            900: '{teal.900}',
            950: '{teal.950}',
            color: '{primary.500}',
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{red.50}',
                    100: '{slate.100}',
                    200: '{slate.200}',
                    300: '{slate.300}',
                    400: '{slate.400}',
                    500: '{slate.500}',
                    600: '{slate.600}',
                    700: '{slate.700}',
                    800: '{slate.800}',
                    900: '{slate.900}',
                    950: '{slate.950}'
                },
                highlight: {
                    background: '{primary.50}',
                    color: '{primary.700}',
                }
            },
            dark: {
                surface: {
                    0: '#18181b',
                    50: '{zinc.50}',
                    100: '{zinc.100}',
                    200: '{zinc.200}',
                    300: '{zinc.300}',
                    400: '{zinc.400}',
                    500: '{zinc.500}',
                    600: '{zinc.600}',
                    700: '{zinc.700}',
                    800: '{zinc.800}',
                    900: '{zinc.900}',
                    950: '{zinc.950}'
                },
                highlight: {
                    background: '{primary.200}',
                    color: '{primary.900}',
                }
            },
        },
    }
});

setup((app) => {
app.use(router);
  app.use(PrimeVue, { 
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: false,
            cssLayer: false
        }
    }
  });

});



const preview: Preview = {
  parameters: {
      layout: 'centered',

      controls: {
        matchers: {
         color: /(background|color)$/i,
         date: /Date$/i,
        },
      },

      backgrounds: {
        default: 'light',
        values: [
          {
            name: 'light',
            value: '#f5f5f5',
          },
          {
            name: 'dark',
            value: '#1a1a1a',
          },
        ],
      },

      a11y: {
          // 'todo' - show a11y violations in the test UI only
          // 'error' - fail CI on a11y violations
          // 'off' - skip a11y checks entirely
          test: 'todo'
      }
  },
};

export default preview;