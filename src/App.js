import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    count: 1
  };
  addButton = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="App">
        {[...Array(this.state.count)].map(() => (
          <button class="button" onClick={this.addButton}>
            Oke
          </button>
        ))}
      </div>
    );
  }
}

export default App;
