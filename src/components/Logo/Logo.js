import React from "react";
import Tilt from "react-tilt";
import "./Logo.css";
import brain from "./icon-brain.png";
import { render } from "@testing-library/react";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div
          className="Tilt-inner"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <img src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
