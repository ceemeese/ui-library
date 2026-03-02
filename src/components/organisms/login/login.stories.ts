import type { Meta, StoryObj } from '@storybook/vue3';
import LoginForm from '../login/LoginForm.vue';

const meta: Meta<typeof LoginForm> = {
  title: 'Organisms/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  // Usamos un decorator para que el formulario no flote en la nada
  decorators: [() => ({ template: '<div style="max-width: 450px; margin: 2rem auto;"><story/></div>' })],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  render: (args) => ({
    components: { LoginForm },
    setup() {
      //funcion para ver que llega cuando el formulario es valido
      const handleSubmit = (values: any) => {
        alert('Formulario válido enviado: ' + JSON.stringify(values, null, 2));
      };
      return { args, handleSubmit };
    },
    template: '<LoginForm @submit="handleSubmit" />',
  }),
};