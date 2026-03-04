<script setup lang="ts">


interface NavItem {
    title: string;
    to: string | Record<string, any>;
    icon?: string;
}

interface SocialItem {
    icon: string;
    link: string;
    label: string;
}

defineProps({
    titleLogo: { type: String, default: 'Logo' },
    iconLogo: { type: String, default: 'pi pi-bolt' },
    navigationItems: {
        type: Array as () => NavItem[],
        default: () => []
    },
    socialItems: {
        type: Array as () => SocialItem[],
        default: () => [
            { icon: 'pi pi-instagram', link: '#', label: 'Instagram' },
            { icon: 'pi pi-twitter', link: '#', label: 'Twitter' },
            { icon: 'pi pi-linkedin', link: '#', label: 'LinkedIn' }
        ]
    },
    maxWidth: { type: String, default: 'ui:max-w-7xl' },
    blurAmount: { type: String, default: 'ui:backdrop-blur-md' }
});

</script>

<template>
    <footer class="ui:w-full ui:pb-6 ui:pt-12 ui:px-4">
        
        <div 
            :class="[
                'ui:mx-auto ui:bg-white/80 ui:backdrop-blur-xl ui:border ui:border-gray-200/50 ui:shadow-lg ui:rounded-[2rem] ui:px-8 ui:py-6',
                'ui:max-w-10xl' 
            ]"
        >
            <div class="ui:grid ui:grid-cols-1 ui:md:grid-cols-3 ui:gap-6 ui:items-center">
                
                <div class="ui:flex ui:justify-center md:ui:justify-start">
                    <router-link :to="{ name: 'home' }" class="ui:no-underline">
                        <slot name="logo">
                            <div class="ui:flex ui:items-center ui:gap-2">
                                <div class="ui:bg-black ui:w-8 ui:h-8 ui:flex ui:items-center ui:justify-center ui:rounded-lg">
                                    <i :class="[iconLogo, 'ui:text-white ui:text-xs']"></i>
                                </div>
                                <span class="ui:font-bold ui:text-lg ui:text-black">{{ titleLogo }}</span>
                            </div>
                        </slot>
                    </router-link>
                </div>

                <nav class="ui:flex ui:flex-wrap ui:justify-center ui:gap-x-6 ui:gap-y-2">
                    <router-link
                        v-for="item in navigationItems" 
                        :key="item.title"
                        :to="item.to"
                        class="ui:text-sm ui:font-semibold ui:text-gray-500 ui:hover:text-black ui:transition-colors ui:no-underline"
                    >
                        {{ item.title }}
                    </router-link>
                </nav>

                <div class="ui:flex ui:justify-center ui:gap-2">
                    <a 
                        v-for="social in socialItems" 
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
                <p>© 2026 {{ titleLogo }}. Todos los derechos reservados.</p>
                <div class="ui:flex ui:gap-4 ui:font-medium">
                    <a href="#" class="ui:hover:text-black ui:no-underline">Privacidad</a>
                    <a href="#" class="ui:hover:text-black ui:no-underline">Términos</a>
                </div>
            </div>
        </div>
    </footer>
</template>