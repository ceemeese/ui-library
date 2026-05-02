<script setup lang="ts">
import BaseGroupedItem from '../../atoms/BaseGroupedItem.vue';

defineProps<{
  groups: any[];
  groupTitleKey: string;
  groupSubtitleKey?: string;
  itemKey?: string;
}>();
</script>

<template>
    <div class="ui:space-y-12">
        <template v-if="groups.length > 0">
            <BaseGroupedItem 
                v-for="group in groups" 
                :key="group.id" 
                :title="group[groupTitleKey]"
                :subtitle="group[groupSubtitleKey || '']"
                :items="group[itemKey || 'items']"
            >
                <template #card="{ item }">
                    <slot name="card" :item="item" />
                </template>

                
                <template #header-action="{ count }">
                    <slot name="header-action" :count="count" />
                </template>
            </BaseGroupedItem >
        </template>
        
        <slot v-else name="empty">
            <div class="ui:text-center ui:py-20 ui:border-2 ui:border-dashed ui:rounded-3xl">
                <p class="ui:text-slate-400">No hay datos disponibles</p>
            </div>
        </slot>
    </div>
</template>