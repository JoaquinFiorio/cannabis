const express = require("express");
const router = express.Router();
const path = require("path")

router.get("/", (req, res) => {
    res.render(path.join(__dirname, '../public/views/index.ejs'));
})

router.get("/swap", (req, res) => {
    res.render(path.join(__dirname, '../public/views/swap.ejs'));
})

router.get("/stake", (req, res) => {
    res.render(path.join(__dirname, '../public/views/stake.ejs'));
})

module.exports = router;