import type { Meta, StoryObj } from '@storybook/vue3';
import BaseInput from '../components/atoms/BaseInput.vue';

const meta: Meta<typeof BaseInput> = {
  title: 'Atoms/BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select', 
      options: ['text', 'password', 'email', 'number', 'boolean', 'select', 'time', 'date'] 
    },
    options: { control: 'object'}
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

export const BooleanType : Story = {
  args: {
    label: 'Es socio?',
    type: 'boolean',
    modelValue: true,
  }
}

export const SelectType: Story = {
  args: {
    label: 'Rol del usuario',
    type: 'select',
    modelValue: 1,
    options: [
      { name: 'Administrador', id: 1 },
      { name: 'Entrenador', id: 2 },
      { name: 'Jugador', id: 3 },
    ],
    optionLabel: 'name',
    optionValue: 'id',
    placeholder: 'Selecciona un rol'
  },
};


export const TimeType: Story = {
  args: {
    label: 'Apertura',
    type: 'time',
    modelValue: new Date(),
  },
};

export const DateType: Story = {
  args: {
    label: 'Fecha de evento',
    type: 'date',
    modelValue: new Date(),
  },
};