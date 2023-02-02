const models = require("../models");

// get existing project
const getProject = (req, res) => {
  models.newProjectManager
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
  models.newProjectManager
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

const projectUpdateById = (req, res) => {
  const newProjectManager = req.body;

  // TODO validations (length, format...)

  newProjectManager.id = parseInt(req.params.id, 10);

  models.newProjectManager
    .update(newProjectManager)
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
  const project = req.body;
  // TODO validations (length, format...)
  console.warn(req.body);
  models.project
    .insert(project)
    .then(([result]) => {
      res.location(`/project/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

// delete an existing project

const deleteProjectById = (req, res) => {
  models.newProjectManager
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
  projectUpdateById,
  addProject,
  deleteProjectById,
};
