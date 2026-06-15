interface Props {
    title?: string;
    image?: string;
    initials?: string;
    mainText?: string;
    subtext?: string;
    size?: 'large' | 'xlarge' | undefined;
    shape?: 'circle' | undefined;
    padding?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'extra-info'?(_: {}): any;
        actions?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    edit: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onEdit?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
