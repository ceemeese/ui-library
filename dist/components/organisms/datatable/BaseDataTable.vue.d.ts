import { ColumnConfig } from '../../../types/datatable';
interface Props {
    value: any[];
    columns: ColumnConfig<any>[];
    loading?: boolean;
    size?: 'small' | 'large';
    showGridLines?: boolean;
    stripedRows?: boolean;
    paginator?: boolean;
    rows?: number;
    rowsPerPageOptions?: number[];
    useCustomPaginator?: boolean;
    removableSort?: boolean;
    showSearch?: boolean;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<string, (_: {
        data: any;
    }) => any>> & {
        'table-actions'?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{}>, {
    loading: boolean;
    showGridLines: boolean;
    stripedRows: boolean;
    paginator: boolean;
    useCustomPaginator: boolean;
    removableSort: boolean;
    showSearch: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
