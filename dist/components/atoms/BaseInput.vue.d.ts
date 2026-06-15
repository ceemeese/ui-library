import { BaseInputProps } from '../../types/forms';
declare const _default: import('vue').DefineComponent<BaseInputProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<BaseInputProps> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    size: "small" | "medium" | "large";
    placeholder: string;
    type: "text" | "password" | "email" | "number" | "boolean" | "select" | "time" | "date";
    primary: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
