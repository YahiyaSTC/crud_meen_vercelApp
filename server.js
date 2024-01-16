require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/db");
connectDB();

const app = express();
const port = process.env.PORT || 8000;
const serverEnv = process.env.NODE_ENV

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");

app.use("", require("./Controller/mainController.js"));


// if(serverEnv !== "development"){
  // app.listen(port, () => {
  //   console.log(`server is listing on host http://localhost:${port}`);
  // });
// }else{
  app.listen();
// }
