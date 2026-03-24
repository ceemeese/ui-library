import type { Meta, StoryObj } from '@storybook/vue3';
import BaseInfoField from '../components/atoms/BaseInfoField.vue';

const meta: Meta<typeof BaseInfoField> = {
  title: 'Atoms/BaseInfoField',
  component: BaseInfoField,
  tags: ['autodocs'],
  argTypes: {
    icon: { 
      control: 'text', 
      description: 'Icono de PrimeIcons (ej: pi-user)' 
    },
  },
};

export default meta;
type Story = StoryObj<typeof BaseInfoField>;


export const Default: Story = {
  args: {
    label: 'Email',
    value: 'usuario@mail.com',
    icon: 'pi pi-envelope',
  },
};


export const Empty: Story = {
  args: {
    label: 'Teléfono',
    value: undefined,
    icon: 'pi pi-phone',
  },
};


export const LongValue: Story = {
  args: {
    label: 'Identificación Especial',
    value: 'ESTO-ES-UN-CODIGO-MUY-LARGO-QUE-PODRIA-ROMPER-EL-DISEÑO',
    icon: 'pi pi-id-card',
  },
};