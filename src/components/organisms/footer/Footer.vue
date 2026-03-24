<script setup lang="ts">
import type { NavItem, SocialItem } from '../../../types/navigation';

interface Props {
    titleLogo?: string;
    iconLogo?: string;
    navigationItems?: NavItem[];
    socialItems?: SocialItem[];
    maxWidth?: string;
    blurAmount?: string;
}

const props = withDefaults(defineProps<Props>(), {
    navigationItems: () => [],
    socialItems: () => [
        { icon: 'pi pi-instagram', link: '#', label: 'Instagram' },
        { icon: 'pi pi-twitter', link: '#', label: 'Twitter' },
        { icon: 'pi pi-linkedin', link: '#', label: 'LinkedIn' }
    ],
    maxWidth: 'ui:max-w-7xl',
    blurAmount: 'ui:backdrop-blur-xl'
})

</script>

<template>
    <footer class="ui:w-full ui:pb-6 ui:pt-12 ui:px-6">
        
        <div 
            :class="[
                'ui:mx-auto ui:bg-white/70 ui:border ui:border-gray-200/50 ui:shadow-lg ui:rounded-2xl ui:px-8 ui:py-6 ', props.maxWidth, props.blurAmount
            ]"
        >
            <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-3 ui:gap-6 ui:items-center">
                
                <div class="ui:flex ui:justify-center md:ui:justify-start">
                    <router-link :to="{ name: 'home' }" class="ui:no-underline">
                        <slot name="logo">
                            <div class="ui:flex ui:items-center ui:gap-2">
                                <div class="ui:bg-black ui:w-8 ui:h-8 ui:flex ui:items-center ui:justify-center ui:rounded-lg">
                                    <i :class="[props.iconLogo, 'ui:text-white ui:text-xs']"></i>
                                </div>
                                <span class="ui:font-bold ui:text-lg ui:text-black">{{ props.titleLogo }}</span>
                            </div>
                        </slot>
                    </router-link>
                </div>

                <nav class="ui:flex ui:flex-wrap ui:justify-center ui:gap-x-6 ui:gap-y-2">
                    <router-link
                        v-for="item in props.navigationItems" 
                        :key="item.title"
                        :to="item.to"
                        class="ui:text-sm ui:font-semibold ui:text-gray-500 ui:hover:text-black ui:transition-colors ui:no-underline"
                    >
                        {{ item.title }}
                    </router-link>
                </nav>

                <div class="ui:flex ui:justify-center ui:gap-2">
                    <a 
                        v-for="social in props.socialItems" 
                        :key="social.label"
                        :href="social.link"
                        class="ui:flex ui:items-center ui:justify-center ui:w-8 ui:h-8 ui:rounded-xl ui:bg-gray-200 ui:text-gray-400 ui:transition-all ui:hover:bg-black ui:hover:text-white"
                    >
                        <i :class="[social.icon]"></i>
                    </a>
                </div>
            </div>

            <div class="ui:w-full ui:h-px ui:bg-gray-100/60 ui:my-5"></div>

            <div class="ui:flex ui:flex-col md:ui:flex-row ui:justify-between ui:items-center ui:gap-2 ui:text-[10px] ui:text-gray-400">
                <p>© 2026 {{ props.titleLogo }}. Todos los derechos reservados.</p>
                <div class="ui:flex ui:gap-4 ui:font-medium">
                    <a href="#" class="ui:hover:text-black ui:no-underline">Privacidad</a>
                    <a href="#" class="ui:hover:text-black ui:no-underline">Términos</a>
                </div>
            </div>
        </div>
    </footer>
</template>