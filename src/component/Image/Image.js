import React, { Component } from "react";
import * as tf from "@tensorflow/tfjs";

class Image extends Component {
  constructor() {
    super();
    this.state = {
      image_url: ""
    };
    const classNames = [
      "Charizard",
      "Gardevoir",
      "Greninja",
      "Mudkip",
      "Pikachu"
    ];
  }

  canvasRef = React.createRef();

  getImageUrl = event => {
    this.setState({ image_url: event.target.value });
  };

  calculateMaxScores(scores, numBoxes, numClasses) {
    const maxes = [];
    const classes = [];
    for (let i = 0; i < numBoxes; i++) {
      let max = Number.MIN_VALUE;
      let index = -1;
      for (let j = 0; j < numClasses; j++) {
        if (scores[i * numClasses + j] > max) {
          max = scores[i * numClasses + j];
          index = j;
        }
      }
      maxes[i] = max;
      classes[i] = index;
    }
    return [maxes, classes];
  }

  createTensor() {
    const image = document.getElementById("image");
    const tfImg = tf.browser.fromPixels(image);
    const smallImg = tf.image.resizeBilinear(tfImg, [500, 600]);
    const resized = tf.cast(smallImg, "float32");
    return tf.tensor4d(Array.from(resized.dataSync()), [1, 500, 600, 3]);
  }

  createDetections(boxes, classes, indexes, scores) {
    const width = 600;
    const height = 500;
    const count = indexes.length;
    const predictions = [];
    for (let i = 0; i < count; i++) {
      const bbox = [];
      for (let j = 0; j < 4; j++) {
        bbox[j] = boxes[indexes[i] * 4 + j];
      }
      console.log(bbox);
      const minY = bbox[0] * height;
      const minX = bbox[1] * width;
      const maxY = bbox[2] * height;
      const maxX = bbox[3] * width;
      bbox[0] = minX;
      bbox[1] = minY;
      bbox[2] = maxX - minX;
      bbox[3] = maxY - minY;
      let prediction = {
        bbox: bbox,
        class: this.classNames[classes[indexes[i]]],
        score: scores[indexes[i]]
      };
      predictions.push(prediction);
    }
    return predictions;
  }

  createBoundingBoxes(predictions) {
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

  renderPredictions = async () => {
    const t4d = this.createTensor();
    const model = await tf.loadGraphModel(
      "http://127.0.0.1:8080/tfjs_pokemon_model_pp/model.json"
    );

    const result = await model.executeAsync(t4d);
    const scores = tf.cast(result[0], "float32").dataSync();
    const boxes = result[1].dataSync();
    t4d.dispose();
    tf.dispose(result);
    const [maxScores, classes] = this.calculateMaxScores(
      scores,
      result[0].shape[1],
      result[0].shape[2]
    );

    const boxes_two = tf.tensor2d(boxes, [
      result[1].shape[1],
      result[1].shape[3]
    ]);

    const indexTensor = tf.image.nonMaxSuppression(
      boxes_two,
      maxScores,
      20,
      0.5,
      0.5
    );

    let indexes = tf.cast(indexTensor, "float32").dataSync();

    const predictions = this.createDetections(boxes, classes, indexes, scores);
    this.createBoundingBoxes(predictions);
  };

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
