<script setup lang="ts">
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import IftaLabel from 'primevue/iftalabel';
import Message from 'primevue/message';
import type { BaseInputProps } from '../../types/forms';

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

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="ui:flex ui:flex-col ui:gap-1 ui:w-full ui:mt-4"> 
        <IftaLabel variant="on">
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