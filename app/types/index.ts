export type CalendarEvent = {
    _def?:{
        title?: string;
        ui: {
            borderColor: string;
            backgroundColor: string;
        };
        publicId: string;
    };
    _instance?:{
        range:{
            start: Date;
            end: Date;
        }
    };
    socialNetwork?: string;
    imageURL?: string;
    caption?: string;
}

export type CalendarType = {
    nextId?: number;
    weekendsVisible?: boolean;
    calendarEvents?: CalendarEvent[];
}
