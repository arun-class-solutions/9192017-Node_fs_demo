const fs = require("fs");
const path = require("path");

const readStream = fs.createReadStream(path.join(__dirname, "wordsEn.txt"));
const writeStream = fs.createWriteStream(path.join(__dirname, "copiedWords.txt"));

readStream.pipe(writeStream);

readStream.on("data", (fileData) => {
  // console.log(fileData.toString());
});

writeStream.on("finish", () => {
  console.log("Write finished!");
});
