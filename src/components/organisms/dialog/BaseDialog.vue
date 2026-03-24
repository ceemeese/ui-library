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
    localData.value = data ? {...data} : {}
    visible.value = true;
}

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

        const validatedData = { ...localData.value, ...e.values}
        emit('update:modelValue', validatedData);
        emit('save', validatedData);
        visible.value = false;
    }
}

defineExpose({open});

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
            </Form>

                <template #footer>
                    <div class="ui:flex ui:justify-end ui:gap-2">
                        <BaseButton label="Cancelar" severity="secondary" @click="visible = false" />
                        <BaseButton label="Guardar" type="submit" form="base-dialog-form" />
                    </div>
                </template>
            
        </Dialog>
</template>