import type { Meta, StoryObj } from '@storybook/vue3';
import BaseButton from '../../atoms/BaseButton.vue';
import UserCardProfile from './UserCardProfile.vue';


const meta: Meta<typeof UserCardProfile> = {
  title: 'Organisms/UserCardProfile',
  component: UserCardProfile,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['normal', 'large', 'xlarge'],
      description: 'Tamaño del Avatar (PrimeVue)',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Forma del Avatar',
    },
    onEdit: { action: 'edit' },
  },
};

export default meta;
type Story = StoryObj<typeof UserCardProfile>;


export const Default: Story = {
  args: {
    title: 'Información de Usuario',
    mainText: 'Cristina Malmierca',
    subtext: '@cristina_app',
    image: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    size: 'xlarge',
    shape: 'circle',
  },
};


export const WithInitials: Story = {
  args: {
    title: 'Perfil de Jugador',
    mainText: 'Cristina Malmierca',
    subtext: '@cmalmierca_voleapp',
    initials: 'CM',
    size: 'xlarge',
    shape: 'circle',
  },
};


export const FullProfile: Story = {
  render: (args) => ({
    components: { UserCardProfile, BaseButton },
    setup() {
      return { args };
    },
    template: `
      <UserCardProfile v-bind="args">
        <template #extra-info>
          <div style="display: flex; flex-direction: column; color: #64748b;">
            <span><i class="pi pi-envelope"></i> cristina@voleapp.com</span>
            <span><i class="pi pi-phone"></i> +34 600 000 000</span>
          </div>
        </template>
        <template #actions>
          <BaseButton icon="pi pi-user-edit" @click="args.onEdit" rounded/>
        </template>
      </UserCardProfile>
    `,
  }),
  args: {
    ...Default.args,
    title: 'Mi Cuenta',
  },
};