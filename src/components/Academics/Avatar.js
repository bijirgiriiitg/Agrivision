import React from "react";

function Avatar(props) {
  return (
    <img
      className="circle-img"
      src={props.img ? props.img : "/images/test.jpg"}
      alt="avatar_img"
    />
  );
}

export default Avatar;
