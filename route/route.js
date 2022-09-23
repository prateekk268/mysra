const express = require('express');
const router = express.Router();

const user = require("../controller/userController");


router.post("/student", user.createStudent)
router.get("/student", user.getAllStudent)
router.get("/student/:id", user.getStudent)
router.put("/student/:id", user.updateStudent)
router.delete("/student/:id", user.deleteStudentID);
router.delete("/student", user.deleteStudent);




module.exports = router