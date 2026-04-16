import type { ActionColumn } from "../types/datatable";

export function isActionVisible<T>(action: ActionColumn<T>, data: any): boolean {
    if (action.isVisible === undefined) return true;
    return typeof action.isVisible === 'function'
        ? action.isVisible(data)
        : action.isVisible;
} 

export function getActionIcon<T>(action: ActionColumn<T>, data: any): string {
    if (!action.icon) return '';
    return typeof action.icon === 'function'
    ? action.icon(data)
    : action.icon;
}

export function getActionClass<T>(action: ActionColumn<T>, data: any): string {
    if (!action.class) return '';
    return typeof action.class === 'function'
    ? action.class(data)
    : action.class;
}