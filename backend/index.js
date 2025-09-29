import express from "express"
import dotenv from "dotenv"
import connectDB from "./Config/db.js"

dotenv.config()
const app = express()
const port = process.env.PORT  || 5000

// Global Middile Ware  --> can work with any route..
app.use(express.json())


app.listen(port, ()=>{
    connectDB()
    console.log(`Server started at ${port}`)
})

