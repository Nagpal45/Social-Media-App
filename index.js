const dotenv = require("dotenv");
const express = require("express");
const mongoose= require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const postsRoute = require("./routes/posts")

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to Mongodb'));


//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users" , userRoute)
app.use("/api/auth" , authRoute)
app.use("/api/posts",postsRoute)


app.listen(8800,()=>{
    console.log("Backend server running");
})
