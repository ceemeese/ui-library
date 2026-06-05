<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    text: string;
    type?: 'success' | 'error' | 'warning' | 'info' | 'inactive' | 'secondary';
    icon?: string;
    size?: 'small' | 'normal';
    dot?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'info',
    size: 'small',
    dot: false,
});

const styles = {
    info:      'bg-[#EEF7FC] text-[#3A7FA6] border-[#94C8E7]/70',
    success:   'bg-[#F3FAEA] text-[#6B8F3A] border-[#C8E794]/70',
    inactive:  'bg-[#F8FAFC] text-[#64748B] border-[#CBD5E1]/70',
    error:     'bg-[#FFF5F5] text-[#E11D48] border-[#FDA4AF]/70',
    warning:   'bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]/70',
    secondary: 'bg-[#FAF5FF] text-[#9333EA] border-[#E9D5FF]/70'
};

const sizes = {
    small:  'text-[10px] px-2.5 py-1 gap-1.5',
    normal: 'text-xs px-3 py-1.5 gap-2'
};

const badgeClass = computed(() => styles[props.type]);
const sizeClass = computed(() => sizes[props.size]);

</script>

<template>
    <span :class="[
      'inline-flex items-center rounded-full uppercase font-bold tracking-wider border', 
      sizeClass,
      badgeClass
    ]">
        <i v-if="icon" :class="[ icon, 'shrink-0 leading-none', props.size === 'small' ? '!text-[10px]' : '!text-xs']"
        ></i>
        <span v-if="dot" 
            :class="[
            'rounded-full bg-current shrink-0 animate-pulse', props.size === 'small' ? 'w-1.5 h-1.5' : 'w-2 h-2']"
        ></span>
        <span>{{ text }}</span>
    </span>
</template>