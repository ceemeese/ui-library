<script setup lang="ts">
import { Form } from '@primevue/forms';
import { reactive } from 'vue';

import BaseInput from '../../atoms/BaseInput.vue';
import BaseButton from '../../atoms/BaseButton.vue';
import BasePassword from '../../atoms/BasePassword.vue';

export interface InitialValues {
    username: string,
    password: string,
}

const initialValues : InitialValues = reactive({
    username: '',
    password: '',
})

const emit = defineEmits<{
  (e: 'submit', values: InitialValues): void
}>();

const onFormSubmit = (e: any) => {
  if (e.valid) {
    emit('submit', e.values);
  }
};



</script>


<template>
  <div class="ui:login-card ui:max-w-md ui:mx-auto ui:p-8 ui:bg-white ui:rounded-2xl ui:shadow-xl ui:border ui:border-gray-100 ui:shrink-0">
    <div class="ui:text-center ui:mb-8">
      <h2 class="ui:text-3xl ui:font-extrabold ui:text-gray-900">Bienvenido</h2>
      <p class="ui:text-gray-500 ui:mt-2">Introduce tus credenciales para acceder</p>
    </div>

    <Form 
      :initialValues="initialValues"
      @submit="onFormSubmit" 
      class="ui:flex ui:flex-col ui:gap-4"
    >
      <BaseInput
        v-model="initialValues.username"
        name="username" 
        label="Usuario" 
        icon="pi-user"
      />

      <BasePassword 
        v-model="initialValues.password"
        name="password" 
        label="Contraseña"
      />

      <div class="flex justify-end mt-1">
        <a href="#" class="ui:text-sm ui:font-medium ui:text-blue-600 ui:hover:text-blue-500 ui:transition-colors">
          ¿Has olvidado tu contraseña?
        </a>
      </div>

      <BaseButton 
        type="submit" 
        label="Entrar" 
        class="ui:mt-6 ui:w-full ui:py-3"
      />
      
      <p class="ui:text-center ui:text-sm ui:text-gray-500 ui:mt-6">
        ¿No tienes cuenta? 
        <a href="#" class="ui:font-semibold ui:text-blue-600 ui:hover:underline">Regístrate gratis</a>
      </p>
    </Form>
  </div>
</template>
