const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Node.js Deployment Successful</h1>
    <p>Your deployment platform is working.</p>
  `);
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server Running on Port 3000");
});
