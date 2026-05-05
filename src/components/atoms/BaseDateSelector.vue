<script setup lang="ts">
import { BaseDatePicker, BaseCard } from '../..';

interface Props {
  modelValue: Date | undefined;
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);


const updateDate = (newDate: Date) => {
  emit('update:modelValue', newDate);
};
</script>

<template>
 
    <BaseCard class="ui:mb-10 ui:relative ui:z-20" border-rounded="ui:rounded-3xl" padding="ui:p-6">
        <div class="ui:flex ui:flex-col ui:md:flex-row ui:items-center ui:gap-2 ui:sm:gap-8 ui:p-2">
            <div class="ui:flex-1">
                <h2 class="ui: text-lg ui:sm:text-xl ui:font-bold ui:mb-1 ui:italic ui:text-slate-800">
                  ¿Cuándo quieres jugar?
                </h2>
                <p class="ui:text-sm ui:text-gray-500">
                  Selecciona una fecha para actualizar la disponibilidad
                </p>
            </div>
            
            <div class="ui:w-full ui:md:w-80">
              
                <BaseDatePicker 
                  :model-value="props.modelValue" 
                  @update:model-value="updateDate" 
                  showTime
                  hourFormat="24"
                  :step-minute="15"
                  showIcon
                  iconDisplay="input"
                  placeholder="Día y hora"
                />
              </div>

              <slot name="additional-filters" />
        </div>
    </BaseCard>
</template>