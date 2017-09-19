const fs = require("fs");
const path = require("path");

const copyFile = (inputPath, outputPath) => {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(path.join(__dirname, inputPath));
    const writeStream = fs.createWriteStream(path.join(__dirname, outputPath));

    readStream.pipe(writeStream);

    writeStream.on("finish", () => {
      resolve();
    });

    readStream.on("error", (err) => {
      reject(err);
    });

    writeStream.on("error", (err) => {
      reject(err);
    });
  });
}

module.exports = copyFile;
