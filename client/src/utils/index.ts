export { default as http } from "./http"
export { default as timer } from "./timer"
export { default as cookie } from "./cookie"

export const getUrlParamsByKey = (key: string) => {

  const url = window.location.href;
  const value = gup(key, url)
  console.log(url, key, value)
  return value
}

function gup( name:string, url:string ) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}