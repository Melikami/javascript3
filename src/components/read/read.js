/**
 * Component which fetches json data from databases "friends" and "friendships" with axios and displays it. It also has functions to update or to delete the different objects from the list. It also maps the objects from the two different databases to show them in the same table in different columns. It also has v4 uuid in the li items as key prop.
 * @param APIData - object props are fetched with axios from json database "friends" as "response"
 * @param setAPIData - sets the object props of APIData from json database "friends"
 * @param APIData1 - object props are fetched with axios from json database "friendships" as "response"
 * @param setAPIData1 - sets the object props of APIData1 drom json database "friendships"
 * @param getData - fetches and displays the data of json database "friends"
 * @param getData1 - fetches and displays the data of json database "friendships"
 * @param setData - updates all the object params that are fetched from the json database "friends"
 * @param setData1 - updates all the object params that are fetched from the json database "friendships"
 * @param onDelete - deletes the object's props firstName, lastName and ID from the json "friends" database
 * @param onDelete1 - deletes the object's props friendship from the json "friendships" database
 * @param APIData.map - filters through the APIData with the APIData1 to display the object props from both the json database "friends" and json database "friendships" so that they are displayed in the same table in different columns
 * @param key - v4 uuid assigns unique key id to li elements
 * @param popUp - A pop up window appears to confirm that a Friend has been deleted from the "friends" and "friendships" json databases
 * @return Divs with a headline and header image, then a table with different columns for firstName and lastName and friendship props from the objects from the two different json databases "friends" and "friendships" displayed in the same table in different columns. Each object has two buttons, one for updating the specific object and one for deleting it. Also two buttons to create a new object and to go back in the menu.
 */

import { Table, Button } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../App.css";
import { v4 } from "uuid";

const header = require("../../img/catdog.jpg");

function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/friends/`).then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
  }, []);

  const [APIData1, setAPIData1] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8003/friendships/`).then((response) => {
      console.log(response.data);
      setAPIData1(response.data);
    });
  }, []);

  const getData = () => {
    axios.get(`http://localhost:8000/friends/`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  const getData1 = () => {
    axios.get(`http://localhost:8003/friendships/`).then((getData1) => {
      setAPIData1(getData1.data);
    });
  };

  const setData = (data) => {
    let { id, firstName, lastName } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
  };

  const setData1 = (data1) => {
    let { friendship } = data1;
    localStorage.setItem("Friendship", friendship);
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:8000/friends/${id}`).then(() => {
      getData();
    });
  };

  const onDelete1 = (id) => {
    axios.delete(`http://localhost:8003/friendships/${id}`).then(() => {
      getData1();
    });
  };

  APIData.map((x) =>
    Object.assign(
      x,
      APIData1.find((y) => y.id === x.id)
    )
  );

  const key = {};
  key.id = v4();

  function popUp() {
    window.alert("The Friend is Deleted");
  }

  return (
    <div className="front">
      <div className="tracker">
        <h1>Friend List</h1>
      </div>
      <div className="frontImg">
        <img src={header} className="headerPhoto" alt="Header" />
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
                <Table.Row key={v4()}>
                  <Table.Cell key={v4()}>{data.firstName}</Table.Cell>
                  <Table.Cell key={v4()}>{data.lastName}</Table.Cell>
                  <Table.Cell key={v4()}>{data.friendship}</Table.Cell>
                  <td>
                    <Link to="/update">
                      <Button
                        className="buttonRead"
                        onClick={(e) => {
                          setData(data);
                          setData1(data);
                                                  }}
                      >
                        Update
                      </Button>
                    </Link>
                  </td>
                  <Table.Cell>
                    <Button
                      className="buttonRead"
                      onClick={(e) => {
                        onDelete(data.id);
                        onDelete1(data.id);
                        popUp();
                      }}
                    >
                      Delete
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <div className="buttonDiv">
          <Link to="/create">
            <Button className="buttonUpdate">Create</Button>
          </Link>
          <Link to="/mainmenu">
            <Button className="buttonUpdate">Back</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
