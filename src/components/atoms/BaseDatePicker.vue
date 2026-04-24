<script setup lang="ts">
import DatePicker from 'primevue/datepicker';

const model = defineModel<any>();

defineProps<{
  invalid?: boolean;
  disabled?: boolean;
  variant?: null | 'filled' | 'outlined';
  fluid?: boolean;
  size?: 'small' | 'large';
  showIcon?: boolean;
  showButtonBar?: boolean;
  stepMinute?: number;
}>();
</script>


<template>
    <DatePicker
      v-model="model"
      v-bind="$attrs"
      :fluid="fluid"
      :disabled="disabled"
      :invalid="invalid"
      :variant="variant"
      :size="size"
      :show-icon="showIcon"
      :show-button-bar="showButtonBar"
      class="ui:w-full custom-datepicker"
      dateFormat="dd/mm/yy"
      :stepMinute="stepMinute"
    />
</template>