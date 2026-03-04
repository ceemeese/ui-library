<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import BaseButton from '../../atoms/BaseButton.vue';

interface NavItem {
    title: string;
    to: string | Record<string, any>;
    icon?: string;
}

defineProps({
    navigationItems: {
        type: Array as () => NavItem[],
        default: () => []
    },
    maxWidth: { type: String, default: 'ui:max-w-7xl' },
    sticky: { type: Boolean, default: true },
    blurAmount: { type: String, default: 'ui:backdrop-blur-md' },
    registerLabel: { type: String, default: 'Log in' },
    loginLabel: { type: String, default: 'Log in' }
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
        :class="[
            'ui:fixed ui:top-4 ui:left-1/2 ui:-translate-x-1/2 ui:z-50 ui:w-[95%] ui:transition-all ui:duration-500',
            isScrolled ? 'ui:max-w-5xl' : maxWidth
        ]"
    >
        <div 
            :class="[
                'ui:flex ui:items-center ui:justify-between ui:px-6 ui:py-3 ui:rounded-2xl ui:border ui:border-gray-200/50 ui:shadow-lg ui:bg-white/80 ui:backdrop-blur-xl',
            ]"
        >
            <router-link :to="{ name: 'home' }" class="ui:flex ui:items-center ui:gap-2 ui:no-underline">
                <slot name="logo">
                   <div class="ui:bg-black ui:p-1.5 ui:rounded-lg">
                       <i class="pi pi-bolt ui:text-white ui:text-sm"></i>
                   </div>
                   <span class="ui:font-bold ui:text-lg ui:tracking-tight ui:text-black">Logo</span>
                </slot>
            </router-link>

            <nav class="ui:hidden ui:lg:flex ui:items-center ui:gap-2">
                <router-link
                    v-for="item in navigationItems" 
                    :key="item.title"
                    :to="item.to"
                    class="ui:flex ui:items-center ui:gap-2 ui:px-4 ui:py-2 ui:text-sm ui:font-medium ui:text-gray-500 ui:rounded-full ui:border ui:border-transparent ui:transition-all ui:hover:bg-gray-100 ui:hover:text-black ui:no-underline"
                    active-class="ui:bg-gray-100 ui:!text-black ui:border-gray-200"
                >
                    <i v-if="item.icon" :class="[item.icon, 'ui:text-[10px]']"></i>
                    {{ item.title }}
                </router-link>
            </nav>

            <div class="ui:flex ui:items-center ui:gap-3">
                <router-link :to="{ name: 'register' }"> 
                    <BaseButton
                        :label="loginLabel" 
                        size="small"
                        rounded
                    />
                </router-link>

                <router-link :to="{ name: 'login' }"> 
                    <BaseButton
                        icon="pi pi-sign-in"
                        size="small"
                        rounded
                        class="ui:!bg-black"
                    />
                </router-link>
            </div>
        </div>
    </header>
</template>