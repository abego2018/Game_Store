const {Schema} = require('mongoose');
const mongoose = require('mongoose')

const Game = new Schema({

    id: Number,
    title: String,
    price: Number,
    rating: String,
    platform: String,
    genre: String,
    gameImage: String

});

module.exports = mongoose.model('Game', Game);
//Test
// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// //schema
// const bookSchema = new Schema({
//   title: String,
//   description: String,
//   year: Number,
//   quantity: Number,
//   imageURL: String,
// });

// //model and export
// const Book = mongoose.model("Book", bookSchema);
// module.exports = Book;