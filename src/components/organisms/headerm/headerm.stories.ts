import type { Meta, StoryObj } from '@storybook/vue3';
import HeaderM from './HeaderM.vue';

const meta: Meta<typeof HeaderM> = {
  title: 'Organisms/HeaderM',
  component: HeaderM,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },

  decorators: [() => ({ 
    template: '<div class="ui:min-h-[120vh] ui:bg-gray-50"><story /></div>' 
  })],
};

export default meta;
type Story = StoryObj<typeof HeaderM>;

//con scroll
export const ScrollDefault: Story = {
  args: {
    loginLabel: 'Entrar',
    registerLabel: 'Registrarse',
    navigationItems: [
      { title: 'Home', to: '/', icon: 'pi pi-home' },
      { title: 'Users', to: '/users', icon: 'pi pi-user' },
    ],
  }
};

//sin scroll
export const DefaultStyle: Story = {
  args: {
    ...ScrollDefault.args,
    maxWidth: 'ui:max-w-5xl',
    blurAmount: 'ui:backdrop-blur-xl',
  },
  render: (args) => ({
    components: { HeaderM },
    setup() { return { args }; },
    template: `
      <HeaderM v-bind="args">
        <template #logo>
          <div class="ui:flex ui:items-center ui:gap-2">
            <i class="pi pi-bolt ui:text-primary"></i>
            <span class="ui:font-bold">LOGO</span>
          </div>
        </template>
      </HeaderM>
    `
  })
};

//sin navegacion
export const Simple: Story = {
  args: {
    ...ScrollDefault.args,
    navigationItems: [],
  }
};