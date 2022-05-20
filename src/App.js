import './App.css';
import Create from './components/create/create';
import { Link, Route, Routes } from "react-router-dom";
import Read from './components/read/read';
import Nav from './components/nav/nav';
import Update from './components/update/update';
import FetchData from './components/fetchData/fetchData';
import { createRoot } from 'react-dom/client';
import Searchbar from './components/searchbar/searchbar';


function App() {

  return (
    
      <div className="main">
        <h2 className="main-header">Add Friend</h2>
        <div>

        <Routes>
        <Route path="/create" element={<Create />}/>
        <Route path="/read" element={<Read />}/>
        <Route path="/update" element={<Update />}/>
        <Route path="/fetchData" element={<FetchData />}/>
        <Route path="/searchbar" element={<Searchbar />}/>
          </Routes>
          {<Nav />}

        </div>
      </div>
      
  );
}

export default App;