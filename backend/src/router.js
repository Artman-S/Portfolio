const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

// Login

const userControllers = require("./controllers/userControllers");

router.get("/login", userControllers.getuser);

// Admin
const newProjectControllers = require("./controllers/newProjectControllers");

router.get("/newproject", newProjectControllers.getProject);
router.get("/items/:id", newProjectControllers.getProjectById);
router.put("/items/:id", newProjectControllers.projectUpdateById);
router.post("/items", newProjectControllers.addProject);
router.delete("/items/:id", newProjectControllers.deleteProjectById);

module.exports = router;
