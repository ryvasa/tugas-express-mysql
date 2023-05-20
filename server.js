const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./app/models/biodata.model");
const biodata = require("./app/controllers/biodata.controller");

dotenv.config();
const port = process.env.PORT || 3000;
const app = express();

db.sequelize
  .sync()
  .then(() => console.log("Synced db."))
  .catch((error) => console.log("Failed to sync db ", error));

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.post("/", (req, res) => {
  biodata.create(req, res);
});

app.get("/", (req, res) => {
  biodata.findAll(req, res);
});

app.get("/:id", (req, res) => {
  biodata.findOne(req, res);
});

app.patch("/:id", (req, res) => {
  biodata.update(req, res);
});

app.delete("/:id", (req, res) => {
  biodata.delete(req, res);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
