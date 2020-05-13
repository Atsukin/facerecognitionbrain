import React from "react";
import { render } from "@testing-library/react";

const FaceRecognition = () => {
  return (
    <div className="center">
      <img src={"https://samples.clarifai.com/face-det.jpg"} />
    </div>
  );
};

export default FaceRecognition;
