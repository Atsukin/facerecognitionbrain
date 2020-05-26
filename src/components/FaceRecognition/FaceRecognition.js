import React from "react";
import { render } from "@testing-library/react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img alt="" id="inputimage" src={imageUrl} width="500px" heigh="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
