import type { Meta, StoryObj } from '@storybook/vue3';
import Dialog from "./BaseDialog.vue";

const meta: Meta<typeof Dialog> = {
  title: 'Organisms/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    labelButton: { control: 'text' },
    header: { control: 'text' },
    subtitle: { control: 'text' }
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const EditUser: Story = {
    args: {
        labelButton: 'Editar usuario',
        icon: 'pi pi-pencil',
        header: 'Información de perfil',
        subtitle: 'Modifica los datos de usuario seleccionado',
        modelValue: {
            Nombre: 'Cristina',
            Email: 'test@mail.com',
            Teléfono: '666666666'
        },
        inputsDialog: [
            { field: 'name', label: 'Nombre', icon: 'pi pi-user' },
            { field: 'email', label: 'Email', icon: 'pi pi-envelope', type: 'email' },
            { field: 'phoneNumber', label: 'Teléfono', icon: 'pi pi-phone' },
        ]
    }
};

export const CreateAccount: Story = {
  args: {
    labelButton: 'Nuevo Registro',
    icon: 'pi pi-user-plus',
    header: 'Crear Cuenta',
    subtitle: 'Completa los campos para dar de alta un nuevo miembro',
    modelValue: {},
    inputsDialog: [
      { field: 'username', label: 'Username', icon: 'pi pi-at', placeholder: 'usuario123' },
      { field: 'password', label: 'Password', icon: 'pi pi-lock', type: 'password' },
      { field: 'password', label: 'Confirmar Password', icon: 'pi pi-shield', type: 'password' }
    ]
  }
};


export const WithErrors: Story = {
  args: {
    labelButton: 'Ver Errores',
    header: 'Validación de Datos',
    modelValue: { Email: 'correo-incorrecto' },
    inputsDialog: [
      { 
        field: 'email',
        label: 'Email', 
        icon: 'pi pi-envelope', 
        error: 'El formato del correo electrónico no es válido' 
      }
    ]
  }
};