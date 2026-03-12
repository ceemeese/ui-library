import type { Meta, StoryObj } from '@storybook/vue3';
import RegisterForm from '../register/RegisterForm.vue'

const meta: Meta<typeof RegisterForm> = {
  title: 'Organisms/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="max-width: 450px; margin: 2rem auto;"><story/></div>' })],
} satisfies Meta<typeof RegisterForm>;

export default meta;
type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  render: (args) => ({
    components: { RegisterForm },
    setup() {
      const handleSubmit = (values: any) => {
        alert('Formulario válido enviado: ' + JSON.stringify(values, null, 2));
      };
      return { args, handleSubmit };
    },
    template: '<RegisterForm @submit="handleSubmit" />',
  }),
};