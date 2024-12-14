const SAVE_NEWS = "SAVE_NEWS";
const UNSAVE_NEWS = "UNSAVE_NEWS";

export const saveNews = (newsItem) => {
  return (dispatch) => {
    dispatch({
      type: SAVE_NEWS,
      payload: newsItem,
    });
  };
};
export const unsaveNews = (newsItem) => {
  return (dispatch) => {
    dispatch({
      type: UNSAVE_NEWS,
      payload: newsItem._id,
    });
  };
};

const initialState = {
  data: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NEWS:
      if (!state.data.some((news) => news._id === action.payload._id)) {
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      }
      return state;
    case UNSAVE_NEWS:
      return {
        ...state,
        data: state.data.filter((news) => news._id !== action.payload),
      };
    default:
      return state;
  }
};

export default newsReducer;
