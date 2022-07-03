import React from "react";
import Avatar from "./Avatar";
import Button from "@material-ui/core/Button";
import Rating from "./Rating.js";

function Review(props) {
  return (
    <div className="reviewWrapper">
      <div className="top">
        <Avatar img={props.img} />
        <h2 className="name">{props.name}</h2>
        <p>{props.date}</p>
        <div className="btndiv">
          <Button
            className="btn"
            style={{ fontSize: "11px" }}
            href="#text-buttons"
            color="primary"
          >
            Report
          </Button>
        </div>
      </div>
      <div className="bottom">
        <Rating value={props.rating} />
        <p>{props.detail} </p>
      </div>
    </div>
  );
}

export default Review;
