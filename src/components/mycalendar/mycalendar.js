import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';
import axios from 'axios';

const header = require("../../img/catcalendar.jpg");

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
              resource: events.friend
            })
          )))
        .catch(err => console.error(err))
    }

    function handleSelect({ start, end }) {
      const title = window.prompt("New Event name");
      if (title) {
        var activity = {
          start: start,
          end: end,
          title: title
        };
        setEvents(
          axios.post(`http://localhost:8001/events/`, {
          activity
      }));
      }
    }



    return (
      
      <div className="front">
        <div className="tracker">
                <h1>Calendar</h1>
            </div>   
      <div className="frontImg">
            <img src={header} class="headerPhoto" alt="Header" />
            </div>
        <Calendar
        selectable
        defaultView="month"
        defaultDate={new Date()}
        localizer={localizer}
        events={events}
        resourceTitleAccessor='resource'
        startAccessor='start'
        endAccessor='end'
        views={['month', 'week', 'day']}
        style={{height: 450}}
        onSelectSlot={handleSelect}
        />
        <Link exact to="/mainmenu">
            <Button className="buttonUpdate">
            Back
            </Button>
          </Link>
        </div>
    )
}


export default MyCalendar;
