interface Props {
    modelValue: Date | Date[] | undefined;
    title?: string;
    subtitle?: string;
    showTime?: boolean;
    selectionMode?: 'single' | 'range';
    placeholder?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'additional-filters'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    placeholder: string;
    showTime: boolean;
    title: string;
    subtitle: string;
    selectionMode: "single" | "range";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
