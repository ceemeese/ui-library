<script setup lang="ts">
import { BaseDatePicker, BaseCard } from '../..';

interface Props {
    modelValue: Date | Date[] | undefined;
    title?: string;
    subtitle?: string;
    showTime?: boolean;
    selectionMode?: 'single' | 'range';
    placeholder?: string;
}

const props = withDefaults(defineProps<Props>(), {
    title: '¿Cuándo quieres jugar?',
    subtitle: 'Selecciona una fecha para actualizar la disponibilidad',
    showTime: false,
    selectionMode: 'single',
    placeholder: 'Selecciona fecha'
});

const emit = defineEmits(['update:modelValue']);


const updateDate = (newDate: Date) => {
    emit('update:modelValue', newDate);
};
</script>

<template>
 
    <BaseCard class="ui:mb-10 ui:relative ui:z-20" border-rounded="ui:rounded-3xl" padding="ui:p-6">
        <div class="ui:flex ui:flex-col ui:lg:flex-row ui:items-center ui:justify-between ui:gap-6 ui:p-2 ui:flex-wrap">
            <div class="ui:flex-1 ui:text-center ui:lg:text-left ui:w-full">
                <h2 class="ui: text-lg ui:sm:text-xl ui:font-bold ui:mb-1 ui:italic ui:text-slate-800">{{ props.title }}</h2>
                <p class="ui:text-sm ui:text-gray-500">{{ props.subtitle }}</p>
            </div>
            
            <div class="ui:flex ui:flex-col ui:sm:flex-row ui:w-full ui:lg:w-auto ui:items-center ui:gap-4">
            <div class="ui:w-full ui:md:w-72">
              
                <BaseDatePicker 
                  :model-value="props.modelValue" 
                  @update:model-value="updateDate" 
                  :showTime="props.showTime"
                  :selectionMode="props.selectionMode"
                  hourFormat="24"
                  :step-minute="15"
                  showIcon
                  iconDisplay="input"
                  :placeholder="props.placeholder"
                />
            </div>
            </div>

              <slot name="additional-filters" />
        </div>
    </BaseCard>
</template>