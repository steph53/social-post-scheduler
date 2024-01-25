"use client";

import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import {useState, useEffect } from "react";

const Calendar = () => {
    const [state, setState] = useState({
        nextId: 2,
        weekendsVisible: true,
        calendarEvents: [
          {
            id: "1",
            title: "All-day event",
            color: "#388e3c",
            start: "2001-08-02",
            end: "2001-08-02",

          },
        ]
    });

    
    useEffect(() => {
        console.log(state.calendarEvents);
    },[state]);

    const handleEventChange = (eventInfo: any) => {
        console.log(eventInfo);
        const newEvents = state.calendarEvents.map((event) => {
            if (event.id === eventInfo.event.id) {
                return { ...event, start: eventInfo.event.start, end: eventInfo.event.end };
            } else {
                return event;
            }
        });

        setState((state) => {
        return {
            ...state,
            calendarEvents: newEvents
        };
        });
    }

    // handle event receive
    const handleEventReceive = (eventInfo: any) => {
        console.log("---received---");
        const newEvent = {
            id: String(state.nextId),
            title: eventInfo.draggedEl.getAttribute("title"),
            color: eventInfo.draggedEl.getAttribute("data-color"),
            start: eventInfo.event.start,
            end: eventInfo.event.end
        };

        setState((state) => {
        state.nextId++;
        return {
            ...state,
            calendarEvents: state.calendarEvents.concat(newEvent)
        };
        });
    };
        
    return ( 
        <div className="text-xs h-[80%] px-5">
            <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
                initialView='timeGridWeek'
                weekends={state.weekendsVisible}
                events={state.calendarEvents}
                height="100%"
                headerToolbar={{start: 'today prev,next', center: 'title', end: 'dayGridMonth,timeGridWeek,timeGridDay'}}
                buttonText={{today: 'Today', month: 'Month', week: 'Week', day: 'Day'}}
                nowIndicator={true}
                editable={true}
                eventChange={handleEventChange}
                rerenderDelay={10}
                droppable={true}
                slotDuration='00:30:00'
                slotLabelInterval={{hours: 1}}
                eventReceive={handleEventReceive}
                allDaySlot={false}
            />
            
        </div>
    );
    
}

export default Calendar;