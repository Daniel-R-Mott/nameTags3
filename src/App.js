import React, { Component } from "react";
import NameTagList from "./NameTagList.js";
import UserInput from "./UserInput.js";



class App extends Component {
  state = {
    names: ["Erin", "Ann", "Nichole", "Sharon", "Maryn"]
  };

  componentDidUpdate() {
    const savedNamesString = JSON.stringify(this.state.names);
    localStorage.setItem("savedNames", savedNamesString);
}

componentDidMount() {
    const savedNamesString = localStorage.getItem("savedNames");
    if (savedNamesString) {
        const savedNames = JSON.parse(savedNamesString);
        this.setState({ names: savedNames });
    }
}

  addName = (name) => {
    const newNames = [name, ...this.state.names];
    this.setState({ names: newNames });

  };

  removeName = (clickedIndex) => {
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({ names: newNames });
  
  };

  render() {
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        <NameTagList names={this.state.names} removeName={this.removeName} />
        <UserInput addName={this.addName} />
      </div>
    );
  }
}
export default App;
