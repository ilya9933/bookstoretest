const multer = require("multer");

const storege = multer.diskStorage({
  destination(req, file, cb) {
    cb(nul, "images/");
  },
  filename(req, file, cb) {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const types = ["image/png", "image/jpeg", "image/jpg"];

const filleFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limits = {
  fileSize: 1024 * 1024 * 5,
};

module.exports.images = multer({ storege, filleFilter, limits }).single("file");
