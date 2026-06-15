import { NavItem } from '../../../types/navigation';
interface Props {
    navigationItems: NavItem[];
    isAuthenticated?: boolean;
    maxWidth?: string;
    sticky?: boolean;
    blurAmount?: string;
    registerLabel?: string;
    loginLabel?: string;
    homeRouteName?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        logo?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    login: () => any;
    logout: () => any;
    profile: () => any;
    "toggle-mobile-menu": () => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onLogin?: (() => any) | undefined;
    onLogout?: (() => any) | undefined;
    onProfile?: (() => any) | undefined;
    "onToggle-mobile-menu"?: (() => any) | undefined;
}>, {
    registerLabel: string;
    navigationItems: NavItem[];
    maxWidth: string;
    sticky: boolean;
    blurAmount: string;
    isAuthenticated: boolean;
    loginLabel: string;
    homeRouteName: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
