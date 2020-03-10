import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/fundGenerationDuration/";

export function getFundGenerationDuration() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
