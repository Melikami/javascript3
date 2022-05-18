import './App.css';
import Create from './components/create/create';
import { Link, Route, Routes } from "react-router-dom";
import Main from './layouts/main';
import Read from './components/read/read';
import Nav from './components/nav/nav';
import Update from './components/update/update';

function App() {
  return (
    
      <div className="main">
        <h2 className="main-header">Add Friend</h2>
        <div>
    

        <Routes>
        <Route path="/create" element={<Create />}/>
        <Route path="/read" element={<Read />}/>
        <Route path="/update" element={<Update />}/>
          </Routes>
          {<Nav />}

        </div>
      </div>
      
  );
}

export default App;