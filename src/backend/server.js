const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const PORT = process.env.PORT;
// const MONGO_URI = process.env.MONGO_URI;

require("dotenv").config(); 
//Middleware(order is important!)
app.use(express.json()); 
// app.use(cors())

const gameController = require('./controllers/gameController');
app.use('/', gameController);
app.get('/', (req, res) => {

res.send('Home Page');

})

// Connect to mongodb
mongoose.connect('mongodb://localhost:27017', ()=> console.log('db connected'), { useNewUrlParser: true,useUnifiedTopology: true}
);

app.listen(3000, () => console.log("Server is running"));