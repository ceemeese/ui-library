import type { Meta, StoryObj } from '@storybook/vue3';
import ConfirmCard from './ConfirmCard.vue';

const meta: Meta<typeof ConfirmCard> = {
  title: 'Organisms/ConfirmEmailCard',
  component: ConfirmCard,
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="max-width: 450px; margin: 2rem auto;"><story/></div>' })],
} satisfies Meta<typeof ConfirmCard>;

export default meta;
type Story = StoryObj<typeof ConfirmCard>;

export const Loading: Story = {
  args: {
    status: 'loading',
  },
};

export const Success: Story = {
  args: {
    status: 'success',
    titleMessage: '¡Email confirmado!',
    messageConfirmation: 'Tu cuenta está activa. Ya puedes iniciar sesión',
    returnLabel: 'Ir al inicio de sesión',
    iconButtonSuccess: 'pi pi-sign-in',
  },
  render: (args) => ({
    components: { ConfirmCard },
    setup() {
      const handleGoTo = () => alert('Navegar al login');
      return { args, handleGoTo };
    },
    template: '<ConfirmCard v-bind="args" @go-to="handleGoTo" />',
  }),
};

export const Error: Story = {
  args: {
    status: 'error',
    errorTitle: 'Enlace no válido',
    errorMessage: 'El enlace de confirmación no es válido o ha expirado.',
    backLabel: 'Volver al inicio de sesión',
  },
  render: (args) => ({
    components: { ConfirmCard },
    setup() {
      const handleBack = () => alert('Navegar atrás');
      return { args, handleBack };
    },
    template: '<ConfirmCard v-bind="args" @back="handleBack" />',
  }),
};
