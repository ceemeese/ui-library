interface ConfirmEmailCardProps {
    status?: 'loading' | 'success' | 'error';
    titleMessage?: string;
    messageConfirmation?: string;
    iconButtonSuccess?: string;
    returnLabel?: string;
    backLabel?: string;
    errorTitle?: string;
    errorMessage?: string;
}
declare const _default: import('vue').DefineComponent<ConfirmEmailCardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    back: () => any;
    goTo: () => any;
}, string, import('vue').PublicProps, Readonly<ConfirmEmailCardProps> & Readonly<{
    onBack?: (() => any) | undefined;
    onGoTo?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
