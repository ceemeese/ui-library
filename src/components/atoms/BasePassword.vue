<script setup lang="ts">
import Password from 'primevue/password';
import IftaLabel from 'primevue/iftalabel';
import Message from 'primevue/message';
import type { BasePasswordProps } from '../../types/forms';

withDefaults(defineProps<BasePasswordProps>(), {
  feedback: false,
  toggleMask: true,
  showClear: false,
  size: 'medium',
  disabled: false,
});

defineOptions({
  inheritAttrs: false
});

const emit = defineEmits(['update:modelValue']);
const onInputPasssword = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};
</script>

<template>
  <div class="ui:flex ui:flex-col ui:gap-1 ui:w-full">
        <IftaLabel>
            <Password
                :name="name"
                v-bind="$attrs"
                :id="label"
                :value="modelValue"
                @input="onInputPasssword"
                :feedback="feedback"
                :toggleMask="toggleMask"
                :invalid="!!error"
                :size="size"
                :showClear="showClear"
                :disabled="disabled"
                fluid
                :pt="{
                    input: { 
                        class: 'ui:w-full ui:transition-all ui:duration-200' 
                    }
                }"
            />
            <label :for="label">{{ label }}</label>
        </IftaLabel>

        <div class="ui:h-[24px] ui:w-full">
          <Message v-if="error" severity="error" size="small" class="animate-fade-in ui:!text-[10px]" variant="simple">
            {{ error }}
          </Message>
        </div>

  </div>
</template>