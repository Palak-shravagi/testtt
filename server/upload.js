


const multer = require("multer");
var fs = require("fs");

var path = require("path");

var dir = "./public/uploads";


if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: "./public/uploads",
  filename: (req, file, cb) => {
    return cb(
      null,
      ""+path.extname(file.originalname)
    );
  },
});

const limits = { fileSize: 1000 * 1000 };
const Upload = multer({
  storage: storage,
  limits: limits,
});

module.exports = Upload;