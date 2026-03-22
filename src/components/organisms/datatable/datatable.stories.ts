import type { Meta, StoryObj } from '@storybook/vue3';
import Datatable from './BaseDataTable.vue';
import BaseCard from '../../atoms/BaseCard.vue';

const meta: Meta<typeof Datatable> = {
  title: 'Organisms/Datatable',
  component: Datatable,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    value: { control: 'object' },
    columns: { control: 'object' },
    loading: { control: 'boolean' },
    size: { 
        control : 'select', 
        options: ['small','large'],
        description: 'Tamaño de las celdas de la tabla'},
    showGridLines: {control: 'boolean' },
    stripedRows: {control: 'boolean' },
    paginator: {control: 'boolean' },
    rows: {control: 'number' },
    rowsPerPageOptions: {control: 'object' },
    useCustomPaginator: {control: 'boolean' },
  },
} satisfies Meta<typeof Datatable>;

export default meta;
type Story = StoryObj<typeof Datatable>;

export const Default: Story = {
  args: {
   loading: false,
   stripedRows: true,
   showGridLines: false,
   paginator: true,
   rows: 5,
   useCustomPaginator: false,
   columns: [
      { field: 'id', header: 'ID', sortable: true },
      { field: 'username', header: 'Usuario', sortable: true },
      { field: 'email', header: 'Correo', sortable: true },
      { field: 'createdAt', header: 'Fecha Registro', sortable: true },
      { 
        field: 'actions', 
        header: 'Acciones', 
        actions: [
          { isVisible: true, icon: 'pi pi-pencil', action: (row) => alert(`Editando a ${row.username}`) },
          { isVisible: true, icon: 'pi pi-trash', class: 'ui:!text-red-500', action: (row) => alert(`Borrando a ${row.username}`) }
        ] 
      },
    ],
    value: [
      {
        id: '1',
        username: 'jdoe',
        email: 'john.doe@example.com',
        createdAt: new Date('2024-01-15'),
      },
      {
        id: '2',
        username: 'mgarcia',
        email: 'm.garcia@example.es',
        createdAt: new Date('2024-02-20'),
      },
      {
        id: '3',
        username: 'admin',
        email: 'admin@admin.com',
        createdAt: new Date(),
      },
    ],
  },
  render: (args) => ({
    components: { Datatable, BaseCard },
    setup() {
      return { args };
    },
    template: `
      <div class="ui:min-h-screen ui:p-8 ui:bg-gray-50">
        <BaseCard>
            <div class="ui:mb-4">
              <h2 class="ui:text-xl ui:font-bold">Listado de Usuarios</h2>
              <p class="ui:text-sm ui:text-gray-500">Vista previa desde Storybook</p>
            </div>
            
            <Datatable v-bind="args" />
        </BaseCard>
      </div>
    `,
  }),
};


export const WithCustomPaginator: Story = {
  args: {
    ...Default.args,
    useCustomPaginator: true,
    rows: 2,
  }
};

export const WithSearch: Story = {
  args: {
    ...Default.args,
    useCustomPaginator: true,
    rows: 2,
    showSearch: true,
  }
};