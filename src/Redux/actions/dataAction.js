import { ActionTypes } from "../contants/actiontypes";
export const setDatas = (datas) => {
  return {
    type: ActionTypes.SET_DATAS,
    payload: [...datas],
  };
};

export const setIncrement = (postId) => {
  return {
    type: ActionTypes.INCREMENT_VOTE,
    payload: postId,
  };
};
export const setDecrement = (postId) => {
  return {
    type: ActionTypes.DECREMENT_VOTE,
    payload: postId,
  };
};
