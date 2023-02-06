/* eslint-disable camelcase */
const models = require("../models");

// get existing project
const getProject = (req, res) => {
  models.project
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// get existing project by id

const getProjectById = (req, res) => {
  models.project
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// update existing project

const updateProjectById = (req, res) => {
  const project = req.body;

  // TODO validations (length, format...)

  project.id = parseInt(req.params.id, 10);

  models.project
    .update(project)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// add a new project

const addProject = (req, res) => {
  // eslint-disable-next-line camelcase
  const { title, description, link_project, link_github, status } = JSON.parse(
    req.body.datas
  );
  const { image } = req.body;

  /**
   * project = {
   *  title,
   *  desc,
   *  github,
   *  link
   * }
   */
  models.project
    .insert({ title, description, link_project, link_github, image, status })
    .then(([result]) => {
      res.location(`/project/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Failed to insert project into database" });
    });
};

// delete an existing project

const deleteProjectById = (req, res) => {
  models.project
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getProject,
  getProjectById,
  updateProjectById,
  addProject,
  deleteProjectById,
};
