const path = require("path");
const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const dogRouter = require("./routes/dogRoutes");
const worldRouter = require("./routes/worldRoutes");
const viewRouter = require("./routes/viewRoutes");
const userRouter = require("./routes/userRoutes");
const globalErrorHandler = require("./controller/errorController");
const app = express();

//Global Middlewares

// //set security http headers
// app.use(helmet());
// //limit requests from same API
// const limiter = rateLimit({
//   max: 1500,
//   windowMs: 60 * 60 * 1000,
//   message: "Too many requests from this IP, please try again in an hour!",
// });
// app.use("/api", limiter);

//Data sanitazation against noSQL query injection
// app.use(mongoSanitize());
// //Data sanitization against xss (malicious html code with javascript) so convert symbols
// app.use(xss());
// //Prevent parameter pollution (will need to whitelist parameters that allow multiple inputs in parameter search)
// app.use(hpp());

//Body parser and pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public"))); //middleware that closely works together with pug engine
app.use(express.json({ limit: "10kb" })); // middle ware: here it stands between incoming request data and req object. now data object will be available to req object

// app.use((req, res, next) => {
//   //   req.requestTime = new Date().toISOString();
//   console.log(req.headers);
//   next();
// });

app.use("/", viewRouter);
// app.use("/api/dog", dogRouter);
app.use("/api/world", worldRouter);
// app.use("/api/users", userRouter);

app.use(globalErrorHandler);
module.exports = app;
