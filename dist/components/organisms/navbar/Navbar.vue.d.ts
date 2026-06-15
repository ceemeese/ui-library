import { MenuItem } from 'primevue/menuitem';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        logo?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    username: {
        type: StringConstructor;
        default: string;
    };
    userRole: {
        type: StringConstructor;
        default: string;
    };
    showUserCard: {
        type: BooleanConstructor;
        default: boolean;
    };
    navigationItems: {
        type: () => MenuItem[];
        default: () => never[];
    };
    homeRoute: {
        type: StringConstructor;
        default: string;
    };
    isMobile: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: (...args: any[]) => void;
    logout: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    username: {
        type: StringConstructor;
        default: string;
    };
    userRole: {
        type: StringConstructor;
        default: string;
    };
    showUserCard: {
        type: BooleanConstructor;
        default: boolean;
    };
    navigationItems: {
        type: () => MenuItem[];
        default: () => never[];
    };
    homeRoute: {
        type: StringConstructor;
        default: string;
    };
    isMobile: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onClose?: ((...args: any[]) => any) | undefined;
    onLogout?: ((...args: any[]) => any) | undefined;
}>, {
    username: string;
    navigationItems: MenuItem[];
    userRole: string;
    showUserCard: boolean;
    homeRoute: string;
    isMobile: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
