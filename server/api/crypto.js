const express = require("express");
const router = require("express").Router();
const Axios = require("axios");

router.get("/binance/:pair", async (req, res, next) => {
  try {
    const pair = req.params.pair;
    const { data } = await Axios.get(
      `https://api.binance.com/api/v1/depth?symbol=${pair}`
    );
    const newData = { ask: data.asks[0][0], bid: data.bids[0][0] };
    console.log("!!!!", newData);
    // console.log(newData, "!!!!!!!!!!!!!!!!");
    res.send(newData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
