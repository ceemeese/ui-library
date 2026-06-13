import type { Meta, StoryObj } from '@storybook/vue3';
import ResetPasswordForm from './ResetPasswordForm.vue';

const meta: Meta<typeof ResetPasswordForm> = {
  title: 'Organisms/ResetPasswordForm',
  component: ResetPasswordForm,
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="max-width: 450px; margin: 2rem auto;"><story/></div>' })],
} satisfies Meta<typeof ResetPasswordForm>;

export default meta;
type Story = StoryObj<typeof ResetPasswordForm>;

export const Default: Story = {
    args: {
    loading: true,
  },
  render: (args) => ({
    components: { ResetPasswordForm },
    setup() {
      const handleSubmit = (values: any) => {
        alert('Nueva contraseñ creada: ' + JSON.stringify(values, null, 2));
      };
      return { args, handleSubmit };
    },
    template: '<ResetPasswordForm v-bind="args" @submit="handleSubmit" />',
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