import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        <h2 className="page-title">About</h2>
        <h3>info about website</h3>
        <p>
          This site uses a object detection model trained by tensorflow to
          identify pokemon
        </p>
        <h3>how to use website</h3>
        <p>
          copy an image url into the input bar. Once the image shows up click
          the "Use Image" button If the image doesn't display, the program will
          throw an error
        </p>
        <ul>
          Pokemon current trained for
          <li>Charizard</li>
          <li>Gardevoir</li>
          <li>Greninja</li>
          <li>Mudkip</li>
          <li>Pikachu</li>
        </ul>
        <ul>
          Example Image URLs
          <li>
            <span className="expected">Gardevoir:</span>
            <br />
            https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/559aad62-96ec-402d-8161-aeb4cb52c34b/dd0nkbu-f8b9d588-0a13-47bd-9af0-bd58183f6474.png/v1/fill/w_939,h_851,strp/graceful_gardevoir_render_by_therealdjthed_dd0nkbu-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzYzOSIsInBhdGgiOiJcL2ZcLzU1OWFhZDYyLTk2ZWMtNDAyZC04MTYxLWFlYjRjYjUyYzM0YlwvZGQwbmtidS1mOGI5ZDU4OC0wYTEzLTQ3YmQtOWFmMC1iZDU4MTgzZjY0NzQucG5nIiwid2lkdGgiOiI8PTQwMTcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BQowyyMh2W9pnOp_KefzZMTv3e0DsGcZuWxVB42Orzs
          </li>
          <li>
            <span className="expected">Pikachu:</span>
            <br />
            https://mondrian.mashable.com/2019%252F02%252F26%252F13%252F4e412e865d394818bb2fb9153f31fe8e.1c939.png%252F1200x630.png?signature=1AXrJ9jaweV-RhF46bG9FaPMa0E=
          </li>
          <li>
            <span className="expected">Pikachu, Charizard:</span>
            <br />
            https://qph.fs.quoracdn.net/main-qimg-1eadbab2d4dbe87be3ec2a4ce0ef90ac
          </li>
          <li>
            <span className="expected">Mudkip x4:</span>
            <br />
            https://vignette.wikia.nocookie.net/legendsofthemultiuniverse/images/8/88/Mudkips.jpg/revision/latest?cb=20170107064331
          </li>
          <li>
            <span className="expected">Mudkip x2:</span>
            <br />
            https://www.nintendoenthusiast.com/wp-content/uploads/2019/06/mudkip-meme-800x400.jpg
          </li>
          <li>
            <span className="expected">Mudkip, Pikachu:</span>
            <br />
            https://images-na.ssl-images-amazon.com/images/I/71bC9CjfJML._SX425_.jpg
          </li>
          <li>
            <span className="expected">Mudkip x6:</span>
            <br />
            https://i2.wp.com/shop.pmsinfirm.org/wp-content/uploads/258Mudkip.png?fit=2000%2C1201&ssl=1
          </li>
          <li>
            <span className="expected">Greninja:</span>
            <br />
            https://vignette.wikia.nocookie.net/vsbattles/images/4/43/1528826562395.png/revision/latest?cb=20180612202648
          </li>
          <li>
            <span className="expected">Nothing:</span>
            <br />
            https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/01/1485261383gridautoplacement-setrownosetcolumn-position.png
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
