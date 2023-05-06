import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import {
  setVoteIncrement,
  setVoteDecrement,
} from "../../redux/actions/dataAction";

const Answers = ({ parentId, answerPost }) => {
  const { id, post, vote, postedDate, author } = answerPost;

  const dispatch = useDispatch();

  const handleAnswerIncrement = (postId, answerId) => {
    dispatch(setVoteIncrement(postId, answerId));
  };

  const handleAnswerDecrement = (postId, answerId) => {
    dispatch(setVoteDecrement(postId, answerId));
  };

  return (
    <div key={nanoid(6)}>
      <div className="List-container">
        <div className="List-vertical-left">
          <div
            className="Votes"
            onClick={() => handleAnswerIncrement(parentId, id)}
          >
            <FaArrowUp size={40} />
          </div>
          <div className="Votes">{vote}</div>
          <div
            className="Votes"
            onClick={() => handleAnswerDecrement(parentId, id)}
          >
            <FaArrowDown size={40} />
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
