const { Router } = require("express");
const router = Router();
const axios = require("axios");
const { hurriyetGazete } = require("../rss");

router.get("/hurriyetgazete", (req, res, next) => {
  axios
    .get(hurriyetGazete, {
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
