const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// Route Login for the admin

const userControllers = require("./controllers/userControllers");

router.get("/login", userControllers.getUser);

// Route Admin with CRUD for new project
const newProjectControllers = require("./controllers/newProjectControllers");

router.get("/project", newProjectControllers.getProject);
router.get("/project/:id", newProjectControllers.getProjectById);
router.put("/project/:id", newProjectControllers.projectUpdateById);
router.post("/project", newProjectControllers.addProject);
router.delete("/project/:id", newProjectControllers.deleteProjectById);

module.exports = router;
