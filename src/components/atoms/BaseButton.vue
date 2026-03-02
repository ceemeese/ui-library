<script setup lang="ts">
import Button from 'primevue/button';

interface BaseButtonProps {
  label?: string;
  disabled?: boolean;
  raised?: boolean;
  rounded?: boolean;
  variant?: 'text' | 'outlined' | 'link';
  badge?: string;
  icon?: string;
  size?: 'small' | 'large';
  loading?: boolean;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

withDefaults(defineProps<BaseButtonProps>(), {
    disabled: false,
    raised: false,
    rounded: false,
    type: 'button',
});

const emit = defineEmits(['click']);
</script>

<template>
    <Button
        :label="label"
        :disabled="disabled || loading"
        :raised="raised"
        :rounded="rounded"
        :variant="variant"
        :badge="badge"
        :icon="icon"
        :size="size"
        :aria-label="ariaLabel"
        :loading="loading"
        :type="type"
        @click="emit('click', $event)"
        :class="['ui:transition-all ui:duration-200 ui:active:scale-95', $attrs.class]"
    >
        <slot />
    </Button>
</template>

<style scoped>
.active\:scale-95:active {
  transform: scale(0.95);
}
</style>