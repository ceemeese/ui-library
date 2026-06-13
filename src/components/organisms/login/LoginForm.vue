<script setup lang="ts">
import { Form } from '@primevue/forms';
import { reactive } from 'vue';
import BaseInput from '../../atoms/BaseInput.vue';
import BaseButton from '../../atoms/BaseButton.vue';
import BasePassword from '../../atoms/BasePassword.vue';
import type { LoginValues } from '../../../types/forms';

defineProps<{
  forgotPasswordLabel?: string;
  forgotPasswordRoute?: string;
  registerLabel?: string;
  registerRoute?: string;
  loading?: boolean;
  resolver?: any;
}>();

const formValues : LoginValues = reactive({
    username: '',
    password: '',
})

const emit = defineEmits<{
  (e: 'submit', values: LoginValues): void
}>();

const onFormSubmit = (e: any) => {
  if (e.valid) {
    emit('submit', e.values as LoginValues);
  }
};



</script>


<template>
    <div class="ui:max-w-md ui:mx-auto ui:p-8 ui:bg-white ui:rounded-2xl ui:shadow-xl ui:border ui:border-gray-100 ui:shrink-0">
        <div class="ui:text-center ui:mb-8">
            <h2 class="ui:text-2xl ui:font-extrabold ui:text-gray-900">Bienvenido</h2>
            <p class="ui:text-gray-500 ui:mt-2">Introduce tus credenciales para acceder</p>
        </div>

        <Form 
        :initialValues="formValues"
        @submit="onFormSubmit" 
        class="ui:flex ui:flex-col"
        :resolver="resolver"
        v-slot="$form"
        >
            <BaseInput
                v-model="formValues.username"
                name="username" 
                label="Usuario" 
                icon="pi-user"
                :error="$form.username?.error?.message"
            />

            <BasePassword 
                v-model="formValues.password"
                name="password" 
                label="Contraseña"
                :error="$form.password?.error?.message"
            />

            <div v-if="forgotPasswordRoute" class="ui:flex ui:justify-center ui:mt-2">
                <RouterLink 
                :to="{ name: forgotPasswordRoute }" 
                class="ui:text-sm ui:font-medium ui:hover:text-blue-500 ui:transition-colors"
                >
                {{ forgotPasswordLabel || '¿Has olvidado tu contraseña?' }}
                </RouterLink>
            </div>

            <BaseButton 
                type="submit" 
                label="Entrar" 
                class="ui:mt-6 ui:w-full ui:py-3"
                :loading="loading"
            />
        
            <p v-if="registerRoute" class="ui:text-center ui:text-xs ui:text-gray-500 ui:mt-6">
                ¿No tienes cuenta? 
                <RouterLink class="ui:font-semibold ui:text-blue-600 ui:hover:underline" :to="{ name: registerRoute }">{{ registerLabel || 'Regístrate gratis' }}</RouterLink>
            </p>
        </Form>
    </div>
</template>
