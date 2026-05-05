<script setup lang="ts" generic="R = any, E = any">
import { computed } from 'vue';

export interface CalendarResource<T = any> {
    id: string | number;
    label: string;
    type?: string;
    isDisabled?: boolean | ((resource : T) => boolean);
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
    closedRanges?: ClosedRange[]
}

const props = withDefaults(defineProps<Props>(), {
    minTime: 8,
    maxTime: 22,
    resources: () => [],
    events: () => []
});

const isClosedHour = (hour: number) => {
    return props.closedRanges?.some(r => hour >= r.from && hour < r.to) ?? false;
}

const HOUR_HEIGHT = 60;
const COLUMN_WIDTH = 160;

const hoursArray = computed(() => {
    const hours = [];
    for (let i = props.minTime; i <= props.maxTime; i++) hours.push(i);
    return hours;
});

const isResourceDisabled = (resource: CalendarResource<R>) => {
    if(!resource.isDisabled) return false;

    return typeof resource.isDisabled === 'function'
        ? resource.isDisabled(resource.data as R)
        : resource.isDisabled;
}

const getEventStyle = (event: CalendarEvent<E>) => {
    const startHour = event.start.getHours() + (event.start.getMinutes() / 60);
    const endHour = event.end.getHours() + (event.end.getMinutes() / 60);
    const top = (startHour - props.minTime) * HOUR_HEIGHT;
    const height = (endHour - startHour) * HOUR_HEIGHT;
    return { top: `${top}px`, height: `${height}px` };
};


const emit = defineEmits<{
    (e: 'event-click', event: CalendarEvent<E>) : void;
    (e: 'cell-click', payload: {hour: number, resourceId: string | number}) : void;
}>();


const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: false 
    });
};

</script>

<template>
    <div class="ui:h-full ui:w-full ui:overflow-auto ui:border ui:border-slate-200 ui:rounded-xl ui:bg-white ui:relative">
        
        <div :style="{ minWidth: (resources.length * COLUMN_WIDTH + 80) + 'px' }" class="ui:relative">
        
            <div class="ui:flex ui:sticky ui:top-0 ui:z-30 ui:bg-white ui:border-b ui:border-slate-200">
                <div class="ui:w-20 ui:h-14 ui:sticky ui:left-0 ui:z-40 ui:bg-slate-50 ui:border-r ui:border-slate-200"></div>
                
                <div v-for="resource in resources" :key="resource.id" 
                    :style="{ width: COLUMN_WIDTH + 'px' }"
                    class="ui:flex-shrink-0 ui:h-14 ui:flex ui:flex-col ui:items-center ui:justify-center ui:border-r ui:border-slate-200 ui:bg-white">

                    <span class="ui:font-bold ui:text-slate-800 ui:text-sm">{{ resource.label }}</span>
                    <span class="ui:text-[9px] ui:text-slate-400 ui:uppercase">{{ resource.type }}</span>
                </div>
            </div>

            <div class="ui:flex ui:relative">
                
                <div class="ui:w-20 ui:flex-shrink-0 ui:sticky ui:left-0 ui:z-20 ui:bg-slate-50 ui:border-r ui:border-slate-200">
                    <div v-for="hour in hoursArray" :key="hour" 
                        :style="{ height: HOUR_HEIGHT + 'px' }"
                        class="ui:flex ui:justify-center ui:pt-2 ui:text-xs ui:font-medium ui:text-slate-400 ui:border-b ui:border-slate-100">
                        {{ String(hour).padStart(2, '0') }}:00
                    </div>
                </div>

                <div class="ui:flex ui:flex-grow">
                    <div v-for="resource in resources" :key="'col-' + resource.id" 
                        :style="{ width: COLUMN_WIDTH + 'px' }"
                        class="ui:flex-shrink-0 ui:relative ui:border-r ui:border-slate-100 ui:bg-white">

                        <div v-if="isResourceDisabled(resource)" class="ui:absolute ui:inset-0 ui:bg-slate-100/60 ui:z-10 ui:flex ui:items-center ui:justify-center">
                            <!--<span class="ui:text-[10px] ui:font-bold ui:text-slate-400 ui:uppercase ui:tracking-widest ui:-rotate-90">Cerrada</span>-->
                        </div>
                        
                        <div v-for="hour in hoursArray" :key="'cell-'+hour"
                            :style="{ height: HOUR_HEIGHT + 'px' }"
                            class="ui:relative ui:z-15 ui:border-b ui:border-slate-100 ui:transition-colors"
                            :class="[
                                isResourceDisabled(resource) || isClosedHour(hour) 
                                    ? 'ui:cursor-not-allowed' 
                                    : 'ui:hover:bg-slate-100/50',
                                isClosedHour(hour) ? 'ui:bg-slate-100 ui:border-none' : '' 
                            ]"
                            @click="!isResourceDisabled(resource) && !isClosedHour(hour) && emit('cell-click', { hour, resourceId: resource.id })">
                        </div>

                        <div v-for="event in events.filter(e => e.resourceId === resource.id)" :key="event.id"
                            class="ui:absolute ui:left-1 ui:right-1 ui:rounded-lg ui:p-2 ui:text-xs ui:shadow-md ui:z-20 ui:border-l-4 ui:overflow-hidden ui:transition-all ui:duration-200 ui:hover:shadow-lg ui:hover:-translate-y-0.5 ui:hover:z-30 ui:cursor-pointer"
                            :class="event.colorClass || 'ui:bg-blue-50 ui:border-blue-500 ui:text-blue-700'"
                            :style="getEventStyle(event)"
                            @click.stop="emit('event-click', event)">
                            <div class="ui:font-bold ui:truncate">{{ event.title }}</div>
                            <div class="ui:font-semibold ui:truncate">{{ formatTime(event.start) }} - {{ formatTime(event.end) }}</div>
                            <div class="ui:opacity-80 ui:truncate">{{ event.content }}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>