import type { App, Plugin } from 'vue';

//importar componentes propios
import BaseInput from './components/atoms/BaseInput.vue';
import BaseButton from './components/atoms/BaseButton.vue';
import BasePassword from './components/atoms/BasePassword.vue';
import LoginForm from './components/organisms/login/LoginForm.vue';

//exportacion individual
export { BaseInput, BaseButton, BasePassword, LoginForm };

//Plugin para regitrar todo de golpe
const UILibrary: Plugin = {
  install(app: App) {

    // Registro de los componentes de librería
    app.component('BaseInput', BaseInput);
    app.component('BaseButton', BaseButton);
    app.component('BasePassword', BasePassword);
    app.component('LoginForm', LoginForm);

    console.log('✅ UI Library: PrimeVue y componentes locales registrados.');
  }
};

export default UILibrary;