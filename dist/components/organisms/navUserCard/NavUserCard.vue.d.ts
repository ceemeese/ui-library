interface Props {
    username: string;
    userRole: string;
    nagivateTo?: string;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    logout: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onLogout?: ((...args: any[]) => any) | undefined;
}>, {
    username: string;
    userRole: string;
    nagivateTo: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
