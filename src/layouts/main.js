
import { Routes, Route } from "react-router-dom";
import Create from "../components/create/create";
// import Update from "../components/update/update";


function Main() {
    return (
      <div>
        <div className="content">
<h2>hej</h2>
          <Routes>
            <Route exact path="/create" element={<Create />} />
            {/* <Route path="/update" element={<Update />} /> */}
          </Routes>
        </div>
      </div>
    );
}

export default Main;