import type { Meta, StoryObj } from '@storybook/vue3';
import BaseButton from '../components/atoms/BaseButton.vue';

const meta: Meta<typeof BaseButton> = {
  title: 'Atoms/BaseButton',
  component: BaseButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'large'] },
    variant: { control: 'select', options: ['text', 'outlined', 'link'] },
  }
} satisfies Meta<typeof BaseButton>;

export default meta;
type Story = StoryObj<typeof BaseButton>;

export const Default: Story = {
  args: {
    label: 'Botón Principal',
  },
};

export const OutlinedWithIcon: Story = {
  args: {
    label: 'Enviar',
    variant: 'outlined',
    icon: 'pi pi-send',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Botón Outlined',
    variant: 'outlined',
  },
};

export const Text: Story = {
  args: {
    label: 'Botón de Texto',
    variant: 'text',
  },
};
