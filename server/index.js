const express = require("express");
const app = express();
const cors = require("cors");

const {
  login,
  register,
  saveTrail,
  getTrails,
  getSavedTrails,
} = require("./controllers/database");

app.use(express.json());
app.use(cors());
//app.use(express.static(path.resolve(_dirname, "../build")));

app.post("/login", login);
app.post("/register", register);
app.post("/savetrail", saveTrail);
app.post("/getsavedtrails", getSavedTrails);

app.get("/trails", getTrails);

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(_dirname, "../build", "index.html"));
// });

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
