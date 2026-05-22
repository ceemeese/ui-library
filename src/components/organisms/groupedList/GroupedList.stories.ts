import type { Meta, StoryObj } from '@storybook/vue3';
import GroupedList from './GroupedList.vue';
import { BaseCard, BaseButton } from 'ui'; 

const meta: Meta<typeof GroupedList> = {
  title: 'Organisms/GroupedList',
  component: GroupedList as any,
};

export default meta;
type Story = StoryObj<typeof GroupedList>;

export const PadelSearchList: Story = {
  args: {
    groupTitleKey: 'name',
    groupSubtitleKey: 'address',
    itemKey: 'availableCourts',
    groups: [
      {
        id: 1,
        name: 'Padel Center Victoria',
        address: 'Calle Mayor, 12',
        availableCourts: [
            { id: 101, name: 'Pista 1', time: '17:00', price: 20, type: 'Indoor', duration: 90 },
            { id: 102, name: 'Pista 2', time: '18:30', price: 15, type: 'Outdoor', duration: 60 }
        ],
        weatherIcon: 'https://openweathermap.org/img/wn/10d@2x.png',
      }
    ]
  },
  render: (args) => ({
    components: { GroupedList, BaseCard, BaseButton },
    setup() { return { args }; },
    template: `
        <div class="ui:bg-slate-50 ui:p-8">
            <GroupedList v-bind="args">
            
            <template #header-action="{ count }">
                <span class="ui:px-4 ui:py-2 ui:bg-[#C8E794] ui:text-[#344533] ui:text-xs ui:font-black ui:rounded-full ui:uppercase">
                {{ count }} Horarios disponibles
                </span>
            </template>

            <template #card="{ item: court }">
                <BaseCard class="ui:min-w-[240px] ui:!shadow-md ui:hover:!shadow-xl ui:hover:!border-[#C8E794] ui:transition-all ui:duration-300 ui:cursor-pointer">
                    <div class="ui:group">
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
                            </div>
                        </div>

                        <BaseButton 
                            label="RESERVAR" 
                            size="small"
                            class="ui:w-full ui:!py-1 ui:!font-black ui:!bg-slate-900 ui:group-hover:!bg-[#C8E794] ui:group-hover:!text-black ui:!border-0" 
                        />
                    </div>
                </BaseCard>
            </template>

            <!-- Empty State -->
            <template #empty>
                <div class="ui:text-center ui:py-24 ui:bg-white ui:rounded-3xl ui:border-2 ui:border-dashed ui:border-slate-200">
                    <i class="pi pi-calendar-plus ui:text-6xl ui:text-slate-200 ui:mb-4"></i>
                    <h3 class="ui:text-xl ui:font-bold ui:text-slate-400">No hay pistas para este día</h3>
                </div>
            </template>
            </GroupedList>
        </div>
    `,
  }),
};