//********** */ Core Modules ******************//
const path = require("path");

/**************** 3rd Party Module**************** */
const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  session = require("express-session"),
  randomString = require("randomstring"),
  cors = require("cors");
require("dotenv").config();

console.log(process.env.DB_URL);

/*************** Import Module *********************** */
const swagger = require("./app/config/swagger.json"),
  CONSTANTS = require("./app/config/constants"),
  MobileRoutes = require("./app/Routes/mobile");
// Connection to mongoDB
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// Middlewares
const middleware = [
  express.json({ type: "application/json" }),
  express.urlencoded({ extended: true }),
  // image,
  express.raw(),
  express.static(path.join(__dirname, "public")),
  session({
    key: "id",
    secret: randomString.generate(32),
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  }),
  cors(),
];

app.use(middleware);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, accessToken"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");

  next();
});

app.use("/user", MobileRoutes.User);

process.on("uncaughtException", (code) => {
  console.log(`About to exit with code: ${code}`);
});

process.on("unhandledRejection", (code) => {
  console.log(`About to exit with code: ${code}`);
});
process.on("warning", (e) => console.warn(e.stack));
app.listen(5002, () => console.log("Listening on port", CONSTANTS.port));
