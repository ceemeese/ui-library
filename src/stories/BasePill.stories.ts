import type { Meta, StoryObj } from '@storybook/vue3';
import BasePill from '../components/atoms/BasePill.vue';

const meta: Meta<typeof BasePill> = {
  title: 'Atoms/BasePill',
  component: BasePill,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',

      options: ['info', 'success', 'inactive', 'error', 'warning', 'secondary'],
      description: 'Determina la combinación de colores (fondo, texto y borde) de la píldora.',
      table: {
        defaultValue: { summary: 'info' },
      },
    },
    text: {
      control: 'text',
      description: 'El texto que se mostrará dentro de la píldora (se fuerza a mayúsculas automáticamente)',
    },
    icon: {
      control: 'text',
      description: 'Clase de PrimeIcons para renderizar un icono opcional al inicio (ej: "pi pi-verified")',
    },
    size: {
      control: 'inline-radio',
      options: ['small', 'normal'],
      description: 'Controla el tamaño y espaciado de la píldora',
      table: {
        defaultValue: { summary: 'small' },
      },
    },
    dot: {
      control: 'boolean',
      description: 'Muestra u oculta el indicador circular dinámico antes del texto',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof BasePill>;

export default meta;
type Story = StoryObj<typeof BasePill>;

export const Default: Story = {
  args: {
    text: 'Info Pill',
    type: 'info',
  },
};


export const Socio: Story = {
  args: {
    text: 'Socio',
    type: 'info',
    icon: 'pi pi-verified',
  },
};


export const WithDot: Story = {
  args: {
    text: 'En directo',
    type: 'success',
    dot: true,
  },
};

export const NormalSize: Story = {
  args: {
    text: 'Ficha Completa',
    type: 'secondary',
    size: 'normal',
    icon: 'pi pi-info-circle',
  },
};


export const AllVariants: Story = {
  render: (args) => ({
    components: { BasePill },
    setup() {
      const types = ['info', 'success', 'inactive', 'error', 'warning', 'secondary'] as const;
      const icons: Record<typeof types[number], string> = {
        info: 'pi pi-verified',       
        success: 'pi pi-check-circle',
        inactive: 'pi pi-minus-circle',
        error: 'pi pi-times-circle',
        warning: 'pi pi-exclamation-triangle',
        secondary: 'pi pi-cog'
      };
      return { types, icons, args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-slate-400 w-24 font-mono">Sin elementos:</span>
          <BasePill v-for="t in types" :key="t" :type="t" :text="t" />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-slate-400 w-24 font-mono">Con Dot:</span>
          <BasePill v-for="t in types" :key="t" :type="t" :text="t" dot />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-slate-400 w-24 font-mono">Size Normal:</span>
          <BasePill v-for="t in types" :key="t" :type="t" :text="t" size="normal" />
        </div>
        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-xs text-slate-400 w-24 font-mono">Con Icono:</span>
          <BasePill 
            v-for="t in types" 
            :key="t" 
            :type="t" 
            :text="t" 
            :icon="icons[t]" 
            size="small" 
          />
        </div>
      </div>
    `,
  }),
};