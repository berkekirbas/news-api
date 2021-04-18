const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { sabahGazete } = require("../rss");

router.get("/sabahgazete", (req, res, next) => {
  axios
    .get(sabahGazete, {
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
