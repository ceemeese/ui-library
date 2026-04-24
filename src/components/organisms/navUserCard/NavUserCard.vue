<script setup lang="ts">
import Avatar from 'primevue/avatar';

interface Props {
    username: string,
    userRole: string,
    nagivateTo?: string,
}
const props = withDefaults(defineProps<Props>(), {
    username: 'Admin Usuario',
    userRole: 'Admin', 
    nagivateTo: 'profile'
})

const emit = defineEmits(['logout']);
const getInitial = (name: string) => name ? name.charAt(0).toUpperCase() : 'U';
</script>

<template>
        <div class="ui:flex ui:items-center ui:gap-3 ui:p-1 ui:rounded-2xl ui:border ui:border-gray-200/50 ui:bg-white ui:shadow-xl ui:backdrop-blur-xl ">
            <router-link 
                :to="{ name: props.nagivateTo }" 
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
</template>