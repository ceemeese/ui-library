import type { Meta, StoryObj } from '@storybook/vue3';
import BaseDateSelector from '../components/atoms/BaseDateSelector.vue';

import { ref } from 'vue';

const meta: Meta<typeof BaseDateSelector> = {
    title: 'Atoms/BaseDateSelector',
    component: BaseDateSelector,
    tags: ['autodocs'],
    argTypes: {
        modelValue: {
        control: 'date',
        description: 'Fecha o rango seleccionado',
        },
        selectionMode: {
        control: 'select',
        options: ['single', 'range'],
        },
        showTime: { control: 'boolean' }
    },
    args: {
        modelValue: new Date(),
        title: '¿Cuándo quieres jugar?',
        selectionMode: 'single'
    },
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
        default: 'light',
        values: [
            { name: 'light', value: '#f8fafc' },
        ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof BaseDateSelector>;

export const Default: Story = {
    render: (args) => ({
        components: { BaseDateSelector },
        setup() {
        return { args };
        },
        template: `
            <div class="p-8 bg-slate-50 min-h-[300px]">
                <BaseDateSelector v-bind="args" v-model="args.modelValue" />
                <div class="mt-4 text-center text-sm text-slate-50">
                Valor actual: {{ args.modelValue }}
                </div>
            </div>
        `,
    }),
    args: {
        modelValue: new Date(),
    },
};

export const MobileView: Story = {
    parameters: {
        viewport: {
        defaultViewport: 'mobile1',
        },
    },
    render: (args) => ({
        components: { BaseDateSelector },
        setup() {
        const date = ref(new Date());
        return { args, date };
        },
        template: `
        <div class="p-4 bg-slate-50">
            <BaseDateSelector v-model="date" />
        </div>
        `,
    }),
};

export const RangeMode: Story = {
    args: {
        title: 'Historial de Reservas',
        subtitle: 'Selecciona el rango de fechas',
        selectionMode: 'range',
        modelValue: [new Date(), new Date(new Date().setDate(new Date().getDate() + 7))],
    },
    render: (args) => ({
        components: { BaseDateSelector },
        setup() { return { args }; },
        template: `
        <div class="p-8 bg-slate-50">
            <BaseDateSelector v-bind="args" v-model="args.modelValue" />
        </div>
        `,
    }),
};