<script setup lang="ts">

interface Props {
    width?: string;
    height?: string;
    padding?: string;
    blurAmount?: string;
    borderRounded?: string;
}

const props = withDefaults(defineProps<Props>(), {
    width: 'ui:w-full',
    height: 'ui:h-auto',
    padding: 'ui:p-8',
    blurAmount: 'ui:backdrop-blur-xl',
    borderRounded: 'ui:rounded-2xl'
});

</script>


<template>
    <div :class="[
        'ui:bg-white ui:shadow-xl ui:border ui:border-gray-200/50 ui:flex ui:flex-col', 
        props.width,
        props.height,
        props.padding,
        props.blurAmount,
        props.borderRounded ]">
        <slot/>
    </div>
</template>