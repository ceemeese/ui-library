import type { Meta, StoryObj } from '@storybook/vue3';
import EventCalendar from './EventCalendar.vue';

const meta: Meta<typeof EventCalendar> = {
  title: 'Organisms/EventCalendar',
  component: EventCalendar as any,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    minTime: { control: { type: 'number', min: 0, max: 23 } },
    maxTime: { control: { type: 'number', min: 0, max: 23 } },
  },
};

export default meta;
type Story = StoryObj<typeof EventCalendar>;

//pistas
const mockResources = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  label: `Pista ${i + 1}`,
  type: i % 2 === 0 ? 'Cristal' : 'Muro',
  isDisabled: i === 2 ? true : (i === 4 ? () => true : false),
  data: { clubId: 'CLUB_01' }
}));

//fechas de hoy
const today = new Date();
const getTodayAt = (hours: number, minutes = 0) => {
  const d = new Date(today);
  d.setHours(hours, minutes, 0, 0);
  return d;
};


const mockEvents = [
  {
    id: 1,
    start: getTodayAt(9, 0),
    end: getTodayAt(10, 30),
    title: 'Clase Particular',
    content: 'Monitor: Alberto',
    resourceId: 1,
    colorClass: 'ui:bg-blue-100 ui:border-blue-500 ui:text-blue-700',
  },
  {
    id: 2,
    start: getTodayAt(11, 0),
    end: getTodayAt(12, 30),
    title: 'Reserva Libre',
    content: 'Usuario: Juan Pérez',
    resourceId: 1,
    colorClass: 'ui:bg-green-100 ui:border-green-500 ui:text-green-700',
  },
  {
    id: 3,
    start: getTodayAt(10, 0),
    end: getTodayAt(12, 0),
    title: 'Mantenimiento',
    content: 'No disponible',
    resourceId: 3,
    colorClass: 'ui:bg-slate-200 ui:border-slate-400 ui:text-slate-600',
  },
  {
    id: 4,
    start: getTodayAt(18, 0),
    end: getTodayAt(20, 0),
    title: 'Torneo Americano',
    content: 'Nivel 4.0',
    resourceId: 5,
    colorClass: 'ui:bg-orange-100 ui:border-orange-500 ui:text-orange-700',
  },
  {
    id: 5,
    start: getTodayAt(14, 30),
    end: getTodayAt(16, 0),
    title: 'Entrenamiento Equipo',
    resourceId: 10, // Probamos la última pista para ver el scroll
    colorClass: 'ui:bg-purple-100 ui:border-purple-500 ui:text-purple-700',
  },
];

export const Default: Story = {
  render: (args) => ({
    components: { EventCalendar },
    setup() {
      return { args };
    },
    template: `
      <div style="height: 90vh; padding: 20px; background: #f1f5f9;">
        <EventCalendar v-bind="args" />
      </div>
    `,
  }),
  args: {
    resources: mockResources,
    events: mockEvents,
    minTime: 8,
    maxTime: 22,
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    events: [],
  },
};