import { Table, Button } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../../App.css';

function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:8000/friends/`)
          .then((response) => {
              console.log(response.data)
              setAPIData(response.data);
          })
  }, []);

  const [APIData1, setAPIData1] = useState([]);
  useEffect(() => {
      axios.get(`http://localhost:8003/friendships/`)
          .then((response) => {
              console.log(response.data)
              setAPIData1(response.data);
          })
  }, []);

  

  // APIData.map( APIData => {
  //   return(
  //       <div className="box" key={ APIData.id}>
  //           { APIData.firstName }
  //       </div>
  //   )
  // })   

  const getData = () => {
      axios.get(`http://localhost:8000/friends/`)
          .then((getData) => {
              setAPIData(getData.data);
          })
  }

  const getData1 = () => {
    axios.get(`http://localhost:8003/friendships/`)
        .then((getData1) => {
            setAPIData1(getData1.data);
        })
}

const setData = (data) => {
  let { id, firstName, lastName } = data;
  localStorage.setItem('ID', id);
  localStorage.setItem('First Name', firstName);
  localStorage.setItem('Last Name', lastName);
}

const setData1 = (data1) => {
  let { friendship } = data1;
  localStorage.setItem('Friendship', friendship);
}

  const onDelete = (id) => {
      axios.delete(`http://localhost:8000/friends/${id}`)
      .then(() => {
          getData();
      })
  }

  const onDelete1 = (id) => {
    axios.delete(`http://localhost:8003/friendships/${id}`)
    .then(() => {
        getData1();
    })
}

  APIData.map(x => Object.assign(x, APIData1.find(y => y.id === x.id)));


  return (
    <div className="front">
      <div className="tracker">
                <h1>Friend Tracker</h1>
            </div>
            <div className="mainDiv">
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Friendship</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>
                <Table.Cell>{data.friendship}</Table.Cell>
                <td>
                <Link to="/update">      
                  <Button className="buttonRead" onClick={e => { setData(data); setData1(data); }}>Update</Button>     
                </Link>
                </td>
                <Table.Cell>
                  <Button className="buttonRead" onClick={e => { onDelete(data.id); onDelete1(data.id); }}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
      <div>
      <Link exact to="/create">
      <Button className="buttonUpdate">
            Create
            </Button>
          </Link>
      <Link exact to="/mainmenu">
            <Button className="buttonUpdate">
            Back
            </Button>
          </Link>
          </div>
    </div>
    </div>
  );
}

export default Read;
