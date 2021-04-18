const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { haberTurkRSS } = require("../rss");

router.get("/haberturk", (req, res, next) => {
  axios
    .get(haberTurkRSS, {
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
