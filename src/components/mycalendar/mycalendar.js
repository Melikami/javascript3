/**
 * Component react big calendar that fetches API data and displays it in the calendar for events. Also has functions to click the calendar and type in the activity and the date of the activity.
 * @param MyCalendar - shows the react big calendar
 * @param const Events - Fetches events objects from json and displays it in the calendar
 * @param localizer - determines how the dates are being formatted
 * @param events - objects for the different events in the calendar
 * @param setEvents - sets the params for the event objects
 * @param useEffect - calls the Events() function
 * @param Events - fetches json data from database "events" and sets the params title, start and end to the events with setEvents
 * @param handleSelect - function to click the calendar and pick a date for the friend event.
 * @param handleSelectFriend - Posts the new object into the events json and displays it in the calendarFormat. Usin the fullName and foreignKey from the "friends" objects
 * @param ReactModal the Modal where the ModalSearch is included with handleSelectFriend
 * @param customStyles - styling and choosing the correct layer of the calendar to be able to select the dates.
 * @param SearchModal - The Modal to search for and select the objects to book them into the calendar. Passing on handleSelectFriend and other props into the ReactModal and ModalSearch
 * @param modalIsOpen - Opens the modal window
 * @param setIsOpen - sets the modal window to open
 * @param openModal - the open mode of the modal
 * @param closeModal - the close mode of the modal
 * @return divs with heading and header image and a Calendar component with month view which contains function for creating a New Date and the localizer and events database and the handleSelect function plus a button to go back in the menu
 */

import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
import axios from "axios";
import ReactModal from "react-modal";
import ModalSearch from "../modalsearch/modalsearch";
import { calendarFormat } from "moment";

const header = require("../../img/catcalendar.jpg");

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: 1000
  }
};

ReactModal.setAppElement('#root');

const SearchModal = ({handleSelectFriend, ...props}) => {
  return (
    <ReactModal {...props} style={customStyles} contentLabel={'Who did you meet?'}>
      <ModalSearch handleSelectFriend={handleSelectFriend} />
    </ReactModal>
  )
}

function MyCalendar() {
  const localizer = momentLocalizer(moment);

  const [events, setEvents] = useState([]);
  const [clickedDate, setClickedDate] = useState(null);

  useEffect(() => {
    Events();
  }, []);

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
  

  function handleSelect({ start, end }) {
    setClickedDate({start, end});
    openModal();
  }

  function handleSelectFriend(friend) {
    setEvents([
      axios.post(`http://localhost:8001/events/`, {
        activity: friend.fullName,
        date: clickedDate.start,
        ...clickedDate,
        foreignKey: friend.foreignKey.id,
      })
      .then((_) => {
        Events()
        closeModal();
      }),
    ]);
  }

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
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
          <div className="buttonDiv">
            <Link to="/mainmenu">
              <Button className="buttonUpdate">Back</Button>
            </Link>
          </div>
        </div>
      </div>
      <SearchModal isOpen={modalIsOpen} onRequestClose={closeModal} handleSelectFriend={handleSelectFriend} />
    </div>
  );
}

export default MyCalendar;
