import type { Meta, StoryObj } from '@storybook/vue3';
import MyButton from './CustomButton.vue'; // Asegúrate de que la ruta sea correcta

const meta: Meta<typeof MyButton> = {
  title: 'Components/Buttons/SubmitCenter', // Dónde aparecerá en el menú lateral
  component: MyButton,
  tags: ['autodocs'],
  // Este decorador añade un poco de espacio alrededor en Storybook
  decorators: [
    () => ({
      template: '<div style="padding: 3rem;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof MyButton>;

// Historia por defecto
export const Default: Story = {};

// Si quieres ver cómo queda en un fondo oscuro (si tienes configurado dark mode)
export const OnDarkBackground: Story = {
  globals: {
    backgrounds: {
      value: "dark"
    }
  },
};