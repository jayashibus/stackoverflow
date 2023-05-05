import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Answers = ({ post, vote, postedDate, author }) => {
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
          <div className="Bottom-space Padding-top">{post}</div>
          <div className="List-container">
            <div className="Button-left Bottom-space">
              <input type="text" placeholder="Comment" />
            </div>
            <div className="Button-right Bottom-space smallfont">
              {author} asked {postedDate}
            </div>
          </div>
        </div>
      </div>

      <div className="divider"> </div>
    </div>
  );
};

export default Answers;
