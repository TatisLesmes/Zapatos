const router = require('express').Router()

router.get("/", (req, res) => {
    res.render("index.ejs");
  });

  router.get("/addProduct", (req, res) => {
    res.render("addProduct.ejs");
  });

  module.exports = router