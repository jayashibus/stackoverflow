import React from "react";
import { useParams } from "react-router-dom";
import Answers from "./Answers";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

import { setIncrement, setDecrement } from "../../redux/actions/dataAction";

import { ActionTypes } from "../../redux/contants/actiontypes";

const Detail = () => {
  let { qid } = useParams();
  qid = parseInt(qid);

  const dispatch = useDispatch();
  let data = useSelector((state) => {
    return { ...state.allData };
  });

  const handleIncrement = (postId) => {
    dispatch(setIncrement(postId));
  };

  const handleDecrement = () => {
    dispatch(setDecrement(qid));
  };

  const filteredData = data.datas.find((item) => item.id === qid);

  return (
    <div key={nanoid(6)}>
      <div className="List-container">
        <div className="Title-left">
          <h1>{filteredData.title}</h1>
        </div>
      </div>
      <div className="List-container">
        <div className="Title-left">Asked {filteredData.created}</div>
        <div className="Title-right ">Viewed {filteredData.views} times</div>
      </div>
      <div className="divider"> </div>
      <div className="List-container">
        <div className="List-vertical-left">
          <div
            className="Votes"
            onClick={() => handleIncrement(filteredData.id)}
          >
            <FaArrowUp size={40} />
          </div>
          <div className="Votes">{filteredData.vote}</div>
          <div
            className="Votes"
            onClick={() => handleDecrement(filteredData.id)}
          >
            <FaArrowDown size={40} />
          </div>
        </div>
        <div className="List-vertical-right Lineheight">
          <div className="Bottom-space Padding-top">
            {filteredData.question}
          </div>
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
          <h3>{filteredData.answer.length} Answers</h3>
        </div>
      </div>

      {filteredData.answer.map((answerPost) => (
        <Answers key={answerPost.id} {...answerPost} />
      ))}
    </div>
  );
};

export default Detail;
