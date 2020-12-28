export { default as http } from "./http"
export { default as timer } from "./timer"
export { default as cookie } from "./cookie"

export const getUrlParamsByKey = (key: string) => {

  const queryString = window.location.href;
  const url = new URL(queryString);
  return url.searchParams.get(key)
} 