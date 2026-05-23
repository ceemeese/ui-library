<script setup lang="ts">
import Button from 'primevue/button';
import type { BaseButtonProps } from '../../types/forms';


const props = withDefaults(defineProps<BaseButtonProps>(), {
    disabled: false,
    raised: false,
    rounded: false,
    type: 'button',
});

const emit = defineEmits(['click']);
</script>

<template>
    <Button
        :label="props.label"
        :disabled="props.disabled || props.loading"
        :raised="props.raised"
        :rounded="props.rounded"
        :variant="props.variant"
        :badge="props.badge"
        :icon="props.icon"
        :size="props.size"
        :aria-label="props.ariaLabel"
        :loading="props.loading"
        :type="props.type"
        @click="emit('click', $event)"
        :class="['ui:!transition-transform ui:!transform ui:!duration-200 ui:active:!scale-95 ui:!ease-in-out ui:whitespace-nowrap ui:flex-shrink-0 ui:!text-[10px] ui:font-black ui:uppercase ui:tracking-wider ui:px-4 ui:py-2.5 ui:rounded-xl', $attrs.class]"
    >
        <slot />
    </Button>
</template>

<style scoped>
</style>