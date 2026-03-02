import type { Meta, StoryObj } from '@storybook/vue3';
import BasePassword from '../components/atoms/BasePassword.vue';

const meta: Meta<typeof BasePassword> = {
  title: 'Atoms/BasePassword',
  component: BasePassword,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  }
} satisfies Meta<typeof BasePassword>;

export default meta;
type Story = StoryObj<typeof BasePassword>;

export const Default: Story = {
  args: {
    label: 'Contraseña',
    modelValue: '',
    feedback: false,
    toggleMask: true,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Contraseña',
    modelValue: '',
    feedback: true,
    toggleMask: true,
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Contraseña',
    modelValue: '123',
    error: 'La contraseña es demasiado corta',
  },
};