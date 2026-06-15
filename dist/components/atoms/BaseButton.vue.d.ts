import { BaseButtonProps } from '../../types/forms';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<BaseButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<BaseButtonProps> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    disabled: boolean;
    type: "button" | "submit" | "reset";
    loading: boolean;
    raised: boolean;
    rounded: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
