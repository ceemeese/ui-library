import { LoginValues } from '../../../types/forms';
type __VLS_Props = {
    forgotPasswordLabel?: string;
    forgotPasswordRoute?: string;
    registerLabel?: string;
    registerRoute?: string;
    loading?: boolean;
    resolver?: any;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    submit: (values: LoginValues) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSubmit?: ((values: LoginValues) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
