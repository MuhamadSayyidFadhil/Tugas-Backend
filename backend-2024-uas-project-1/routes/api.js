// import AlumniController
const AlumniController = require("../controllers/AlumniController");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to Alumni API");
});

router.get("/alumni", AlumniController.index);
router.post("/alumni", AlumniController.store);
router.put("/alumni/:id", AlumniController.update);
router.delete("/alumni/:id", AlumniController.destroy);
router.get("/alumni/:id", AlumniController.show);
router.get("/alumni/search/:name", AlumniController.search);
router.get("/alumni/status/fresh-graduate", AlumniController.freshGraduate);
router.get("/alumni/status/employed", AlumniController.employed);
router.get("/alumni/status/unemployed", AlumniController.unemployed);

// export router
module.exports = router;
