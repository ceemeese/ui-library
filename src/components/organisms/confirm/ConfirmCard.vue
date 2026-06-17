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
            <div class="ui:flex ui:flex-col ui:items-center ui:text-center ui:gap-3">
                <ProgressSpinner aria-label="Loading" style="width: 25px; height: 25px" strokeWidth="3" fill="transparent"/>
                <p class="ui:text-gray-500">Confirmando...</p>
            </div>
        </template>

        <template v-else-if="status === 'success'">
            <div class="ui:flex ui:flex-col ui:items-center ui:text-center ui:gap-4">
                <i class="pi pi-check-circle ui:text-5xl ui:text-green-400"></i>
                <div>
                    <h1 class="ui:text-2xl ui:font-semibold ui:text-gray-900">{{ titleMessage }}</h1>
                    <p class="ui:text-gray-500">{{ messageConfirmation}}</p>
                </div>
                <BaseButton
                    :icon="iconButtonSuccess"
                    :label="returnLabel"
                    size="small"
                    rounded
                    class="ui:!bg-black ui:!border-none ui:!px-4 ui:!py-2"
                    @click="emit('goTo')"
                />
            </div>
                
            </template>

            <template v-else>
                <div class="ui:flex ui:flex-col ui:items-center ui:text-center ui:gap-4">
                    <i class="pi pi-times-circle ui:text-5xl ui:text-red-400"></i>
                    <div>
                        <h1 class="ui:text-2xl ui:font-semibold ui:text-gray-900"> {{ errorTitle }}</h1>
                        <p class="ui:text-gray-500">{{ errorMessage }}</p>
                    </div>
                    <BaseButton
                        icon="pi pi-arrow-left"
                        :label="backLabel"
                        size="small"
                        rounded
                        class="ui:!bg-black ui:!border-none ui:!px-4 ui:!py-2"
                        @click="emit('back')"
                    />
                </div>
            </template>
    </BaseCard> 
</template>
