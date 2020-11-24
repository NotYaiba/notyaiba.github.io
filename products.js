const mongoose = require("mongoose");

const products = new mongoose.Schema({
     name: {
         type: String,
         require: true
     },
})