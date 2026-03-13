<script setup lang="ts">
import Password from 'primevue/password';
import IftaLabel from 'primevue/iftalabel';
import Message from 'primevue/message';

interface BasePasswordProps {
  modelValue?: string;
  label?: string;
  error?: string;
  feedback?: boolean;
  toggleMask?: boolean;
  showClear?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

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
  <div class="ui:flex ui:flex-col ui:gap-1 ui:w-full ui:mt-4">
        <IftaLabel>
            <Password
                v-bind="$attrs"
                :id="label"
                :value="modelValue"
                @input="onInputPasssword"
                :feedback="feedback"
                :toggleMask="toggleMask"
                :invalid="!!error"
                :showClear="showClear"
                fluid
                :pt="{
                    input: { 
                        class: 'ui:w-full ui:transition-all ui:duration-200' 
                    }
                }"
            />
            <label :for="label">{{ label }}</label>
        </IftaLabel>

        <Message v-if="error" severity="error" size="small" variant="simple">
        {{ error }}
        </Message>

  </div>
</template>