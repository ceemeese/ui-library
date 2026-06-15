import { NavItem, SocialItem } from '../../../types/navigation';
interface Props {
    titleLogo?: string;
    iconLogo?: string;
    navigationItems?: NavItem[];
    socialItems?: SocialItem[];
    maxWidth?: string;
    blurAmount?: string;
    privacyRouteName?: string;
    termsRouteName?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        logo?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    navigationItems: NavItem[];
    maxWidth: string;
    blurAmount: string;
    socialItems: SocialItem[];
    privacyRouteName: string;
    termsRouteName: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
