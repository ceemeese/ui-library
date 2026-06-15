import { ResetPasswordValues } from '../../../types/forms.ts';
type __VLS_Props = {
    mode: 'reset' | 'change';
    loading?: boolean;
    resolver?: any;
    card?: boolean;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    submit: (values: ResetPasswordValues) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onSubmit?: ((values: ResetPasswordValues) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
