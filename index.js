import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import cors from "cors"

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB sorted!!")
}).catch((err)=>{
    console.log(err)
})

const App = express();

App.use(express.json());

App.use(cors())

App.listen(process.env.PORT,()=>{
    console.log("server is up");
})

