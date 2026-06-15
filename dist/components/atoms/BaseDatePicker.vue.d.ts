type __VLS_Props = {
    invalid?: boolean;
    disabled?: boolean;
    variant?: null | 'filled' | 'outlined';
    fluid?: boolean;
    size?: 'small' | 'large';
    showIcon?: boolean;
    showButtonBar?: boolean;
    stepMinute?: number;
    placeholder?: string;
    hourFormat?: '12' | '24';
    showTime?: boolean;
};
type __VLS_PublicProps = {
    modelValue?: any;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: any) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
