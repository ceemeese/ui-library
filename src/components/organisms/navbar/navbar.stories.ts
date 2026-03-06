import type { Meta, StoryObj } from '@storybook/vue3';
import Navbar from '../navbar/Navbar.vue'

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navigation/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const AdminDashboard: Story = {
  args: {
    username: 'Cris Admin',
    userRole: 'Administrador',
    navigationItems: [
      {
        label: 'Principal',
        items: [
          { label: 'Dashboard', icon: 'pi pi-chart-bar', to: { name: 'home' }},
          { label: 'Usuarios', icon: 'pi pi-users', to: { name: 'users' } }
        ]
      },
      {
        label: 'Configuración',
        items: [
          { label: 'Ajustes', icon: 'pi pi-cog', to: { name: 'home' } },
          { label: 'Roles', icon: 'pi pi-shield', to: { name: 'users' } }
        ]
      }
    ],
  },
};