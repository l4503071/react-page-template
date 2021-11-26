import axios from "@/util/http";

async function getFileContentFromUrl(url) {
  return await axios.get(url);
}

async function download(url) {
  const name = url.split("/").pop().split("?")[0];
  const image = await fetch(url);
  const imageBlob = await image.blob();
  const imageURL = URL.createObjectURL(imageBlob);
  const link = document.createElement("a");
  link.href = imageURL;
  link.download = name;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(imageURL);
}

function checkSupportIO() {
  // 考虑兼容性可以参考: https://github.com/w3c/IntersectionObserver/blob/main/polyfill/README.md
  const name = "IntersectionObserver";
  return name in window && `${name}Entry` in window;
}

export { getFileContentFromUrl, download, checkSupportIO };
