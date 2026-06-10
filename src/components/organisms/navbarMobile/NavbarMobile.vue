<script setup lang="ts">
defineProps<{ isOpen: boolean }>();
defineEmits(['close']);
</script>

<template>
    <div v-if="isOpen" class="lg:hidden fixed inset-0 z-50">
        <div class="absolute inset-0 bg-black/50" @click="$emit('close')"></div>
        <div class="relative w-64 h-full bg-white shadow-xl">
            <slot />
        </div>
    </div>
</template>