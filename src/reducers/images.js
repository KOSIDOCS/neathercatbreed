import { GET_IMAGES } from "../utils/constants";

const imageReducer = (state = [], action) => {
  switch (action.type) {
    case GET_IMAGES:
      return action.images;
    default:
      return state;
  }
};

export default imageReducer;
