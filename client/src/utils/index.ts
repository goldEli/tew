export { default as http } from "./http"
export { default as timer } from "./timer"

export const getUrlParamsByKey = (key: string) => {

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(key)
} 