import { getFileContentFromUrl } from "@/util";

async function analyzeSourcemap(error) {
  const mapContent = await getFileContentFromUrl(`${error.url}.map`);
  return new Promise((res) => {
    sourceMap.SourceMapConsumer.with(mapContent, null, (consumer) => {
      const position = consumer.originalPositionFor({
        line: Number(error.lineNo),
        column: Number(error.columnNo),
      });
      const content = consumer.sourceContentFor(position.source);
      res({
        content,
        ...position,
      });
    });
  });
}

export {
  analyzeSourcemap
};