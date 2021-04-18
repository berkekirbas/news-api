const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { cnnTurkRSS } = require("../rss");

router.get("/cnnturk", (req, res, next) => {
  axios
    .get(cnnTurkRSS, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
