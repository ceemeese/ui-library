<script setup lang="ts">
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';
import { computed } from 'vue';
import type { TreeNode } from 'primevue/treenode'
import Tag from 'primevue/tag';
import BaseButton from '../../atoms/BaseButton.vue';
import type { ActionColumn } from '../../../types/datatable';
import { getActionIcon, getActionClass, isActionVisible  } from '../../../utils/action-utils';

export interface ScheduleNode {
    id: number;
    openingTime: string;
    closingTime: string;
    isClosed: boolean;
    dayOfWeek: {
        id: number;
        name?: string;
    }
}

export interface ScheduleProps {
    value: ScheduleNode[];
    dayColumnHeader?: string;
    statusColumnHeader?: string;
    actionsColumnHeader?: string;
    loading?: boolean;
    dayNames?: Record<number, string>;
    actions?: {
        day?: ActionColumn<any>[];
        slot?: ActionColumn<any>[];
    }
}

const props = withDefaults(defineProps<ScheduleProps>(), {
    value: () => [],
    loading: false,
})

const formatTime = (time: any) => {
    if (!time || typeof time != 'string') return '';

    try {
        return time.includes(':') ? time.substring(0,5) : time;
    } catch (e) {
        return '';
    }
}

const treeTableData = computed<TreeNode[]>(() => {
    const days = [1, 2, 3, 4, 5, 6, 7];
    
    return days.map(dayId => {
        const slots = props.value.filter(s => s.dayOfWeek.id === dayId);
        
        return {
            key: dayId.toString(),
            data: {
                id: dayId,
                name: props.dayNames ? props.dayNames[dayId] : `Día ${dayId}`,
                type: 'day',
                dayOfWeek: {id: dayId },
                isClosed: slots.length === 0 || slots.every(s => s.isClosed)
            },
            children: slots.map((slot): TreeNode => ({
                key: `slot-${slot.id}`,
                data: {
                    ...slot,
                    type: 'slot'
                }
            }))
        } as TreeNode;
    });
});


</script>

<template>
    <TreeTable :value="treeTableData" :loading="props.loading" class="ui:w-full">
        <Column field="name" :header="dayColumnHeader || 'Día / Franja'" expander class="ui:w-[50%] ui:p-4 ui:border-b ui:border-slate-100" body-class="ui:p-4 ui:border-b ui:border-slatel-50 ui:text-slate-800"></Column>
        <Column field="openingTime" :header="statusColumnHeader || 'Estado / Horario'" class="ui:w-[25%] ui:p-4 ui:border-b ui:border-slate-100">
            <template #body="slotProps">
                <div v-if="slotProps.node.data.type === 'slot'" class="ui:flex ui:w-full ui:gap-2 ui:items-center ">
                    <span 
                    class="ui:flex ui:h-2.5 ui:w-2.5 ui:rounded-full ui:shrink-0"
                    :class="slotProps.node.data.isClosed 
                        ? 'ui:bg-red-500 ui:shadow-red-500/50 ui:shadow-sm' 
                        : 'ui:bg-emerald-500 ui:shadow-emerald-500/50 ui:shadow-sm'">
                    </span>

                    <div class="ui:flex ui:items-center ui:gap-1" :class="{ 'ui:opacity-30': slotProps.node.data.isClosed }">
                        <Tag severity="secondary" :value="formatTime(slotProps.node.data.openingTime)" rounded class="ui:text-sm ui:font-mono"/>
                        <span class="text-slate-400">-</span>
                        <Tag severity="secondary" :value="formatTime(slotProps.node.data.closingTime)" rounded class="ui:text-sm ui:font-mono" />
                    </div>
                </div>
                
                <template v-else>
                    <Tag v-if="slotProps.node.data.isClosed" severity="danger" value="Cerrado" rounded class="ui:text-xs"/>
                    <Tag v-else severity="success" value="Abierto" rounded class="ui:text-xs"/>
                </template>
            </template>
        </Column>
        
        <Column :header="actionsColumnHeader || 'Acciones'" class="ui:w-[25%] ui:p-4 ui:border-b ui:border-slate-100">
            <template #body="slotProps">
                <div class="ui:flex ui:gap-2">
                        <template v-for="(btn, index) in slotProps.node.data.type === 'slot' ? actions?.slot : actions?.day" :key="index">
                            <template v-if="isActionVisible(btn, slotProps.node.data)">
                                <router-link v-if="btn.to" :to="btn.to(slotProps.node.data)" class="ui:no-underline">
                                    <BaseButton
                                        :icon="getActionIcon(btn, slotProps.data)"
                                        :label="btn.text"
                                        :class="['ui:!text-gray-400 ui:hover:!text-slate-700 ui:!transition-colors ui:!bg-transparent ui:hover:scale-110', getActionClass(btn, slotProps.data)]" text rounded size="small">
                                    </BaseButton>
                                </router-link>
                                <BaseButton 
                                    v-else
                                    :icon="getActionIcon(btn, slotProps.node.data)" 
                                    :label="btn.text"
                                    text rounded size="small"
                                    :class="['ui:!text-gray-400 ui:hover:!text-slate-700 ui:!transition-colors ui:!bg-transparent ui:hover:scale-110', getActionClass(btn, slotProps.node.data)]"
                                    @click="btn.action?.(slotProps.node.data, $event)"
                                />       
                            </template>
                        </template>
                    </div>
            </template>
        </Column>
    </TreeTable>
</template>