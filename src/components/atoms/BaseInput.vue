<script setup lang="ts">
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import IftaLabel from 'primevue/iftalabel';
import Message from 'primevue/message';
import Checkbox from 'primevue/checkbox';
import Select from 'primevue/select';
import type { BaseInputProps } from '../../types/forms';
import DatePicker from 'primevue/datepicker';


withDefaults(defineProps<BaseInputProps>(), {
  type: 'text',
  primary: false,
  size: 'medium',
  placeholder: '',
  disabled: false,
});

defineOptions({
  inheritAttrs: false
});

const emit = defineEmits(['update:modelValue']);

const onInput = (event: any) => {
  const target = event?.target  ? (event.target as HTMLInputElement).value : event;
  emit('update:modelValue', target);
};
</script>

<template>
  <div class="ui:flex ui:flex-col ui:gap-1 ui:w-full ui:mt-4"> 
    
    <div v-if="type === 'boolean'" class="ui:flex ui:items-center ui:gap-3 ui:pt-2">
      <Checkbox
        v-bind="$attrs"
        :id="label"
        :model-value="modelValue"
        :binary="true"
        :invalid="!!error"
        @update:model-value="onInput"
        />
      <label :for="label">{{ label }}</label>
    </div>

    <IftaLabel v-else-if="type === 'select'" variant="on">
      <Select
        v-bind="$attrs"
        :id="label"
        :type="type"
        :model-value="modelValue"
        :invalid="!!error"
        class="ui:w-full"
        :options="options"
        :option-label="optionLabel"
        :option-value="optionValue"
        :placeholder="placeholder"
        checkmark
        :highlightOnSelect="false"
        @update:model-value="onInput"
      />
      <label :for="label">{{ label }}</label>
    
    </IftaLabel>

    <IftaLabel v-else-if="type === 'time'" variant="on">
      <IconField>
        <InputIcon v-if="icon" :class="['pi', icon]" />
          <DatePicker
            v-bind="$attrs"
            :id="label"
            :model-value="(modelValue as Date)"
            @update:model-value="onInput"
            updateModelType="string"
            timeOnly
            fluid
            :invalid="!!error"
            :placeholder="placeholder"
            class="ui:w-full"
          />
      </IconField>
      
      <label :for="label">{{ label }}</label>
    
    </IftaLabel>
    <IftaLabel v-else variant="on">
        <IconField>
          <InputIcon v-if="icon" :class="['pi', icon]" />
          
          <InputText
          v-bind="$attrs"
          :id="label"
          :type="type"
          :value="modelValue"
          @input="onInput"
          class="ui:w-full ui:transition-all ui:duration-200"
          :class="[
              
          ]"
          :invalid="!!error"
          />
        </IconField>
        
        <label :for="label">{{ label }}</label>
    </IftaLabel>
        
    <Message v-if="error" severity="error" size="small" class="animate-fade-in" variant="simple">
      {{ error }}
    </Message>

  </div>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>