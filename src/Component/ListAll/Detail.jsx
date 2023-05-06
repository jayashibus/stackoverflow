import React from "react";
import { useParams } from "react-router-dom";
import Answers from "./Answers";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

import { setIncrement, setDecrement } from "../../redux/actions/dataAction";

const Detail = () => {
  let { qid } = useParams();
  qid = parseInt(qid);
  const dispatch = useDispatch();
  // let data = useSelector((state) => {
  //   return { ...state.allData };
  // });

  const data = useSelector((state) =>
    state.allData.datas?.find((post) => post.id === qid)
  );

  const handleIncrement = (postId) => {
    dispatch(setIncrement(postId));
  };

  const handleDecrement = (postId) => {
    dispatch(setDecrement(postId));
  };

  if (!data) {
    return <div>Loading...</div>;
  }
  // const post = useSelector((state) => state.posts.find((post) => post.id === id));

  // const filteredData = data.datas.find((item) => item.id === qid);

  return (
    <div key={nanoid(6)}>
      <div className="List-container">
        <div className="Title-left">
          <h1>{data.title}</h1>
        </div>
      </div>
      <div className="List-container">
        <div className="Title-left">Asked {data.created}</div>
        <div className="Title-right ">Viewed {data.views} times</div>
      </div>
      <div className="divider"> </div>
      <div className="List-container">
        <div className="List-vertical-left">
          <div className="Votes" onClick={() => handleIncrement(data.id)}>
            <FaArrowUp size={40} />
          </div>
          <div className="Votes">{data.vote}</div>
          <div className="Votes" onClick={() => handleDecrement(data.id)}>
            <FaArrowDown size={40} />
          </div>
        </div>
        <div className="List-vertical-right Lineheight">
          <div className="Bottom-space Padding-top">{data.question}</div>
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
          <h3>{data.answer.length} Answers</h3>
        </div>
      </div>

      {data.answer.map((answerPost) => (
        <Answers parentId={data.id} answerPost={answerPost} />
      ))}
    </div>
  );
};

export default Detail;
