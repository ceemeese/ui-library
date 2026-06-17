import type { Meta, StoryObj } from '@storybook/vue3';
import ConfirmEmailCard from './ConfirmEmailCard.vue';

const meta: Meta<typeof ConfirmEmailCard> = {
  title: 'Organisms/ConfirmEmailCard',
  component: ConfirmEmailCard,
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="max-width: 450px; margin: 2rem auto;"><story/></div>' })],
} satisfies Meta<typeof ConfirmEmailCard>;

export default meta;
type Story = StoryObj<typeof ConfirmEmailCard>;

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
    components: { ConfirmEmailCard },
    setup() {
      const handleGoTo = () => alert('Navegar al login');
      return { args, handleGoTo };
    },
    template: '<ConfirmEmailCard v-bind="args" @go-to="handleGoTo" />',
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
    components: { ConfirmEmailCard },
    setup() {
      const handleBack = () => alert('Navegar atrás');
      return { args, handleBack };
    },
    template: '<ConfirmEmailCard v-bind="args" @back="handleBack" />',
  }),
};
