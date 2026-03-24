<script setup lang="ts">
export interface InfoFieldProps {
    label: string;
    value: string | number | undefined;
    icon: string;
}

const props = defineProps<InfoFieldProps>();

</script>

<template>
    <div :key="label" class="flex items-center gap-3 text-slate-500">
        <div class="ui:w-9 ui:h-9 ui:flex ui:items-center ui:justify-center ui:bg-slate-50 ui:rounded-full">
            <i :class="[ icon, 'ui:text-slate-400 ui:text-sm']"></i>
            </div>
            <div class="ui:flex ui:flex-col">
                <span class="ui:text-xs ui:font-semibold ui:text-slate-400 ui:uppercase ui:tracking-wider">
                    {{ label }}
                </span>
                <span class="ui:text-sm ui:text-slate-700">
                    {{ value || '---'}}
                </span>
        </div>
    </div>

</template>