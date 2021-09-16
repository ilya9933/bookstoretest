const express = require("express");
const controllers = require("../controllers/book");
const router = express.Router();

router.get("/get", controllers.getBook);
router.get("/get/info", controllers.getInfoBooks);

module.exports = router;
