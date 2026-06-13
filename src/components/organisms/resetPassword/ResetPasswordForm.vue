<script setup lang="ts">
import { Form } from '@primevue/forms';
import BaseButton from '../../atoms/BaseButton.vue';
import BaseCard from '../../atoms/BaseCard.vue';
import type { ResetPasswordValues } from '../../../types/forms.ts';
import { reactive } from 'vue';
import BasePassword from '../../atoms/BasePassword.vue';

defineProps<{
    mode: 'reset' | 'change';
    loading?: boolean;
    resolver?: any;
    card?: boolean;
}>();

const formResetValues : ResetPasswordValues = reactive({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
})

const emit = defineEmits<{
  (e: 'submit', values: ResetPasswordValues): void
}>();

const onSubmit = (e: any) => { 
    if (e.valid) {
        emit('submit', e.values as ResetPasswordValues); 
    }
};

</script>

<template>
    <BaseCard v-if="card" padding="p-8">
       <div class="ui:mb-6">
            <h2 class="ui:text-xl ui:font-bold ui:text-gray-900 ui:text-center">{{ mode === 'change' ? 'Cambiar contraseña' : 'Nueva contraseña' }}</h2>
            <p class="ui:text-sm ui:text-gray-500 ui:mt-1 ui:text-center">
                Establece la clave para tu cuenta
            </p>
        </div>

        <Form 
        :initial-values="formResetValues"
        @submit="onSubmit" 
        class="ui:flex ui:flex-col ui:gap-4"
        :resolver="resolver"
        v-slot="$form"
        >
            <div class="ui:flex ui:flex-col ui:gap-1">
                <BasePassword 
                    v-if="mode === 'change'"
                    v-model="formResetValues.oldPassword"
                    name="oldPassword" 
                    label="Contraseña actual"
                    :error="$form.oldPassword?.error?.message"
                />

                <BasePassword 
                    v-model="formResetValues.newPassword"
                    name="newPassword" 
                    label="Contraseña"
                    :error="$form.newPassword?.error?.message"
                />

                <BasePassword 
                    v-model="formResetValues.confirmPassword"
                    name="confirmPassword" 
                    label="Confirmar contraseña"
                    :error="$form.confirmPassword?.error?.message"
                />
            </div>

            <BaseButton 
                type="submit" 
                label="Enviar" 
                class="ui:w-full" 
                :loading="loading" />
        </Form>
    </BaseCard>
</template>