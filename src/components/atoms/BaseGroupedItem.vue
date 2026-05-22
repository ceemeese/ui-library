<script setup lang="ts">
defineProps<{
    title: string;
    subtitle?: string;
    items: any[];
    icon?: string;
}>();

const getMapsUrl = (address: string) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
};
</script>

<template>
    <div class="ui:space-y-5">
        
        <div class="ui:flex ui:items-center ui:justify-between ui:border-b ui:border-slate-200 ui:pb-4">
            <div class="ui:flex ui:items-center ui:gap-4 ">
                <img v-if="icon" :src="icon" class="ui:w-12 ui:h-12 ui:bg-gray-300 ui:rounded-xl" alt="Clima">
                <div>
                    <h3 class="ui:text-2xl ui:font-black ui:text-slate-800 ui:uppercase ui:tracking-tight">
                        {{ title }}
                    </h3>
                    <a 
                        v-if="subtitle" 
                        :href="getMapsUrl(subtitle)"
                        target="_blank"
                        class="ui:flex ui:items-center ui:gap-2 ui:text-gray-500 ui:text-sm hover:ui:text-slate-900 ui:transition-colors ui:group/address"
                        title="Ver en Google Maps"
                    >
                        <i class="pi pi-map-marker ui:text-[#C8E794]"></i>
                        <span class="ui:underline ui:decoration-dotted group-hover/address:ui:decoration-solid">
                            {{ subtitle }}
                        </span>
                    </a>
                </div>
            </div>
            <slot name="header-action" :count="items.length"></slot>
        </div>

        <div class="ui:flex ui:gap-4 ui:overflow-x-auto ui:p-6 ui:scrollbar-hide">
            <template v-for="item in items" :key="item.id">
                <slot name="card" :item="item"></slot>
            </template>
        </div>
    </div>
</template>