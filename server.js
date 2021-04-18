const express = require("express");
const app = express();
const initializeSettings = require("./initializeSettings");

const newsapi = require("./routes/newsapi");
const haberturkrss = require("./routes/haberTurkRSS");
const cnnTurkRSS = require("./routes/cnnTurkRSS");
const hurriyetGazeteRSS = require("./routes/hurriyetGazeteRSS");
const milliyetGazeteRSS = require("./routes/milliyetGazeteRSS");
const ntvRSS = require("./routes/ntvRSS");
const sabahgazete = require("./routes/sabahGazeteRSS");

initializeSettings(app);

app.use("/api/", newsapi);
app.use("/api/", haberturkrss);
app.use("/api/", cnnTurkRSS);
app.use("/api/", hurriyetGazeteRSS);
app.use("/api/", milliyetGazeteRSS);
app.use("/api/", ntvRSS);
app.use("/api/", sabahgazete);

app.listen(5000, () => {
  console.log("Server running on port 3000");
});
