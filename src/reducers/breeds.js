import { GET_BREEDS } from "../utils/constants";

const profileReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BREEDS:
      return action.breeds;
    default:
      return state;
  }
};

export default profileReducer;
