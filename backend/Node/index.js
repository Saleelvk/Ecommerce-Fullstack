const express = require("express");
const cors = require("cors");
const { router } = require("./app");
const app = express();
const port = 3000; // Define the port number

app.use(express.json());
app.use(cors());
app.get("/", (req,res,next) => {
  req.send({
     name: "saleel",
     age:'20'
  });

});

app.listen(port, (err) => {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log("Server is running on port: " + port);
  }

});
module.exports= router;