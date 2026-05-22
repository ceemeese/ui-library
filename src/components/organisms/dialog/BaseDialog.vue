<script setup lang="ts">
import { ref } from 'vue';
import BaseButton from '../../atoms/BaseButton.vue';
import type { BaseInputProps } from '../../../types/forms';
import Dialog from 'primevue/dialog';
import BaseInput from '../../atoms/BaseInput.vue';
import { Form, type FormSubmitEvent } from '@primevue/forms';


const visible = ref<boolean>(false);
const localData = ref<Record<string, any>>({});

const open = (data: any) => {

    const preparedData = data ? {...data} : {};

    props.inputsDialog?.forEach(input => {
        const field = input.field;
        if (!field) return;

        const value = preparedData[field];

        if (input.type === 'time' && typeof value === 'string' && value) {
            const [hours, minutes] = value.split(':');
            const date = new Date();
            date.setHours(parseInt(hours!) || 0, parseInt(minutes!) || 0, 0, 0);

            preparedData[field] = date;
        }
    });

    localData.value = preparedData;
    visible.value = true;
}

const close = () => {
    visible.value = false;
};

interface Props {
    labelButton?: string;
    icon?: string;
    header?: string;
    subtitle?: string;
    inputsDialog?: BaseInputProps[]
    modelValue?: Record<string, any>
    resolver?: any;
}

const props = withDefaults(defineProps<Props>(), {
    header: 'Dialog'
});


const emit = defineEmits(['update:modelValue', 'save']);

const handleSave = (e: FormSubmitEvent) => {
    if (e.valid) {

        const validatedData = { ...localData.value, ...e.values};

        props.inputsDialog?.forEach(input => {
            const field = input.field;
            if(!field) return;

            if (input.type === 'time' && validatedData[field] instanceof Date) {
                const dateObj = validatedData[field] as Date;

                const hours = String(dateObj.getHours()).padStart(2, '0');
                const minutes = String(dateObj.getMinutes()).padStart(2, '0');

                validatedData[field] = `${hours}:${minutes}`
            }
        });

        emit('update:modelValue', validatedData);
        emit('save', validatedData);
        visible.value = false;
    }
}

const dialogPT = {
    pcCloseButton: {
        root: {
            class: [
                'ui:!ring-0 ui:!outline-none ui:!border-none ui:!shadow-none',
                'ui:!text-slate-400 ui:hover:!text-slate-700 ui:!bg-transparent ui:hover:!bg-slate-100',
                'ui:!transition-colors ui:!duration-200'
            ]
        }
    },
};

defineExpose({open, close});

</script>

<template>
        <BaseButton
            v-if="props.labelButton || props.icon"
            :label=props.labelButton
            :icon="props.icon"
            @click="visible = true"
            class="'ui:!p-2'" 
            text 
            rounded />
        <Dialog
            v-model:visible="visible"
            modal
            :header="props.header"
            :style="{ width: '30rem' }"
            :pt="dialogPT"
        >
            <span v-if="props.subtitle" class="ui:text-surface-500 ui:dark:text-surface-400 ui:block ui:mb-8" > 
                {{ props.subtitle }}
            </span>

            <Form 
                id="base-dialog-form"
                :initial-values="localData"
                :resolver="resolver"
                @submit="handleSave" 
                v-slot="$form">
                    <div v-for="input in props.inputsDialog" :key="input.field" class="ui:mb-4">
                        <BaseInput 
                            v-bind="input"
                            :name="input.field"
                            :label="input.label"
                            v-model="localData[input.field!]"
                            :error="$form[input.field!]?.error?.message"/>
                    </div>
                    <div class="ui:mt-2">
                        <slot :form="$form" :data="localData"></slot>
                    </div>
            </Form>

            <template #footer>
                <slot name="footer" :data="localData">
                    <div class="ui:flex ui:justify-end ui:gap-2">
                        <BaseButton label="Cancelar" severity="secondary" @click="close" />
                        <BaseButton label="Guardar" type="submit" form="base-dialog-form" />
                    </div>
                </slot>
            </template>
            
        </Dialog>
</template>