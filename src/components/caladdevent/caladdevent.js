import React, { useEffect, useState  } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import axios from 'axios';
import Read from '../read/read';

function CalAddEvent() {
    const localizer = momentLocalizer(moment)
    const [eventsList, setEventsList] = useState([]);

    function handleSelect({ start, end }) {
      const title = window.prompt("New Event name");
      if (title) {
        var newEvent = {
          start: start,
          end: end,
          title: title,
        };
        setEventsList([...eventsList, newEvent]);
      }
    }

    return (
        <div className='front'>
        <Calendar
        selectable
        defaultView="month"
        defaultDate={new Date()}
        localizer={localizer}
        events={eventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleSelect}/>
        </div>
    )
}

export default CalAddEvent;