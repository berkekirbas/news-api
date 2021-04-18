const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { milliyetGazete } = require("../rss");

router.get("/milliyetgazete", (req, res, next) => {
  axios
    .get(milliyetGazete, {
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
