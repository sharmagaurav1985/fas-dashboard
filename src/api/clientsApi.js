import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/clients/";

export function getClients() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

function reduceByYear(res) {
  const yearWiseCounts = res.clients.reduce((p, c) => {
    const yearOfStarting = c.StartingYear;
    if (!p.hasOwnProperty(yearOfStarting)) {
      p[yearOfStarting] = 0;
    }
    p[yearOfStarting]++;
    return p;
  }, {});
  return yearWiseCounts;
}

function yearWiseJson(res) {
  return Object.keys(res).map(x => {
    return [x, res[x]];
  });
}

export function getYearWiseClients() {
  return fetch(baseUrl)
    .then(handleResponse)
    .then(reduceByYear)
    .then(yearWiseJson)
    .catch(handleError);
}

function getStatusWiseClients(res) {
  return res;
}

export function getGetActiveInActiveClients() {
  return fetch(baseUrl)
    .then(handleResponse)
    .then(getStatusWiseClients)
    .catch(handleError);
}
