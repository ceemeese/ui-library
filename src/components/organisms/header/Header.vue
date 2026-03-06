<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import BaseButton from '../../atoms/BaseButton.vue';

export interface NavItem {
    title: string;
    to: string | Record<string, any>;
}

defineProps({
    navigationItems: {
        type: Array as () => NavItem[],
        default: () => []
    },
    maxWidth: { type: String, default: 'ui:max-w-7xl' },
    sticky: { type: Boolean, default: true },
    blurAmount: { type: String, default: 'ui:backdrop-blur-md' },
    registerLabel: { type: String, default: 'Regístrate' }
});

const isScrolled = ref(false);
const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
    <header 
        id="header" 
        :class="[
            sticky 
                ? 'ui:fixed ui:top-0 ui:z-50' 
                : 'ui:relative',
            isScrolled 
                ? `ui:py-3 ui:bg-white/70 ${blurAmount} ui:border-b ui:border-gray-200/50 ui:shadow-sm` 
                : 'ui:py-6 ui:bg-transparent',
            'ui:w-full ui:transition-all ui:duration-500 ui:px-6',
        ]"
    >
        <div :class="[maxWidth, 'ui:mx-auto ui:flex ui:items-center ui:justify-between']">
      
            <router-link :to="{ name: 'landing' }" class="ui:flex ui:items-center ui:group ui:no-underline">
                <slot name="logo">
                    <span class="ui:text-xl ui:font-black ui:tracking-tighter ui:text-primary">
                        LOGO
                    </span>
                </slot>
            </router-link>

            <nav class="ui:hidden ui:lg:flex ui:items-center ui:gap-1 ui:bg-gray-100/50 ui:p-1 ui:rounded-full ui:border ui:border-gray-200/20 ui:backdrop-blur-sm">
                <router-link
                    v-for="item in navigationItems" 
                    :key="item.title"
                    :to="item.to"
                    class="ui:px-5 ui:py-2 ui:text-sm ui:font-semibold ui:text-gray-600 ui:rounded-full ui:transition-all ui:duration-300 ui:hover:text-primary ui:hover:bg-white ui:hover:shadow-sm ui:no-underline"
                    active-class="ui:bg-white !ui:text-primary ui:shadow-sm"
                >
                    {{ item.title }}
                </router-link>
            </nav>

            <div class="ui:flex ui:items-center ui:gap-3">
                <slot name="extra-actions"></slot>
                <router-link :to="{ name: 'login' }" class="ui:no-underline">
                    <BaseButton
                        :label="registerLabel" 
                        rounded 
                        size="small"
                        class="ui:!border-none  ui:!shadow-lg ui:!shadow-emerald-500/20 ui:!px-5 ui:transition-all ui:hover:-translate-y-0.5" 
                    />
                </router-link>
        
                <button class="ui:lg:hidden ui:p-2 ui:text-gray-700 ui:hover:bg-gray-100 ui:rounded-xl ui:transition-colors">
                    <i class="pi pi-bars ui:text-xl"></i>
                </button>
            </div>

        </div>
    </header>
</template>