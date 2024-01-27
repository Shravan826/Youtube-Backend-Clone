//require('dotenv').config({path: './env'});
import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
  path: './env'
})

connectDB();


//This is 1st Approach which is also good but not cleaner.
/*
import express from "express";
const app = express;
//Make the DB connection with Simple IIFE or immediately executing it.
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("Error", (error) => {
      console.log("Error: ",error);
     })

  } catch (error) {
    console.log("Error: ", error);
    throw error;
  }
 })();
*/