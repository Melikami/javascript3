import React from "react";

export const Dropdown = (props) => (
  <div className="form-group">
    <strong>{props.firstName}</strong>
    <select
      className="form-control"
      name="{props.firstName}"
      onChange={props.onChange}
    >
      <option defaultValue>Select {props.fullName}</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item.fullName}
        </option>
      ))}
    </select>
  </div>
);

export default class DropdownList extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      chosenValue: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/friends/")
      .then((response) => response.json())
      .then((item) => this.setState({ list: item }));
  }

  onDropdownChange = (e) => {
    this.setState({ chosenValue: e.target.value });
  };

  render() {
    return (
      <div>
        <Dropdown
          name={this.state.fullName}
          options={this.state.list}
          onDropdownChange={this.onDropdownChange}
        />
      </div>
    );
  }
}
