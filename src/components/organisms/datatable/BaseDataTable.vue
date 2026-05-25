<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import { FilterMatchMode } from '@primevue/core';
import { ref } from 'vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import type { ColumnConfig } from '../../../types/datatable';
import { isActionVisible, getActionClass, getActionIcon } from '../../../utils/action-utils';


interface Props {
  value: any[];
  columns: ColumnConfig<any>[];
  loading?: boolean;
  size?: 'small' |'large';
  showGridLines?: boolean;
  stripedRows?: boolean;
  paginator?: boolean;
  rows?: number;
  rowsPerPageOptions?: number[];
  useCustomPaginator?: boolean;
  removableSort?: boolean;
  showSearch?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    loading: false,
    showGridLines: false,
    stripedRows: false,
    paginator: false,
    useCustomPaginator: false,
    removableSort: false,
    showSearch: false,
});


const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS}
})


</script>


<template>
        <DataTable 
            v-model:filters="filters"
            :globalFilterFields="columns.map(c => c.field)"
            :value="props.value" 
            :loading="props.loading"
            tableStyle="width: 100%"
            class="ui:w-full"
            :size="size"
            :showGridlines="props.showGridLines"
            :stripedRows="props.stripedRows"
            :paginator="props.paginator"
            :rows="props.rows"
            :rowsPerPageOptions="props.rowsPerPageOptions"
            :useCustomPaginator="props.useCustomPaginator"
            :removableSort="props.removableSort">
            <template #header>
                <div class="ui:flex ui:flex-wrap ui:items-center ui:justify-between ui:gap-4 ui:w-full">
                    <div class="ui:flex ui:gap-2 ui:items-center ui:overflow-hidden ui:max-w-full">
                        <slot name="table-actions"></slot>
                    </div>
                    <IconField v-if="props.showSearch" class="ui:w-full ui:sm:w-72">
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filters['global'].value" placeholder="Buscar..." class="ui:rounded-xl ui:w-full" size="small"/>
                    </IconField>
                </div>
            </template>

            <Column 
                v-for="col of props.columns" 
                :key="col.field"
                :sortable="col.sortable"
                v-bind="col">

                <template #body="slotProps">
                    <div v-if="col.actions">
                            <template v-for="(btn, index) in col.actions" :key="index">
                                <template v-if="isActionVisible(btn, slotProps.data)">
                                    <router-link v-if="btn.to" :to="btn.to(slotProps.data)" class="ui:no-underline">
                                        <Button
                                        :icon="getActionIcon(btn, slotProps.data)"
                                        :label="btn.text"
                                        :class="['ui:!p-2', getActionClass(btn, slotProps.data)]" text rounded size="small">
                                        </Button>
                                    </router-link>

                                    <Button 
                                        v-else
                                        :icon="getActionIcon(btn, slotProps.data)"
                                        :label="btn.text"
                                        :class="['ui:!p-2', getActionClass(btn, slotProps.data)]" 
                                        text 
                                        rounded 
                                        size="small"
                                        @click="btn.action?.(slotProps.data, $event)"
                                        >
                                    </Button>

                                </template>
                            </template>
                    </div>


                    <slot v-else :name="col.field" :data="slotProps.data">
                        {{ col.field.includes('.') ? col.field.split('.').reduce((obj, key) => obj?.[key], slotProps.data) : slotProps.data[col.field] }}
                    </slot>
                </template>

            </Column>

            
            <template v-if="useCustomPaginator" #paginatorcontainer="{ first, last, page, pageCount, prevPageCallback, nextPageCallback, totalRecords }">
                <div class="ui:flex ui:items-center ui:gap-4 ui:border ui:border-primary ui:bg-transparent ui:rounded-full ui:w-full ui:py-1 ui:px-2 ui:justify-between ui:max-w-md">
                    <Button icon="pi pi-chevron-left" rounded text @click="prevPageCallback" :disabled="page === 0" />
                    <div class="ui:text-color ui:font-medium">
                        <span class="hidden sm:block">Mostrando del {{ first }} al {{ last }} de {{ totalRecords }}</span>
                        <span class="ui:block ui:sm:hidden">Página {{ page + 1 }} de {{ pageCount }}</span>
                    </div>
                    <Button icon="pi pi-chevron-right" rounded text @click="nextPageCallback" :disabled="page === (pageCount ?? 0) - 1" />
                </div>
            </template>

        </DataTable>
</template>