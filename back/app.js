const express = require("express");
const routerUser = require("./routers/auth");
const routerBook = require("./routers/book");
const parser = require("body-parser");
const path = require("path");
const cors = require("cors");
const multer = require("multer");

const app = express();

app.use(cors());
app.use(express.json());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use("/static", express.static("static"));
app.use(multer({ dest: "static" }).single("file"));
app.use("/api/auth", routerUser);
app.use("/book", routerBook);

module.exports = app;
