const express = require('express');
const router = express.Router();
const Game = require('../models/gameSchema');

//Find all games
router.get('/game', (req, res) => {
   console.log(Game)
    Game.find()
      .then((foundGame) => {
        res.status(200).json(foundGame);
      })
      .catch((err) => {
        res.status(404).json({
          message: "page not found in index",
          error: err
        });
      });
  });

module.exports = router;