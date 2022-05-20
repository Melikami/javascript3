import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


const FetchData = () => {
const [APIData, setAPIData] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:8000/friends/`)
          .then((response) => {
              console.log(response.data)
              setAPIData(response.data);
          })
  }, []);

}
// const FetchData = () => {
//     const [users, setUsers] = useState([])
  
//     const fetchData = () => {
//       fetch("http://localhost:8000/friends/")
//         .then(response => {
//           return response.json()
//         })
//         .then(data => {
//           setUsers(data)
//         })
//     }
  
//     useEffect(() => {
//       fetchData()
//     }, [])
  
//     return (
//       <div>
//         {users.length > 0 && (
//           <ul>
//             {users.map(user => (
//               <li key={user.id}>{user.firstName + " " + user.lastName}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     )
//   }

export default FetchData;