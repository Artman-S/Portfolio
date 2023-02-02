const express = require("express");
const multer = require("multer");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// Route Login for the admin
const userControllers = require("./controllers/userControllers");

router.post("/login", userControllers.login);

// Route image upload
const uploadControllers = multer({ dest: `/project/` });

router.post("/project", uploadControllers.uploadImage);

// Route new project with CRUD for new project
const newProjectControllers = require("./controllers/newProjectControllers");

router.post("/project", newProjectControllers.addProject);
router.get("/project", newProjectControllers.getProject);
router.get("/project/:id", newProjectControllers.getProjectById);
router.put("/project/:id", newProjectControllers.projectUpdateById);
router.delete("/project/:id", newProjectControllers.deleteProjectById);

module.exports = router;
