import React from "react";
import { useParams } from "react-router-dom";
import Answers from "./Answers";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Detail = ({ data }) => {
  const { qid } = useParams();

  const filteredData = data.filter((item) => item.id == qid);

  return (
    <div>
      {filteredData.map((selectedQuestion) => (
        <div>
          <div className="List-container">
            <div className="Title-left">{selectedQuestion.title}</div>
          </div>
          <div className="List-container">
            <div className="Title-left">Asked Today</div>
            <div className="Title-right "> Viewed 5 times </div>
          </div>
          <div className="divider"> </div>
          <div className="List-container">
            <div className="List-vertical-left">
              <div className="Votes">
                <FaArrowUp />
              </div>
              <div className="Votes">{selectedQuestion.vote}</div>
              <div className="Votes">
                {" "}
                <FaArrowDown />
              </div>
            </div>
            <div className="List-vertical-right">
              <div>{selectedQuestion.question}</div>
              <div className="Button-left ">
                <button> javaScript </button>
                <button> python </button>
                <button> backend </button>
              </div>
            </div>
          </div>
          <div className="divider"> </div>
          <div className="List-container">
            <div className="Title-left">
              {selectedQuestion.answer.length} Answers{" "}
            </div>
          </div>

          {selectedQuestion.answer.map((answerPost) => (
            <Answers key={answerPost.id} {...answerPost} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Detail;
