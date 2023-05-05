import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Answers = ({ post, vote }) => {
  return (
    <div>
      <div className="List-container">
        <div className="List-vertical-left">
          <div className="Votes">
            <FaArrowUp />
          </div>
          <div className="Votes"> {vote}</div>
          <div className="Votes">
            <FaArrowDown />
          </div>
        </div>
        <div className="List-vertical-right">
          <div>{post}</div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
