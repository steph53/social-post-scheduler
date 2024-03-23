import {create} from "zustand"
import {CalendarEvent} from '@/app/types';

interface CalendarEventStore {
    nextId: string;
    weekendsVisible: boolean;
    calendarEvents: CalendarEvent[];
    addEvent: (event: CalendarEvent) => void;
    removeEvent: (id: string) => void;
    updateEvent: (id: string, event: CalendarEvent) => void;
    clearEvents: () => void;
}


const useCalendarEvent = create<CalendarEventStore>((set) => ({
    nextId: '1',
    weekendsVisible: true,
    calendarEvents: [],
    addEvent: (event: CalendarEvent) => set((state)=>({
        calendarEvents: state.calendarEvents.concat(event)
        })
    ),
    removeEvent: (id: string) => set((state) => ({
            calendarEvents: state.calendarEvents.filter(event => event._def?.publicId !== id)

    })),
    updateEvent: (id: string, event: CalendarEvent) => set((state) => ({
        calendarEvents: state.calendarEvents.map((events) => {
            if (events._def?.publicId === event._def?.publicId) {
                const ModEvent:CalendarEvent = event;
                return ModEvent;
            } else {
                return events;
            }
        })
    })),
    clearEvents: () => set((state) => ({
            calendarEvents: []
    }))
}));

export default useCalendarEvent;