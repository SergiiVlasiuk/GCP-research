const express = require("express");
const app = express();
const PORT = process.env.PORT || 8085;

app.get("/", (req, res) => {
  res.send("Hello GCP Learner!!");
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      `Version 1. Express app Successfully Running, and App is listening on port ${PORT}`
    );
  } else console.log("Error occurred, server can't start", error);
});
