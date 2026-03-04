import type { Meta, StoryObj } from '@storybook/vue3';
import Footer from '../footer/Footer.vue'

const meta: Meta<typeof Footer> = {
  title: 'Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    titleLogo: 'Logo',
    navigationItems: [
      { title: 'Inicio', to: { name: 'home' } },
      { title: 'Usuarios', to: { name: 'users' } },
      { title: 'Clubs', to: { name: 'club' } },
      { title: 'Contacto', to: { name: 'contact' } },
    ],
  },
  render: (args) => ({
    components: { Footer },
    setup() {
      return { args };
    },
    template: `
      <div style="height: 150vh; background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);">
        <Footer v-bind="args"></Footer>
    </div>
    `,
  }),
};