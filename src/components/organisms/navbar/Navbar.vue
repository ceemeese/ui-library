<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';
import Menu from 'primevue/menu';
import Avatar from 'primevue/avatar';
import BaseCard from '../../atoms/BaseCard.vue';


const props = defineProps({
    username: { type: String, default: 'Admin Usuario' },
    userRole: { type: String, default: 'Admin' }, 
    navigationItems: {
        type: Array as () => MenuItem[],
        default: () => []
    }
});

const emit = defineEmits(['logout']);
const getInitial = (name: string) => name ? name.charAt(0).toUpperCase() : 'U';
</script>

<template>
    <nav class="ui:w-72 ui:h-full ui:z-50 ui:flex ui:flex-col">
        <BaseCard padding="ui:p-4">  
            <Menu 
                :model="props.navigationItems" 
                class="ui:!w-full ui:!h-full ui:!bg-transparent ui:!border-none"
            >
                <template #start>
                    <router-link 
                    :to="{ name: 'home' }"
                    class="ui:flex ui:flex-col ui:items-center ui:gap-2 ui:py-4 ui:mb-2 ui:no-underline">
                        <slot name="logo">
                            <div class="ui:bg-black ui:w-12 ui:h-12 ui:flex ui:items-center ui:justify-center ui:rounded-2xl ui:shadow-lg">
                                <i class="pi pi-bolt ui:text-white ui:text-xl"></i>
                            </div>
                            <span class="ui:text-xl ui:font-bold ui:text-black">Logo<span class="ui:text-gray-400">App</span></span>
                        </slot>
                    </router-link>
                </template>

                <template #item="{ item }">
                    <router-link v-if="item.to" :to="item.to" v-slot="{ href, navigate, isActive }">
                        <a 
                        :href="href" 
                        @click="navigate" 
                        class="ui:flex ui:items-center ui:gap-3 ui:px-4 ui:py-2"
                        :class="[
                            isActive 
                        ? 'ui:bg-black ui:text-white' 
                        : ''
                        ]">
                            <span :class="[item.icon, 'ui:text-lg']" />
                            <span class="ui:text-sm ui:font-semibold">{{ item.label }}</span>
                        </a>
                    </router-link>
                </template>


                <template #end>
                    
                    <div class="ui:w-full ui:pt-4">
                        <div class="ui:flex ui:items-center ui:gap-3 ui:p-1 ui:bg-gray-100/50 ui:rounded-[1.5rem] ui:border ui:border-gray-200/50">
                            <router-link 
                                :to="{ name: 'profile' }" 
                                title="Ver mi perfil"
                                class="ui:no-underline ui:transition-transform ui:hover:scale-110 ui:duration-300 px-1"> 
                                <Avatar 
                                    :label="getInitial(props.username)" 
                                    class="ui:!bg-black ui:!text-white ui:shadow-md"
                                    shape="circle" 
                                />
                            </router-link>

                            <div class="ui:flex ui:flex-col ui:overflow-hidden ui:flex-1">
                                <span class="ui:font-bold ui:text-sm ui:text-black ui:truncate">{{ props.username }}</span>
                                <span class="ui:text-[10px] ui:font-bold ui:text-gray-400 ui:uppercase">{{ props.userRole }}</span>
                            </div>

                            <button 
                            @click="emit('logout')" 
                            class="ui:p-2 ui:text-gray-400 ui:hover:text-red-500 ui:transition-colors ui:bg-transparent ui:border-0 ui:cursor-pointer ui:transition-transform ui:hover:scale-115 ui:duration-300">
                                <i class="pi pi-sign-out"></i>
                            </button>
                        </div>
                    </div>
                </template>
            </Menu>
        </BaseCard>
    </nav>
</template>


<style scoped>
</style>