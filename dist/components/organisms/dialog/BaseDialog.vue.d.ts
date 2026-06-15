import { BaseInputProps } from '../../../types/forms';
interface Props {
    labelButton?: string;
    icon?: string;
    header?: string;
    subtitle?: string;
    inputsDialog?: BaseInputProps[];
    modelValue?: Record<string, any>;
    resolver?: any;
    loading?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            form: {
                register: (field: string, options: any) => any;
                reset: () => void;
                valid: boolean;
            } & {
                [key: string]: import('@primevue/forms').FormFieldState;
            };
            data: Record<string, any>;
        }): any;
        footer?(_: {
            data: Record<string, any>;
        }): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {
    open: (data: any) => void;
    close: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    save: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSave?: ((...args: any[]) => any) | undefined;
}>, {
    header: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
