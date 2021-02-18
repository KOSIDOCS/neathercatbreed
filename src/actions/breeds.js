import axios from "axios";
import { getErrors } from "./errors";
import { GET_BREEDS } from "../utils/constants";

export const startLoading = () => {
  return async (dispatch) => {
    try {
      const breeds = await axios.get(`https://api.thecatapi.com/v1/breeds`);
      dispatch(loadBreeds(breeds.data));
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const loadBreeds = (breeds) => ({
  type: GET_BREEDS,
  breeds,
});
