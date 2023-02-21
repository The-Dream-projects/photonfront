const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("Desktop/index");
});

module.exports = router;