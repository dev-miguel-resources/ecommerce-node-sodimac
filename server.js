const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
//const bodyParser = require("body-parser");
const cors = require("cors");
const { readFileSync } = require("fs");
require("dotenv").config();

// routes

// app server
const app = express();

// db connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares server
app.use(morgan("dev"));
app.use(express.json({ limit: "2mb" }));
app.use(cors());

// routes middleware

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));