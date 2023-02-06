const multer = require("multer");
const fs = require("fs");

const UPLOADS = "uploads";

// créer un dossier s'il n'existe pas
if (!fs.existsSync(UPLOADS)) {
  // créer le dossier
  fs.mkdirSync(UPLOADS);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS);
  },
  filename: (req, file, cb) => {
    const name = file.originalname
      .split(" ")
      .join("-")
      .split(".")[0]
      .toLowerCase();
    const extention = file.mimetype.split("/")[1];
    req.body.image = `${name}-${Date.now()}.${extention}`;
    cb(null, `${name}-${Date.now()}.${extention}`);
  },
});

module.exports = multer({ storage }).single("image");
