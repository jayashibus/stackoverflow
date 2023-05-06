import { ActionTypes } from "../contants/actiontypes";

const initialState = {
  datas: [],
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DATAS:
      return { ...state, datas: [...payload] };

    case ActionTypes.INCREMENT_VOTE:
      console.log("Current state:", state);
      return state.datas.map((post) => {
        if (post.id === payload) {
          return {
            ...post,
            vote: post.vote + 1,
          };
        } else {
          return post;
        }
      });

    case ActionTypes.DECREMENT_VOTE:
      return state.map((post) => {
        if (post.id === payload) {
          return {
            ...post,
            vote: post.vote - 1,
          };
        } else {
          return post;
        }
      });

    default:
      return state;
  }
};
