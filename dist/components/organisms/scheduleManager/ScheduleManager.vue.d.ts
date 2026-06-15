import { ActionColumn } from '../../../types/datatable';
export interface ScheduleNode {
    id: number;
    openingTime: string;
    closingTime: string;
    isClosed: boolean;
    dayOfWeek: {
        id: number;
        name?: string;
    };
}
export interface ScheduleProps {
    value: ScheduleNode[];
    dayColumnHeader?: string;
    statusColumnHeader?: string;
    actionsColumnHeader?: string;
    loading?: boolean;
    dayNames?: Record<number, string>;
    actions?: {
        day?: ActionColumn<any>[];
        slot?: ActionColumn<any>[];
    };
}
declare const _default: import('vue').DefineComponent<ScheduleProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ScheduleProps> & Readonly<{}>, {
    value: ScheduleNode[];
    loading: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
