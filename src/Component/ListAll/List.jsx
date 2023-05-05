import React from "react";
import { Link } from "react-router-dom";

const List = ({ data }) => {
  const Listing = data.map((item) => {
    const {
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
    } = item;
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
  });
  return (
    <>
      <div className="List-container">
        <div className="Title-left">All Questions</div>
        <div className="Button-right ">
          <Link to="/askquestion">
            <button> Ask Question </button>
          </Link>
        </div>
      </div>
      <div className="List-container">
        <div className="Title-left">23691,456 Question</div>
        <div className="Button-right ">
          <button> Newest </button>
          <button> Active </button>
          <button> Bountied </button>
          <button> Unanswered </button>
          <button> More </button>
        </div>
      </div>
      <div className="divider"> </div>
      {Listing}

      <div className="List-container">
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">6</a>
          <a href="#">&raquo;</a>
        </div>

        <div className="Button-right ">
          <div className="pagination">
            <a href="#">15</a>
            <a href="#">30</a>
            <a href="#">50</a>
            <a href="#">per page</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
