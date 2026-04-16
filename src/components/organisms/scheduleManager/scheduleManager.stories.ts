import type { Meta, StoryObj } from '@storybook/vue3';
import ScheduleManager from './ScheduleManager.vue'
import { fn } from 'storybook/test';


const MOCK_DAYS = {
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
    7: 'Domingo'
};

const MOCK_SCHEDULES = [
    {
        id: 1,
        openingTime: "08:00:00",
        closingTime: "14:00:00",
        isClosed: false,
        dayOfWeek: { id: 1 }
    },
    {
        id: 2,
        openingTime: "16:00:00",
        closingTime: "21:00:00",
        isClosed: false,
        dayOfWeek: { id: 1 }
    },
    {
        id: 3,
        openingTime: "09:00:00",
        closingTime: "20:00:00",
        isClosed: false,
        dayOfWeek: { id: 2 }
    },
    {
        id: 4,
        openingTime: "00:00:00",
        closingTime: "00:00:00",
        isClosed: true,
        dayOfWeek: { id: 7 }
    }
];

const meta: Meta<typeof ScheduleManager> = {
    title: 'Organisms/ScheduleManager',
    component: ScheduleManager,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ScheduleManager>;

const actionsConfig = {
    day: [
        { 
            text: 'Añadir', 
            icon: 'pi pi-plus', 
            class: 'ui:!text-primary-600',
            isVisible: true,
            action: fn()
        }
    ],
    slot: [
        { 
            icon: 'pi pi-pencil', 
            class: 'ui:!text-slate-400 ui:hover:!text-blue-600',
            isVisible: true,
            action: fn() 
        },
        { 
            icon: 'pi pi-trash', 
            class: 'ui:!text-red-400 ui:hover:!text-red-600',
            isVisible: (data: any) => !data.isClosed,
            action: fn() 
        }
    ]
};

export const Default: Story = {
    args: {
        value: MOCK_SCHEDULES,
        dayNames: MOCK_DAYS,
        loading: false,
        actions: actionsConfig
    },
};


export const Loading: Story = {
    args: {
        value: [],
        dayNames: MOCK_DAYS,
        loading: true,
        actions: actionsConfig
    },
};


export const Empty: Story = {
    args: {
        value: [],
        dayNames: MOCK_DAYS,
        loading: false,
        actions: actionsConfig
    },
};