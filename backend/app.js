const express = require("express");

//config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
//import  routes
const user = require("./controllers/user");
const shop = require("./controllers/shop");
const product = require("./controllers/product");

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"], // frontend origin
    credentials: true, // allow cookies / auth headers
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use("/api/v2/user", user);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);

//It's for ErrorHandling
app.use(ErrorHandler);
module.exports = app;
