import type { Meta, StoryObj } from '@storybook/vue3';
import BaseGroupedItem from '../components/atoms/BaseGroupedItem.vue';
import { BaseCard, BaseButton } from 'ui';

const meta: Meta<typeof BaseGroupedItem> = {
  title: 'Atoms/BaseGroupedItem',
  component: BaseGroupedItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BaseGroupedItem>;

export const PadelClubRow: Story = {
  args: {
    title: 'Pádel Center Victoria',
    subtitle: 'Calle Mayor, 12, Madrid',
    items: [
      { id: 101, name: 'Pista 1 (Cristal)', time: '17:00', price: 20, type: 'Indoor', duration: 90 },
      { id: 102, name: 'Pista 2 (Muro)', time: '18:30', price: 15, type: 'Outdoor', duration: 60 },
      { id: 103, name: 'Pista 3 (Cristal)', time: '20:00', price: 20, type: 'Indoor', duration: 90 },
      { id: 104, name: 'Pista 5 (Cristal)', time: '21:30', price: 18, type: 'Indoor', duration: 90 },
    ],
  },
  render: (args) => ({
    components: { BaseGroupedItem, BaseCard, BaseButton },
    setup() { return { args }; },
    template: `
      
      <div class="ui:bg-slate-50 ui:p-8">
        <BaseGroupedItem v-bind="args">
          
          <!-- Acción de cabecera: Badge de disponibilidad -->
          <template #header-action="{ count }">
             <span class="ui:px-4 ui:py-2 ui:bg-[#C8E794] ui:text-[#344533] ui:text-xs ui:font-black ui:rounded-full ui:uppercase">
               {{ count }} Horarios disponibles
             </span>
          </template>

          
          <template #card="{ item: court }">
            <BaseCard class="ui:min-w-[240px] ui:!shadow-md ui:hover:!shadow-xl ui:hover:!border-[#C8E794] ui:transition-all ui:duration-300 ui:group ui:cursor-pointer ui:p-4">
              <div class="ui:flex ui:justify-between ui:items-start ui:mb-6">
                  <div class="ui:text-3xl ui:font-black ui:text-slate-900 ui:group-hover:text-[#C8E794] ui:transition-colors">
                      {{ court.time }}
                  </div>
                  <div class="ui:text-right">
                      <span class="ui:block ui:text-[10px] ui:font-bold ui:text-gray-400 ui:uppercase">Precio</span>
                      <span class="ui:text-xl ui:font-black ui:text-slate-900">{{ court.price }}€</span>
                  </div>
              </div>

              <div class="ui:space-y-2 ui:mb-6">
                  <div class="ui:text-sm ui:font-bold ui:text-slate-700 ui:flex ui:items-center ui:gap-2">
                      <i class="pi pi-box ui:text-lime-500"></i>
                      {{ court.name }}
                  </div>
                  <div class="ui:flex ui:gap-2">
                      <span class="ui:text-[10px] ui:bg-slate-100 ui:px-2 ui:py-1 ui:rounded-md ui:font-bold ui:text-gray-500 ui:uppercase">
                          {{ court.type }}
                      </span>
                      <span class="ui:text-[10px] ui:bg-slate-100 ui:px-2 ui:py-1 ui:rounded-md ui:font-bold ui:text-gray-500 ui:uppercase">
                          {{ court.duration }} min
                      </span>
                  </div>
              </div>

              <BaseButton 
                  label="RESERVAR" 
                  size="small"
                  class="ui:w-full ui:!py-1 ui:!font-black ui:!bg-slate-900 ui:group-hover:!bg-[#C8E794] ui:group-hover:!text-black ui:!border-0 ui:transition-colors" 
              />
            </BaseCard>
          </template>
        </BaseGroupedItem>
      </div>
    `,
  }),
};