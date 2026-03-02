import type { Meta, StoryObj } from '@storybook/vue3';
import BaseInput from '../components/atoms/BaseInput.vue';

const meta: Meta<typeof BaseInput> = {
  title: 'Atoms/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'email', 'number'] },
  },
} satisfies Meta<typeof BaseInput>;

export default meta;
type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {
  args: {
    label: 'Nombre de Usuario',
    placeholder: 'Ej. juan_voleapp',
    modelValue: '',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Contraseña',
    type: 'password',
    icon: 'pi-lock',
    placeholder: "********",
    modelValue: '',
  },
};

export const Invalid: Story = {
  args: {
    label: 'Email',
    modelValue: 'correo-no-valido',
    error: 'El formato del correo es incorrecto',
  },
};