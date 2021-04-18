const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { NEWS_TR_API_KEY } = require("../config");

router.get("/newsapi", (req, res, next) => {
  axios
    .get(NEWS_TR_API_KEY, {
      headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((response) => {
      res.send(response.data.articles);
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
