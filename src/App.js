/**
 * @return Routes and Route paths for the whole react app
 */

import './App.css';
import { Route, Routes } from "react-router-dom";
import Searchbar from './components/searchbar/searchbar';
import Create from './components/create/create';
import Menu from './layouts/menu/menu';
import Read from './components/read/read';
import Mainmenu from './layouts/mainmenu/mainmenu';
import Update from './components/update/update';
import MyCalendar from './components/mycalendar/mycalendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React from 'react';
import Dropdown from './components/dropdown/dropdown';
import Caladdevent from './components/caladdevent/caladdevent';

function App() {

  return (
    
      <div className="main">
        <Routes>
        <Route path="/mainmenu" element={<Mainmenu />}/>
        <Route path="/dropdown" element={<Dropdown />}/>
        <Route path="/caladdevent" element={<Caladdevent />}/>
        <Route path="/" element={<Menu />}/>
        <Route path="mycalendar" element={<MyCalendar />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/read" element={<Read />}/>
        <Route path="/update" element={<Update />}/>
        <Route path="/searchbar" element={<Searchbar />}/>
          </Routes>
      </div>
      
  );
}

export default App;