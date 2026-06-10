// Navbar.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3';
import NavbarMobile from './NavbarMobile.vue';

const meta: Meta<typeof NavbarMobile> = {
    title: 'Organisms/NavbarMobile',
    component: NavbarMobile,
    tags: ['autodocs'],
    argTypes: {
       
    },
};

export default meta;
type Story = StoryObj<typeof NavbarMobile>;


export const SuperAdminGlobal: Story = {
    args: {
       
    },
};


export const ClubAdmin: Story = {
    args: {
       
    },
};