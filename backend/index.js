import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'
import cors from "cors"

import api from "./routes/api.js"

mongoose.connect(process.env.MONGO_DB_URI)
.then(() => {console.log("Database connection sucessfull")})
.catch((err) => {console.error("Some error occured: ", err)})

const app = express()
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api", api)

app.get('/', (req, res) => {
  res.send({"message": "running"})
})

app.listen(port, () => {
  console.log(`App listening: http://localhost:${port}`)
})
