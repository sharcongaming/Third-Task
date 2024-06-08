
import express   from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'
const Web3 = require('web3');
 import { Login, Register } from "./Controllers/UserControolers.js"
// import Routes from './Routes/index.js'
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config();


app.get("/",(req,res) => {
  res.send("working  here  ......")
})

// app.use('/api/v1', RoutesIndex)

app.post("/register", Register)
app.post("/login", Login)
app.post("/login", Login)




mongoose.connect("mongodb+srv://crewcoding61:samiksha123@cluster0.obnufg3.mongodb.net/GamingUser").then(() => {
    console.log("Connected to DB...")
  })
      .catch( (err) => {
        console.error(`Error connecting to the database:\n${err}`);
    })
  app.listen(8000, () => {
    console.log("Listening on port 8000")
  })



