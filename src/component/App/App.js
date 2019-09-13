import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Image/Image";
import "../Home/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact render={() => <Home />} />
        <Route path="/detect" render={() => <Image />} />
      </div>
    );
  }
}

export default App;
