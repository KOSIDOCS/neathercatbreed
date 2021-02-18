import { GET_ERRORS } from "../utils/constants";

export const getErrors = (errors) => ({
  type: GET_ERRORS,
  errors,
});
