import { Component } from "react";

class App extends Component {
  state = {
    name: "",
    gender: "",
    description: "",
    eligible: "",
    range: "",
    date: "",
  };
  render() {
    return (
      <div>
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <label>Gender </label>
        <label>male</label>
        <input
          type="radio"
          value={this.state.gender}
          onChange={(e) => {
            this.setState({ gender: "male" });
          }}
        ></input>
        <label>female</label>
        <input
          type="radio"
          value={this.state.gender}
          onChange={(e) => {
            this.setState({ gender: "female" });
          }}
        ></input>
        <br></br>
        <label>Description</label>
        <textarea
          value={this.state.description}
          onChange={(e) => {
            this.setState({ description: e.target.value });
          }}
        ></textarea>
        <br></br>
        <label>Please check if you are above 18</label>
        <input
          type="checkbox"
          value={this.state.eligible}
          onChange={(e) => {
            this.setState({ eligible: "true" });
          }}
        />
        <br></br>
        <label>Range</label>
        <input
          type="range"
          value={this.state.range}
          onChange={(e) => {
            this.setState({ range: e.target.value });
          }}
        />
        <br></br>
        <label>Date</label>
        <input
          type="date"
          value={this.state.date}
          onChange={(e) => {
            this.setState({ date: e.target.value });
          }}
        />
        <br></br>

        <p>Name : {this.state.name}</p>
        <p>Gender : {this.state.gender}</p>
        <p>Description : {this.state.description}</p>
        <p>Eligible : {this.state.eligible}</p>
        <p>Range : {this.state.range}</p>
        <p>Date : {this.state.date}</p>
      </div>
    );
  }
}

export default App;
