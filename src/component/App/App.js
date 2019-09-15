import React, { Component } from "react";
import { Route } from "react-router-dom";
import Image from "../Image/Image.js";
import Home from "../Home/Home.js";
import Navbar from "../Navbar/Navbar.js";
import About from "../About/About.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path="/" exact render={() => <Home />} />
        <Route path="/detect" render={() => <Image />} />
        <Route path="/about" render={() => <About />} />
      </div>
    );
  }
}

export default App;
