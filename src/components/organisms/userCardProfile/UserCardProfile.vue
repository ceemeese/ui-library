<script setup lang="ts">
import BaseButton from '../../atoms/BaseButton.vue';
import BaseCard from '../../atoms/BaseCard.vue';
import Avatar from 'primevue/avatar';

interface Props {
    title?: string;
    image?: string;
    initials?: string;
    mainText?: string;
    subtext?: string;
    size?: 'large' | 'xlarge' | undefined;
    shape?: 'circle' | undefined;
    padding?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['edit']);

const onClickEdit = () => {
    emit('edit');
};


</script>


<template>
    <BaseCard
        :padding="props.padding"
    >
        <div v-if="title" class="ui:px-4 ui:pt-4 ui:border-b ui:border-slate-100 ui:pb-2">
            <h3 class="ui:text-sm ui:font-semibold ui:text-slate-500 ui:uppercase">
                {{ title }}
            </h3>
        </div>

        <div class="ui:flex ui:items-center ui:gap-6 ui:p-4 ui:relative">
            <Avatar
            :image="props.image"
            :label="!image ? initials : undefined"
            :size="size"
            :shape="shape"
            />

            <div class="ui:flex-1">
                <h2 class="ui:text-xl ui:font-bold ui:text-slate-800"> {{ mainText }}</h2>
                <p class="ui:text-slate-500"> {{ subtext }}</p>

                <div class="ui:mt-2">
                    <slot name="extra-info"></slot>
                </div>
            </div>

            <div class="ui:relative ui:z-[100]">
                <slot name="actions">
                    <BaseButton
                        label="Editar"
                        variant="outlined"
                        size="small"
                        icon="pi pi-user-edit"
                        rounded
                        @click="onClickEdit"
                    />
                </slot>
            </div>
            
        </div>
    </BaseCard>
</template>