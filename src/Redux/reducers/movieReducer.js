import { ActionTypes } from "../contants/actiontypes";

const initialState = {
  stackFlowData: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIES:
      return { ...state, stackFlowData: [...payload] };

    case ActionTypes.SELECTED_CATEGORY_MOVIE:
      return {
        ...state,
        movie: state.movies.filter((movie) => movie.media_type === "movie"),
      };

    case ActionTypes.SELECTED_CATEGORY_TV:
      return {
        ...state,
        tv: state.movies.filter((movie) => movie.media_type === "tv"),
      };
    case ActionTypes.SELECTED_CATEGORY_PERSON:
      return {
        ...state,
        person: state.movies.filter((movie) => movie.media_type === "person"),
      };

    default:
      return state;
  }
};
