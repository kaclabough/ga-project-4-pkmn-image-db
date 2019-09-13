import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Image from "../Image/Image";
import Home from "../Home/Home";
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
