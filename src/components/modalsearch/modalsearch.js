/**
 * Component which shows a searchbar where you can search for objects by matching their firstName or lastName
 * @param APIData - array to put json database "friends" objects in
 * @param setAPIData - sets the props data of APIData
 * @return returns a modal with a search bar of the "friends" json database objects
 * 
 */

 import React from "react";
 import Search from "../search/search";
 import { useState } from "react";
 import { useEffect } from "react";
 import axios from "axios";
 import "../../App.css";
 
 function ModalSearch() {
   const [APIData, setAPIData] = useState([]);
   useEffect(() => {
     axios.get(`http://localhost:8000/friends/`).then((response) => {
       console.log(response.data);
       setAPIData(response.data);
     });
   }, []);

   return (
     <div className="searchModal">
         <Search details={APIData} />
     </div>
   );
 }
 
 export default ModalSearch;
 