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
import EventCalendar from './components/organisms/eventCalendar/EventCalendar.vue';
import BaseDatePicker from './components/atoms/BaseDatePicker.vue';
import BaseDateSelector from './components/atoms/BaseDateSelector.vue';
import BaseGroupedItem from './components/atoms/BaseGroupedItem.vue';
import GroupedList from './components/organisms/groupedList/GroupedList.vue';
import BasePill from './components/atoms/BasePill.vue';
import ForgotPasswordForm from './components/organisms/forgotPassword/ForgotPasswordForm.vue';
import ResetPasswordForm from './components/organisms/resetPassword/ResetPasswordForm.vue';
import ConfirmCard from './components/organisms/confirm/ConfirmCard.vue';
import type { SocialItem, NavItem, NavItemNavbar } from './types/navigation';
import type { LoginValues, RegisterValues, BaseInputProps, ForgotValues, ResetPasswordValues } from './types/forms';
import type { ColumnConfig, ActionColumn } from './types/datatable'
import type { InfoFieldProps } from './components/atoms/BaseInfoField.vue';
import type { ScheduleProps } from './components/organisms/scheduleManager/ScheduleManager.vue';
import type { CalendarEvent, CalendarResource } from './components/organisms/eventCalendar/EventCalendar.vue';
import NavbarMobile from './components/organisms/navbarMobile/NavbarMobile.vue';
import type { BasePasswordProps } from './types/forms';



//exportacion individual
export { BaseInput, BaseButton, BasePassword, LoginForm, Header, HeaderM, Footer, Navbar, RegisterForm, BaseDataTable, BaseCard, BaseDialog, UserCardProfile, BaseInfoField, NavUserCard, ScheduleManager, EventCalendar, BaseDatePicker, BaseDateSelector, BaseGroupedItem, GroupedList, BasePill, NavbarMobile, ForgotPasswordForm, ResetPasswordForm, ConfirmCard };
export type { NavItem, SocialItem, NavItemNavbar, LoginValues, RegisterValues, ColumnConfig, ActionColumn, BaseInputProps, InfoFieldProps, ScheduleProps, CalendarEvent, CalendarResource, ForgotValues, ResetPasswordValues, BasePasswordProps}

//Plugin para regitrar todo de golpe
const UILibrary: Plugin = {
  install(app: App) {

    //Registro de los componentes de librería
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
    app.component('BasePill', BasePill)
    app.component('EventCalendar', EventCalendar);
    app.component('BaseDatePicker', BaseDatePicker);
    app.component('BaseDateSelector', BaseDateSelector);
    app.component('BaseGroupedItem', BaseGroupedItem);
    app.component('GroupedList', GroupedList);
    app.component('NavbarMobile', NavbarMobile);
    app.component('ForgotPasswordForm', ForgotPasswordForm);

    console.log('UI Library: PrimeVue y componentes locales registrados');
  }
};

export default UILibrary;