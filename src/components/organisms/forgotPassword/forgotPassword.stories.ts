import type { Meta, StoryObj } from '@storybook/vue3';
import ForgotPasswordForm from './ForgotPasswordForm.vue';

const meta: Meta<typeof ForgotPasswordForm> = {
  title: 'Organisms/ForgotPasswordForm',
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="max-width: 450px; margin: 2rem auto;"><story/></div>' })],
} satisfies Meta<typeof ForgotPasswordForm>;

export default meta;
type Story = StoryObj<typeof ForgotPasswordForm>;

export const Default: Story = {
    args: {
    backRoute: 'back-route',
    loading: true,
  },
  render: (args) => ({
    components: { ForgotPasswordForm },
    setup() {
      const handleSubmit = (values: any) => {
        alert('Formulario de recuperación enviado: ' + JSON.stringify(values, null, 2));
      };
      return { args, handleSubmit };
    },
    template: '<ForgotPasswordForm v-bind="args" @submit="handleSubmit" />',
  }),
};


export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
};

export const Normal: Story = {
  args: {
    ...Default.args,
    loading: false,
  },
};