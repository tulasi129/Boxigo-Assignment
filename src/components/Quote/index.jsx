import React from "react";
import Lhs from "../Lhs/index.jsx";

const Quote = () => {
  return (
    <div className="logout-container">
      <Lhs />
      <div className="rhs">
        <button className="logout-button mt-[200px]">Get Quotes</button>
      </div>
    </div>
  );
};

export default Quote;
