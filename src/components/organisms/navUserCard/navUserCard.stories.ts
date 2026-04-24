import type { Meta, StoryObj } from '@storybook/vue3';
import NavUserCard from './NavUserCard.vue';

const meta: Meta<typeof NavUserCard> = {
  title: 'Organisms/NavUserCard',
  component: NavUserCard,
  tags: ['autodocs'],
  argTypes: {
    username: { control: 'text' },
    userRole: { control: 'text' },
    onLogout: { action: 'logout clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof NavUserCard>;


export const Default: Story = {
  args: {
    username: 'Cris Malmierca',
    userRole: 'Admin',
  },
};


export const LongName: Story = {
  args: {
    username: 'Alejandro Rodriguez de la Fuente de la Vega',
    userRole: 'Club Manager',
  },
};


export const StandardUser: Story = {
  args: {
    username: 'Juan Pérez',
    userRole: 'Member',
  },
};