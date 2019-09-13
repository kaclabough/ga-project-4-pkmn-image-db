import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="pokeball-top">
          <h1 className="title">Who's That Pokemon?</h1>
        </div>
        <Link to="/images" />
        <div className="pokeball-bottom" />
      </div>
    );
  }
}

export default Home;
