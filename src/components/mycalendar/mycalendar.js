/**
 * Component react big calendar that fetches API data and displays it in the calendar for events. Also has functions to click the calendar and type in the activity and the date of the activity.
 * @param MyCalendar - shows the react big calendar
 * @param localizer - determines how the dates are being formatted
 * @param events - objects for the different events in the calendar
 * @param setEvents - sets the params for the event objects
 * @param useEffect - calls the Events() function
 * @param Events - fetches json data from database "events" and sets the params title, start and end to the events with setEvents
 * @param handleSelect - function to click the calendar and type in the event name and event date in the windows prompt to store it in the json database "events". An if function sets the event with setEvents if both an acitivty name and an activity date is written in the windows prompt and then saved to the json database "events" by posting the data with axios
 * @return divs with heading and header image and a Calendar component with month view which contains function for creating a New Date and the localizer and events database and the handleSelect function plus a button to go back in the menu
 */

import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import axios from "axios";
import Card from "../card/card";
import SearchList from "../searchlist/searchlist";
import Search from "../search/search";

const header = require("../../img/catcalendar.jpg");

function MyCalendar() {
  const localizer = momentLocalizer(moment);

  const [events, setEvents] = useState([]);

  useEffect(() => {
    Events();
  });

  const Events = async () => {
    await fetch("http://localhost:8001/events/")
      .then((response) => response.json())
      .then((data) =>
        setEvents(
          data.map((events) => ({
            title: events.activity,
            start: moment.utc(events.date)._d,
            end: moment.utc(events.date).add(events.duration, "minutes")._d,
          }))
        )
      )
      .catch((err) => console.error(err));
  };

  const foreignKey = {};
    // foreignKey.id = v4()foreignKey.id = v4()
    
      // const [foreignKey, setforeignKey] = useState([]);
      // useEffect(() => {
      //   axios.get(`http://localhost:8000/friends/`).then((response) => {
      //     console.log(response.foreignKey);
      //     console.log(response.firstName);
      //     setforeignKey(response.data.foreignKey);
      //   });
      // }, []);
      

  function handleSelect({ start, end }) {
    const activity = window.prompt("New Friend Event");
    const date = window.prompt("Pick Date");
    if (activity + date) {
      setEvents([
        axios.post(`http://localhost:8001/events/`, {
          activity,
          start,
          end,
          date: date,
          foreignKey: foreignKey,
        }),
      ]);
    }
  }

  return (
    <div className="front">
      <div className="tracker">
        <h1>Event Calendar</h1>
      </div>
      <div className="frontImg">
        <img src={header} className="headerPhoto" alt="Header" />
      </div>
      <div className="mainDiv">
        <Calendar
          selectable
          defaultView="month"
          defaultDate={new Date()}
          localizer={localizer}
          events={events}
          resourceTitleAccessor="resource"
          startAccessor="start"
          endAccessor="end"
          views={["month", "week", "day"]}
          style={{ height: 450 }}
          onSelectSlot={handleSelect}
        />
        {/* <DropdownList />
        <input type="date" className="dateInput"></input> */}
        <div className="buttonDiv">
          <Link to="/mainmenu">
            <Button className="buttonUpdate">Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyCalendar;
