const express = require("express");
// const multer = require("multer");
// const fs = require("fs");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

//  ---> Route Login for the admin <---
const userControllers = require("./controllers/userControllers");

router.post("/login", userControllers.login);

// //  ---> Route image upload <---
// const upload = multer({ dest: "uploads/" });
// // const uploadControllers = multer({ dest: "/project" });

// // route POST pour recevoir un fichier
// router.post("/project/image", upload.single("image"), (req, res) => {
//   // On récupère le nom du fichier
//   const { originalname } = req.file;
//   // On récupère le nom du fichier
//   const { filename } = req.file;
//   // On utilise la fonction rename de fs pour renommer le fichier
//   fs.rename(`uploads/${filename}`, `uploads/${originalname}`, (err) => {
//     if (err) throw err;
//     res.send("File uploaded");
//   });
// });

//  ---> Route new project with CRUD for new project <---
const newProjectControllers = require("./controllers/projectControllers");
const fileMiddleware = require("./middleware/fileMiddleware");

router.post("/project", fileMiddleware, newProjectControllers.addProject);
router.get("/project", newProjectControllers.getProject);
router.get("/project/:id", newProjectControllers.getProjectById);
router.put("/project/:id", newProjectControllers.updateProjectById);
router.delete("/project/:id", newProjectControllers.deleteProjectById);

module.exports = router;
