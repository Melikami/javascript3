import './App.css';
import { Route, Routes } from "react-router-dom";
import Nav from './components/nav/nav';
// import { createRoot } from 'react-dom/client';
import Searchbar from './components/searchbar/searchbar';
import Create from './components/create/create';
import Main from './layouts/main/main';
import Menu from './layouts/menu/menu';
import Read from './components/read/read';
import Mainmenu from './layouts/mainmenu/mainmenu';
import Update from './components/update/update';
import MyCalendar from './components/mycalendar/mycalendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React from 'react';
import CalAddEvent from './components/caladdevent/caladdevent';

function App() {

  return (
    
      <div className="main">
        <div>

        <Routes>
        <Route path="/mainmenu" element={<Mainmenu />}/>
        <Route path="/caladdevent" element={<CalAddEvent />}/>
        <Route path="/" element={<Menu />}/>
        <Route path="mycalendar" element={<MyCalendar />}/>
        <Route path="/create" element={<Create />}/>
        <Route path="/read" element={<Read />}/>
        <Route path="/update" element={<Update />}/>
        <Route path="/searchbar" element={<Searchbar />}/>
        <Route path="/main" element={<Main />}/>
          </Routes>
          {<Nav />}

        </div>
      </div>
      
  );
}

export default App;