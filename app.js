const path = require("path");
const express = require("express");
const dogRouter = require("./routes/dogRoutes");
const worldRouter = require("./routes/worldRoutes");
const viewRouter = require("./routes/viewRoutes");
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); //middleware that closely works together with pug engine
app.use(express.json()); // middle ware: here it stands between incoming request data and req object. now data object will be available to req object

//app.get("/overview", req);

app.use("/", viewRouter);
app.use("/api/dog", dogRouter);
app.use("/api/world", worldRouter);

module.exports = app;
