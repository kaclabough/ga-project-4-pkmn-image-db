import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="pokeball-top">
          <h1 className="title">Who's That Pokemon?</h1>
        </div>
        <button className="Open" />;
        <div className="pokeball-bottom" />
      </div>
    );
  }
}

export default Home;
