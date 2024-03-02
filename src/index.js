//require('dotenv').config({path: './env'});
import dotenv from "dotenv";
import connectDB from "./db/dbconnection.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

const port = process.env.PORT;
connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error: ", error);

      //Instead of throwing errror we can use also this. Existing process on failure of node deamon thread.
      process.exit(1);
    });

    app.listen(port || 8000, () => {
      console.log(`Server is running at port : ${port}`);
    });
  })
  .catch((error) => {
    console.log("Mongo db connection failed !!!", error);
  });

//This is 1st Approach which is also good but not cleaner.
/*
import express from "express";
const app = express();
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
