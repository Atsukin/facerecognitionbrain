import React from "react";
import { render } from "@testing-library/react";

const Rank = () => {
  return (
    <div>
      <div className="white f3">{"Andrei, your current rank is..."}</div>
      <div className="white f1">{"#5"}</div>
    </div>
  );
};

export default Rank;
