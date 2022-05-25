const express = require('express');
const router = express.Router();
const Game = require('../models/gameSchema');

const game = [
    
    {
        "title" : "Resident evil"
    }
    ]

// router.get('/game', async (req, res) => {
// //     console.log('Route connected')
// //     try{
// //         const gameFound = await Game.find();
// //         res.json(gameFound);
       
// //     }catch(err){
// //         res.json(err);
// //     }
// const gameFound = Game.find()
//  .then(

//  )
// res.json(game)
// })

router.get("/game", (req, res) => {
   console.log(Game)
    Game.find()
      .then((foundBooks) => {
        res.status(200).json(foundBooks);
      })
      .catch((err) => {
        res.status(404).json({
          message: "page not found in index",
        });
      });
  });


module.exports = router;