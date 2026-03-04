import type { Meta, StoryObj } from '@storybook/vue3';
import Header from '../header/Header.vue'

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    navigationItems: [
      { title: 'Inicio', to: { name: 'home' } },
      { title: 'Usuarios', to: { name: 'users' } },
      { title: 'Clubs', to: { name: 'club' } },
      { title: 'Contacto', to: { name: 'contact' } },
    ],
  },
  render: (args) => ({
    components: { Header },
    setup() {
      return { args };
    },
    template: `
      <div style="height: 150vh; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);">
    <Header v-bind="args">
      <template #logo>
        <span class="text-2xl font-black bg-gradient-to-r from-emerald-600 to-teal-400 bg-clip-text text-transparent">
          VOLEAPP
        </span>
      </template>
    </Header>
    <div style="padding: 100px 20px; text-align: center; color: #64748b;">
      <h1 class="text-4xl font-bold">Header cambia al hacer scroll</h1>
    </div>
  </div>
    `,
  }),
};