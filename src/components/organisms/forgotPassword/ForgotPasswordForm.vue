<script setup lang="ts">
import { Form } from '@primevue/forms';
import BaseInput from '../../atoms/BaseInput.vue';
import BaseButton from '../../atoms/BaseButton.vue';
import BaseCard from '../../atoms/BaseCard.vue';
import type { ForgotValues } from '../../../types/forms.ts';
import { reactive } from 'vue';

defineProps<{
  backRoute?: string;
  loading?: boolean;
  resolver?: any;
}>();

const formForgotValues : ForgotValues = reactive({
    email: '',
})

const emit = defineEmits<{
  (e: 'submit', values: ForgotValues): void
}>();

const onSubmit = (e: any) => { 
    if (e.valid) {
        emit('submit', e.values as ForgotValues); 
    }
};

</script>

<template>
    <BaseCard padding="p-8">
       <div class="ui:mb-6">
            <h2 class="ui:text-xl ui:font-bold ui:text-gray-900 ui:text-center">¿Problemas de acceso?</h2>
            <p class="ui:text-sm ui:text-gray-500 ui:mt-1 ui:text-center">
                Indica tu email y te enviaremos enlace de recuperación
            </p>
        </div>

        <Form 
        :initial-values="formForgotValues"
        @submit="onSubmit" 
        class="ui:flex ui:flex-col ui:gap-4"
        :resolver="resolver"
        v-slot="$form"
        >
            <BaseInput 
                v-model="formForgotValues.email"
                name="email" 
                label="Email" 
                icon="pi-envelope"
                type="email"
                :error="$form.email?.error?.message" />
            <BaseButton 
                type="submit" 
                label="Enviar enlace" 
                class="ui:w-full" 
                :loading="loading" />
            <RouterLink :to="{ name: backRoute }" class="ui:text-center ui:text-xs">
                Volver
            </RouterLink>
        </Form>
    </BaseCard>
</template>