import { ActionTypes } from "../contants/actiontypes";

const initialState = {
  datas: [],
};

export const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DATAS:
      return { ...state, datas: [...payload] };

    case ActionTypes.INCREMENT_VOTE:
      return {
        ...state,
        datas: [
          ...state.datas.map((post) => {
            if (post.id === payload) {
              return {
                ...post,
                vote: post.vote + 1,
              };
            } else {
              return post;
            }
          }),
        ],
      };

    case ActionTypes.DECREMENT_VOTE:
      return {
        ...state,
        datas: [
          ...state.datas.map((post) => {
            if (post.id === payload) {
              return {
                ...post,
                vote: post.vote - 1,
              };
            } else {
              return post;
            }
          }),
        ],
      };

    case ActionTypes.INCREMENT_CHILD_VOTE:
      return {
        ...state,
        datas: [
          ...state.datas.map((post) => {
            if (post.id === payload.postId) {
              const updatedAnswers = post.answer.map((answer) => {
                if (answer.id === payload.answerId) {
                  return {
                    ...answer,
                    vote: answer.vote + 1,
                  };
                }
                return answer;
              });
              return {
                ...post,
                answer: updatedAnswers,
              };
            }
            return post;
          }),
        ],
      };

    case ActionTypes.DECREMENT_CHILD_VOTE:
      return {
        ...state,
        datas: [
          ...state.datas.map((post) => {
            if (post.id === payload.postId) {
              const updatedAnswers = post.answer.map((answer) => {
                if (answer.id === payload.answerId) {
                  return {
                    ...answer,
                    vote: answer.vote - 1,
                  };
                }
                return answer;
              });
              return {
                ...post,
                answer: updatedAnswers,
              };
            }
            return post;
          }),
        ],
      };

    default:
      return state;
  }
};
