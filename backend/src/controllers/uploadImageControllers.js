const models = require("../models");

// add image to project

const uploadImage = (req, res) => {
  console.warn(req.body);
  // eslint-disable-next-line camelcase
  const image = req.body;
  // TODO validations (length, format...)
  console.warn(req.body);
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
