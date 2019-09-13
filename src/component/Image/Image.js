import React, { Component } from "react";
import * as tf from "@tensorflow/tfjs";

class Image extends Component {
  constructor() {
    super();
    this.state = {
      image_url: ""
    };
  }

  canvasRef = React.createRef();

  getImageUrl = event => {
    this.setState({ image_url: event.target.value });
  };

  async renderPredictions() {
    const image = document.getElementById("image");
    const model = await tf.loadGraphModel(
      "http://127.0.0.1:8080/tfjs_pokemon_model/model.json"
    );

    const predictions = model.predict(tf.browser.fromPixels(image));

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    const font = "16px sans-serif";
    ctx.font = font;
    ctx.textBaseline = "top";
    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];

      ctx.strokeStyle = "#FF0000";
      ctx.lineWidth = 4;
      ctx.strokeRect(x, y, width, height);

      ctx.fillStyle = "#FFFFFF";
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10);
      ctx.fillREct(x, y, textWidth + 4, textHeight + 4);
    });
    predictions.forEach(prediction => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      ctx.fillStyle = "#000000";
      ctx.fillText(prediction.class, x, y);
    });
  }

  render() {
    return (
      <div>
        <input
          type="url"
          name="image"
          value={this.state.image_url}
          onChange={this.getImageUrl}
        />
        <input
          type="button"
          onClick={this.renderPredictions}
          value="Use Image"
        />
        <img
          crossOrigin="anonymous"
          src={this.state.image_url}
          alt=""
          id="image"
          className="size"
          width="600"
          height="500"
        />
        <canvas id="canvas" className="size" width="600" height="500" />
      </div>
    );
  }
}

export default Image;
