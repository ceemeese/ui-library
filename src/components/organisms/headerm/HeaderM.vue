<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import BaseButton from '../../atoms/BaseButton.vue';
import type { NavItem } from '../../../types/navigation';

interface Props {
    navigationItems: NavItem[];
    isAuthenticated?: boolean;
    maxWidth?: string;
    sticky?: boolean;
    blurAmount?: string;
    registerLabel?: string;
    loginLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
    navigationItems: () => [],
    isAuthenticated: false,
    maxWidth: 'ui:max-w-7xl',
    sticky: true,
    blurAmount: 'ui:backdrop-blur-xl',
    registerLabel: 'Regístrate' ,
    loginLabel: 'Log in',
})

const isScrolled = ref(false);
const handleScroll = () => {
    isScrolled.value = window.scrollY > 20;
};

const emit = defineEmits<{
    (e: 'login'): void;
    (e: 'logout'): void;
    (e: 'profile'): void;
}>();


onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
    <header 
        :class="[
            'ui:fixed ui:top-0 ui:left-0 ui:z-50 ui:w-full ui:px-6 ui:pointer-event-none',
        ]"
    >

        <div :class="[
                    'ui:mx-auto ui:transition-all ui:duration-500 ui:ease-in-out ui:pointer-events-auto',
                    isScrolled ? 'ui:max-w-5xl ui:mt-2' : 'ui:max-w-7xl ui:mt-6'
                ]">

        
            <div 
                :class="[
                    'ui:flex ui:items-center ui:justify-between ui:px-6 ui:py-3 ui:rounded-2xl ui:border ui:shadow-lg ui:transition-all ui:duration-500', 
                    isScrolled
                        ? 'ui:bg-white/70 ui:backdrop-blur-md ui:border-gray-200/50' 
                        : 'ui:bg-white ui:border-slate-100'
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
                        v-for="item in props.navigationItems" 
                        :key="item.title"
                        :to="item.to"
                        class="ui:flex ui:items-center ui:gap-2 ui:px-4 ui:py-2 ui:text-sm ui:font-medium ui:text-gray-500 ui:rounded-full ui:border ui:border-transparent ui:transition-all ui:hover:bg-gray-100 ui:hover:text-black ui:no-underline ui:!duration-300"
                        active-class="ui:bg-gray-100 ui:!text-black ui:border-gray-200"
                    >
                        <i v-if="item.icon" :class="[item.icon, 'ui:text-[10px]']"></i>
                        {{ item.title }}
                    </router-link>
                </nav>

                <div class="ui:flex ui:items-center ui:gap-3">
                    <slot name="actions">

                        <template v-if="!props.isAuthenticated">
                            <BaseButton
                                icon="pi pi-sign-in"
                                :label="props.loginLabel"
                                size="small"
                                rounded
                                class="ui:!bg-black ui:!border-none ui:!px-4 ui:!py-2"
                                @click="emit('login')"
                            />
                        </template>

                        <template v-else>
                            <BaseButton
                                icon="pi pi-user"
                                size="small"
                                rounded
                                class="ui:!bg-gray-100 ui:!text-black ui:!border-gray-200"
                                @click="emit('profile')"
                            />
                            <BaseButton
                                icon="pi pi-sign-out"
                                size="small"
                                rounded
                                class="ui:!text-gray-400 ui:hover:!text-red-500 ui:hover:!border-red-500 ui:!transition-colors ui:!bg-transparent ui:!border-gray-200 ui:!cursor-pointer ui:!transition-transform ui:hover:!scale-110"
                                @click="emit('logout')"
                            />
                        </template>
                    </slot>
                </div>
            </div>
        </div>
    </header>
</template>