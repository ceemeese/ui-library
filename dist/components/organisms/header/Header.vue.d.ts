export interface NavItem {
    title: string;
    to: string | Record<string, any>;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        logo?(_: {}): any;
        'extra-actions'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    navigationItems: {
        type: () => NavItem[];
        default: () => never[];
    };
    maxWidth: {
        type: StringConstructor;
        default: string;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    blurAmount: {
        type: StringConstructor;
        default: string;
    };
    registerLabel: {
        type: StringConstructor;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    navigationItems: {
        type: () => NavItem[];
        default: () => never[];
    };
    maxWidth: {
        type: StringConstructor;
        default: string;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    blurAmount: {
        type: StringConstructor;
        default: string;
    };
    registerLabel: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    registerLabel: string;
    navigationItems: NavItem[];
    maxWidth: string;
    sticky: boolean;
    blurAmount: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
