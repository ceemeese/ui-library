import type { RouteLocationRaw } from 'vue-router';

export interface ActionColumn<T = any> {
    action?: (row: T, event?: any) => Promise<any> | void;
    isVisible: boolean | ((row: T) => boolean);
    icon?: string | ((data : T) => string)
    text?: string;
    to?: (row: T) => RouteLocationRaw;
    class?: string | ((data : T) => string)
}

export interface ColumnConfig<T = any> {
    field: string;
    header: string;
    sortable?: boolean;
    actions?: ActionColumn<T>[];
}