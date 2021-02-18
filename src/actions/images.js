import axios from "axios";
import { getErrors } from "./errors";
import { GET_IMAGES } from "../utils/constants";

export const initiateGetImages = (data) => {
  return async (dispatch) => {
    try {
      const images = await axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_id=${data}&limit=100&page=1`
      );
      dispatch(getBreedsImg(images.data));
    } catch (error) {
      error.response && dispatch(getErrors(error.response.data));
    }
  };
};

export const getBreedsImg = (images) => ({
  type: GET_IMAGES,
  images,
});
