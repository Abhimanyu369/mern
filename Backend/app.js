require("dotenv").config()
const mongoose = require('mongoose');
const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")

// Routes
const authRoutes = require("./routes/auth")
const userRoute = require("./routes/user")
const categoryRoute = require("./routes/category")
const productRoute = require("./routes/product")
const orderRoute = require("./routes/order")

// DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("DB CONNECTED")
}).catch(()=>{
    console.log("ERROR!!!")
})

// Middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

// Routes
app.use("/api", authRoutes)
app.use("/api", userRoute)
app.use("/api", categoryRoute)
app.use("/api", productRoute)
app.use("/api", orderRoute)

// Port
const port = process.env.PORT || 8000

// Starting a Server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
})