const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("Mobile/index");
});

module.exports = router;