import express from "express"
import dotenv from "dotenv"
import connectDB from "./Config/db.js"

dotenv.config()
const app = express()
const port = process.env.PORT  || 5000


app.listen(port, ()=>{
    connectDB()
    console.log(`Server started at ${port}`)
})

