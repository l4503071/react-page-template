import axios from "@/util/http";

async function getFileContentFromUrl(url) {
  return await axios.get(url);
}

export {
  getFileContentFromUrl
};