// import pageContent from "!!raw-loader!../index.js";

const map = new Map();
map.set("page", "1234");

function readFileContent(type) {
  return map.has(type) ? map.get(type) : "";
}

function isErrorEvent(msg) {
  return Object.prototype.toString.call(msg) === "[object ErrorEvent]";
}

export {
  readFileContent,
  isErrorEvent
};