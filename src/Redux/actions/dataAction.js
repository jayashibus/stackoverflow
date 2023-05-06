import { ActionTypes } from "../contants/actiontypes";

//All data
export const setDatas = (datas) => {
  return {
    type: ActionTypes.SET_DATAS,
    payload: [...datas],
  };
};

//Increment vote
export const setIncrement = (postId) => {
  return {
    type: ActionTypes.INCREMENT_VOTE,
    payload: postId,
  };
};

//Decrement vote
export const setDecrement = (postId) => {
  return {
    type: ActionTypes.DECREMENT_VOTE,
    payload: postId,
  };
};

//Answer page vote
export const setVoteIncrement = (postId, answerId) => {
  return {
    type: ActionTypes.INCREMENT_CHILD_VOTE,
    payload: { postId, answerId },
  };
};

//Answer page vote
export const setVoteDecrement = (postId, answerId) => {
  return {
    type: ActionTypes.DECREMENT_CHILD_VOTE,
    payload: { postId, answerId },
  };
};
