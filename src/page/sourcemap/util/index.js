import pageContent from "!!raw-loader!../index.js";

const map = new Map();
map.set("page", pageContent);

function readFileContent(type) {
  return map.has(type) ? map.get(type) : "";
}

export {
  readFileContent
};