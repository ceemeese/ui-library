import type { App, Plugin } from 'vue';

//importar componentes propios
import BaseInput from './components/atoms/BaseInput.vue';
import BaseButton from './components/atoms/BaseButton.vue';
import BasePassword from './components/atoms/BasePassword.vue';
import LoginForm from './components/organisms/login/LoginForm.vue';
import RegisterForm from './components/organisms/register/RegisterForm.vue';
import Header from './components/organisms/header/Header.vue';
import HeaderM from './components/organisms/headerm/HeaderM.vue';
import Footer from './components/organisms/footer/Footer.vue';
import Navbar from './components/organisms/navbar/Navbar.vue';
import BaseDataTable from './components/organisms/datatable/BaseDataTable.vue'
import BaseCard from './components/atoms/BaseCard.vue';
import BaseDialog from './components/organisms/dialog/BaseDialog.vue'
import UserCardProfile from './components/organisms/userCardProfile/UserCardProfile.vue';
import BaseInfoField from './components/atoms/BaseInfoField.vue';
import NavUserCard from './components/organisms/navUserCard/NavUserCard.vue';
import ScheduleManager from './components/organisms/scheduleManager/ScheduleManager.vue';
import type { SocialItem, NavItem, NavItemNavbar } from './types/navigation';
import type { LoginValues, RegisterValues, BaseInputProps } from './types/forms';
import type { ColumnConfig, ActionColumn } from './types/datatable'
import type { InfoFieldProps } from './components/atoms/BaseInfoField.vue';
import type { ScheduleProps } from './components/organisms/scheduleManager/ScheduleManager.vue';



//exportacion individual
export { BaseInput, BaseButton, BasePassword, LoginForm, Header, HeaderM, Footer, Navbar, RegisterForm, BaseDataTable, BaseCard, BaseDialog, UserCardProfile, BaseInfoField, NavUserCard, ScheduleManager };
export type { NavItem, SocialItem, NavItemNavbar, LoginValues, RegisterValues, ColumnConfig, ActionColumn, BaseInputProps, InfoFieldProps, ScheduleProps}

//Plugin para regitrar todo de golpe
const UILibrary: Plugin = {
  install(app: App) {

    // Registro de los componentes de librería
    app.component('BaseInput', BaseInput);
    app.component('BaseButton', BaseButton);
    app.component('BasePassword', BasePassword);
    app.component('LoginForm', LoginForm);
    app.component('Header', Header);
    app.component('HeaderM', HeaderM);
    app.component('Footer', Footer);
    app.component('Navbar', Navbar);
    app.component('RegisterForm', RegisterForm);
    app.component('BaseDataTable', BaseDataTable);
    app.component('BaseCard', BaseCard);
    app.component('BaseDialog', BaseDialog);
    app.component('UserCardProfile', UserCardProfile);
    app.component('BaseInfoField', BaseInfoField);
    app.component('NavUserCard', NavUserCard);
    app.component('ScheduleManager', ScheduleManager);

    console.log('UI Library: PrimeVue y componentes locales registrados.');
  }
};

export default UILibrary;