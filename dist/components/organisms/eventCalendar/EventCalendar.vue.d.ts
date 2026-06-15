export interface CalendarResource<T = any> {
    id: string | number;
    label: string;
    type?: string;
    isDisabled?: boolean | ((resource: T) => boolean);
    data?: T;
}
export interface ClosedRange {
    from: number;
    to: number;
}
export interface CalendarEvent<T = any> {
    id: string | number;
    start: Date;
    end: Date;
    title: string;
    content?: string;
    resourceId: string | number;
    colorClass?: string;
    data?: T;
}
export interface Props<R = any, E = any> {
    resources: CalendarResource<R>[];
    events: CalendarEvent<E>[];
    minTime?: number;
    maxTime?: number;
    closedRanges?: ClosedRange[];
}
declare const _default: <R = any, E = any>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onEvent-click"?: ((event: CalendarEvent<E>) => any) | undefined;
        readonly "onCell-click"?: ((payload: {
            hour: number;
            resourceId: string | number;
        }) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, "onEvent-click" | "onCell-click"> & Props<any, any> & Partial<{}>> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: {
        (e: "event-click", event: CalendarEvent<E>): void;
        (e: "cell-click", payload: {
            hour: number;
            resourceId: string | number;
        }): void;
    };
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
