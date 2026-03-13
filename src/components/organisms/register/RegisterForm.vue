<script setup lang="ts">
import { Form, type FormSubmitEvent } from '@primevue/forms';
import { reactive } from 'vue';

import type { RegisterValues } from '../../../types/forms';
import BaseInput from '../../atoms/BaseInput.vue';
import BaseButton from '../../atoms/BaseButton.vue';
import BasePassword from '../../atoms/BasePassword.vue';

import { registerSchema } from './register.schema';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { RouterLink } from 'vue-router';

const resolver = zodResolver(registerSchema);

const formValues = reactive<RegisterValues>({
    dni : '',
    name: '',
    lastName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
})

const emit = defineEmits<{
    (e: 'submit', values: RegisterValues) : void;
}>();

const onFormSubmit = (e: FormSubmitEvent) => {
  if (e.valid) {
    emit('submit', e.values as RegisterValues);
  }
};


</script>

<template>

    <div class="ui:max-w-2xl ui:mx-auto ui:p-8 ui:bg-white ui:rounded-2xl ui:shadow-xl ui:border ui:border-gray-100 ui:shrink-0">
        <div class="ui:text-center ui:mb-2">
            <h2 class="ui:text-2xl ui:font-extrabold ui:text-gray-900">Crea tu cuenta</h2>
        </div>

        <Form
        :initialValues="formValues"
        @submit="onFormSubmit"
        class="ui:flex ui:flex-col"
        :resolver="resolver"
        v-slot="$form"
        >
            <div class="ui:grid ui:grid-cols-2 ui:gap-2">
                <BaseInput
                v-model="formValues.name"
                name="name" 
                label="Nombre"
                :error="$form.name?.error?.message"
                />
                <BaseInput
                v-model="formValues.lastName"
                name="lastName" 
                label="Apellido"
                :error="$form.lastName?.error?.message"
                />
            </div>

            <div class="ui:grid ui:grid-cols-2 ui:gap-2">
                <BaseInput
                v-model="formValues.dni"
                name="dni" 
                label="DNI"
                :error="$form.dni?.error?.message" 
                />
                <BaseInput
                v-model="formValues.username"
                name="username" 
                label="Alias"
                :error="$form.username?.error?.message"
                />
            </div>

            <BaseInput
            v-model="formValues.email"
            name="email" 
            label="Email" 
            :error="$form.email?.error?.message"
            />


            <div class="ui:grid ui:grid-cols-2 ui:gap-2">
                <BaseInput
                v-model="formValues.phoneNumber"
                name="phoneNumber" 
                label="Teléfono"
                :error="$form.phoneNumber?.error?.message"
                />
              
                <BasePassword
                v-model="formValues.password"
                name="password" 
                label="Contraseña"
                :error="$form.password?.error?.message"
                />
            </div>
            <BaseButton 
            type="submit" 
            label="Registrar" 
            class="ui:mt-6 ui:w-full ui:py-2"
            />

            <p class="ui:text-center ui:text-sm ui:text-gray-500 ui:mt-2">
                ¿Tienes cuenta? 
                <RouterLink class="ui:font-semibold ui:text-blue-600 ui:hover:underline" to="/login">
                    Inicia sesión
                </RouterLink>
            </p>

        </Form>
    </div>
</template>