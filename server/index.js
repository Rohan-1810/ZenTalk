const express=require("express");
const app=express();
const path = require('path');
const dotenv=require("dotenv");
const mongoose = require("mongoose");
const cors=require("cors");

app.use(cors({ origin: 'http://localhost:5173' }));

dotenv.config();
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.listen(process.env.PORT,()=>{
    console.log("App is listening...")
})