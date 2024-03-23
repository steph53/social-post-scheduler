"use client";

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, {DropArg} from '@fullcalendar/interaction';
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import moment from 'moment';
import uuid from 'react-uuid';
import usePostModal from '@/app/hooks/usePostModal';
import useCalendarEvent from '@/app/hooks/useCalendarEvent';

const Calendar = () => {
    const PostModal = usePostModal();
    const CalendarStore = useCalendarEvent();
    const calendarRef = useRef<FullCalendar>(null);
    const calendarApi = calendarRef.current?.getApi();

    const handleEventChange = (eventInfo: any) => {
        CalendarStore.updateEvent(eventInfo.event.id, eventInfo.event);
    }
    // handle event receive
    const handleEventReceive =(eventInfo: any) => {
        const id = uuid();
        const newEvent =  calendarApi?.addEvent({
            id: id,
            title: eventInfo.draggedEl.getAttribute("title"),
            color: eventInfo.draggedEl.getAttribute("data-color"),
            start: eventInfo.date,
            editable: true,
            extendedProps: {
                socialNetwork: '',
                imageURL:'',
                caption: '',
            }
        })
        calendarApi?.unselect();
        if (newEvent) handlePostAdd(newEvent);
    };

    const handlePostAdd = (eventInfo: any) => {
        PostModal.onOpen(eventInfo);
        CalendarStore.addEvent(eventInfo);
    };


    const handleEventClick = (clickInfo: any) => {
        PostModal.onOpen(clickInfo.event);
    }

    const handleEventRemove = (id: string) => {
        CalendarStore.removeEvent(id);
    }

    return (
        <div className="text-xs h-[80%] px-5">
            <FullCalendar
                ref={calendarRef}
                plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
                initialView='timeGridWeek'
                weekends={true}
                events={CalendarStore.calendarEvents}
                height="100%"
                headerToolbar={{start: 'today prev,next', center: 'title', end: 'dayGridMonth,timeGridWeek,timeGridDay'}}
                buttonText={{today: 'Today', month: 'Month', week: 'Week', day: 'Day'}}
                nowIndicator={true}
                editable={true}
                eventClick={(info)=>handleEventClick(info)}
                eventChange={handleEventChange}
                rerenderDelay={10}
                droppable={true}
                slotLabelInterval={{hours: 1}}
                drop={handleEventReceive}
                allDaySlot={false}
            />
        </div>
    );
    
}

export default Calendar;
