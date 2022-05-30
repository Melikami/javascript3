import React, { useEffect, useState  } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';

function CalAddEvent() {
    const localizer = momentLocalizer(moment)
    const [eventsList, setEventsList] = useState([]);

    function handleSelect({ start, end }) {
      const title = window.prompt("New Event name");
      if (title) {
        var activity = {
          start: start,
          end: end,
          title: title
        };
        setEventsList(
          axios.post(`http://localhost:8001/events/`, {
          activity
      }));
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
        <Link exact to="/mainmenu">
            <Button className="buttonUpdate">
            Back
            </Button>
          </Link>
        </div>
    )
}

export default CalAddEvent;