const express = require("express");
const mongoose = require("mongoose");

const app = express();
// app.get("/",(req,res) => {
// res.send("app is working...");
// });

const connectDB = () =>{
    mongoose.connect("mongodb://localhost:27017//e-com");
    const productSchema = new mongoose.Schema({});
    const product = mongoose.model("products",productSchema);
}
app.listen(8080);
