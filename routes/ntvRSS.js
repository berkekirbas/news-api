const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { ntvRss } = require("../rss");

router.get("/ntv", (req, res, next) => {
  axios
    .get(ntvRss, {
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
