import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


function MyCalendar() {
    const localizer = momentLocalizer(moment);

    const [events, setEvents] = useState([]);

    useEffect(() => {
      Events()
    });

    const Events = () => {
      fetch('http://localhost:8001/events')
        .then(response => response.json())
        .then(data => setEvents(data.map((events) =>(
            {
              title: events.activity,
              start: moment.utc(events.date)._d,
              end: moment.utc(events.date).add(events.duration, 'minutes')._d,
              resource: events.customer.firstname
            })
          )))
        .catch(err => console.error(err))
    }

    return (
      
      <div className="front">   
        <Calendar
        localizer={localizer}
        events={events}
        resourceTitleAccessor='resource'
        startAccessor='start'
        endAccessor='end'
        views={['month', 'week', 'day']}
        style={{height: 450}}
        />
        </div>
    )
}


export default MyCalendar;
