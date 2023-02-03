const models = require("../models");

// add image to project

const uploadImage = (req, res) => {
  console.warn(req.file);
  // eslint-disable-next-line camelcase
  const image = req.file;
  // TODO validations (length, format...)
  console.warn(req.file);
  models.project
    .insert(image)
    .then(([result]) => {
      res.location(`/project/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
module.exports = {
  uploadImage,
};
