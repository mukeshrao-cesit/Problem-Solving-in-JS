import { Component } from "react";

class ClassComp extends Component {
  state = {
    search: "",
  };
  render() {
    return (
      <>
        <h1>I'm class component</h1>
        <input
          type="text"
          onChange={(e) => {
            this.setState({ search: e.target.value });
          }}
        />
        <p>{this.state.search}</p>
      </>
    );
  }
}

export default ClassComp;
