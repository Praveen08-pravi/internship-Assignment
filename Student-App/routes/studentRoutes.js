const express = require("express");
const router = express.Router();

const StudentController = require("../controller/Studentcontroller");

router.get("/", StudentController.getStudents);
router.get("/:id", StudentController.getStudent);
router.post("/", StudentController.createStudent);

module.exports = router;