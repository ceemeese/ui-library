import type { Meta, StoryObj } from '@storybook/vue3';
import BaseCard from '../components/atoms/BaseCard.vue';

const meta: Meta<typeof BaseCard> = {
  title: 'Atoms/BaseCard',
  component: BaseCard,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text', description: 'Clase de ancho de Tailwind' },
    height: { control: 'text', description: 'Clase de alto de Tailwind' },
    padding: { control: 'text', description: 'Clase de padding interno' },
    borderRounded: { control: 'text', description: 'Radio de las esquinas' },
  },
};

export default meta;
type Story = StoryObj<typeof BaseCard>;

export const Default: Story = {
  args: {
    
  },
  render: (args) => ({
    components: { BaseCard },
    setup() { return { args }; },
    template: `
      <div class="p-10 bg-gray-50 h-[400px]">
        <BaseCard v-bind="args">
          <h2 class="font-bold text-xl">Contenido de ejemplo</h2>
          <p class="text-gray-500">Esta es la card con sus valores por defecto (Full Width/Height).</p>
        </BaseCard>
      </div>
    `,
  }),
};


export const ProfileStyle: Story = {
  args: {
    width: 'ui:max-w-md',
    height: 'ui:h-auto',
    padding: 'ui:p-6',
  },
  render: (args) => ({
    components: { BaseCard },
    setup() { return { args }; },
    template: `
      <div class="p-10 bg-gray-50 flex justify-center">
        <BaseCard v-bind="args">
          <div class="flex flex-col items-center gap-4">
            <div class="w-20 h-20 bg-black rounded-full"></div>
            <h3 class="font-bold">Admin Usuario</h3>
            <p class="text-sm text-center text-gray-400">Configura tus datos personales aquí.</p>
          </div>
        </BaseCard>
      </div>
    `,
  }),
};


export const GlassEffect: Story = {
  args: {
    blurAmount: 'ui:backdrop-blur-md',
    padding: 'ui:p-10'
  },
  render: (args) => ({
    components: { BaseCard },
    setup() { return { args }; },
    template: `
      <div class="p-20 bg-gradient-to-tr from-blue-500 to-purple-500 h-[300px]">
        <BaseCard v-bind="args" class="ui:!bg-white/70">
          <p class="font-semibold">Efecto Glassmorphism</p>
          <p class="text-sm">Layouts coloridos</p>
        </BaseCard>
      </div>
    `,
  }),
};