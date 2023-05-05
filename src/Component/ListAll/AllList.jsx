import React from "react";
import { Link } from "react-router-dom";
const AllList = ({
  id,
  title,
  question,
  tag,
  created,
  modified,
  views,
  vote,
  author,
  answer,
}) => {
  return (
    <div key={id}>
      <div className="List-container">
        <div className="List-vertical-left">
          <div className="Votes">{vote} Votes</div>
          <div className="Votes">{answer.length} Answer</div>
          <div className="Votes">{views} Views</div>
        </div>
        <div className="List-vertical-right">
          <div>
            <Link to={`/detail/${id}`}>{title}</Link>
          </div>
          <div>{question}</div>
          <div className="Button-left ">
            <button> {tag} </button>
            <button> {tag} </button>
            <button> {tag} </button>
          </div>
        </div>
      </div>
      <div className="divider"> </div>
    </div>
  );
};

export default AllList;
