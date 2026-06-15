interface Props {
    text: string;
    type?: 'success' | 'error' | 'warning' | 'info' | 'inactive' | 'secondary';
    icon?: string;
    size?: 'small' | 'normal';
    dot?: boolean;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    size: "small" | "normal";
    type: "success" | "error" | "warning" | "info" | "inactive" | "secondary";
    dot: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLSpanElement>;
export default _default;
