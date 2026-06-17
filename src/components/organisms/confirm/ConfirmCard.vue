<script setup lang="ts">
import BaseButton from '../../atoms/BaseButton.vue';
import BaseCard from '../../atoms/BaseCard.vue';
import ProgressSpinner from 'primevue/progressspinner';

interface ConfirmCardProps {
    status?: 'loading' | 'success' | 'error';
    titleMessage?: string;
    messageConfirmation?: string;
    iconButtonSuccess?: string;
    returnLabel?: string;
    backLabel?: string;
    errorTitle?: string;
    errorMessage?: string;
}

defineProps<ConfirmCardProps>();

const emit = defineEmits<{
    (e: 'back'): void;
    (e: 'goTo'): void;
}>();

</script>

<template>
    <BaseCard padding="p-8">
        <template v-if="status === 'loading'">
            <ProgressSpinner aria-label="Loading" style="width: 25px; height: 25px" strokeWidth="3" fill="transparent"/>
            <p class="ui:text-gray-500">Confirmando...</p>
        </template>

        <template v-else-if="status === 'success'">
                <i class="pi pi-check-circle ui:text-5xl ui:text-green-500 ui:mb-4"></i>
                <h1 class="ui:text-2xl ui:font-semibold ui:text-gray-900 ui:mb-2">{{ titleMessage }}</h1>
                <p class="ui:text-gray-500 ui:mb-6">{{ messageConfirmation}}</p>
                <BaseButton
                    :icon="iconButtonSuccess"
                    :label="returnLabel"
                    size="small"
                    rounded
                    class="ui:!bg-black ui:!border-none ui:!px-4 ui:!py-2"
                    @click="emit('goTo')"
                />
            </template>

            <template v-else>
                <i class="pi pi-times-circle ui:text-5xl ui:text-red-400 ui:mb-4"></i>
                <h1 class="ui:text-2xl ui:font-semibold ui:text-gray-900 ui:mb-2"> {{ errorTitle }}</h1>
                <p class="ui:text-gray-500 ui:mb-6">{{ errorMessage }}</p>
                <BaseButton
                    icon="pi pi-arrow-left"
                    :label="backLabel"
                    size="small"
                    rounded
                    class="ui:!bg-black ui:!border-none ui:!px-4 ui:!py-2"
                    @click="emit('back')"
                />
            </template>
    </BaseCard> 
</template>
