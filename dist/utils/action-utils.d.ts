import { ActionColumn } from '../types/datatable';
export declare function isActionVisible<T>(action: ActionColumn<T>, data: any): boolean;
export declare function getActionIcon<T>(action: ActionColumn<T>, data: any): string;
export declare function getActionClass<T>(action: ActionColumn<T>, data: any): string;
