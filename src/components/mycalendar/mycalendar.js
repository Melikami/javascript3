/**
 * Component react big calendar that fetches API data and displays it in the calendar for events. Also has functions to click the calendar and type in the activity and the date of the activity.
 * @param MyCalendar - shows the react big calendar
 * @param localizer - determines how the dates are being formatted
 * @param events - objects for the different events in the calendar
 * @param setEvents - sets the params for the event objects
 * @param useEffect - calls the Events() function
 * @param Events - fetches json data from database "events" and sets the params title, start and end to the events with setEvents
 * @param handleSelect - function to click the calendar and type in the event name and event date in the windows prompt to store it in the json database "events". An if function sets the event with setEvents if both an acitivty name and an activity date is written in the windows prompt and then saved to the json database "events" by posting the data with axios
 * @param modalIsOpen - Opens the modal window
 * @param setIsOpen - sets the modal window to open
 * @param openModal - the open mode of the modal
 * @param closeModal - the close mode of the modal
 * @param (about the Modal) - I tried putting in the modal so that I could select objects from the search function and pass them into the "events" json database so they would bring with them their foreign keys and tie the events to the "frieds" obejts but I didn't manage to finish my attempt.
 * @return divs with heading and header image and a Calendar component with month view which contains function for creating a New Date and the localizer and events database and the handleSelect function plus a button to go back in the menu
 */

import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import axios from "axios";
import Modal from "../modal/modal";

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
       
  function handleSelect({ start, end }) {
    const activity = window.prompt("New Friend Event");
    if (activity) {
      setEvents([
        axios.post(`http://localhost:8001/events/`, {
          activity,
          date: start,
          end,
          foreignKey: foreignKey,
        }),
      ]);
    }
  }

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
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
        <Modal onClick={openModal} />
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
