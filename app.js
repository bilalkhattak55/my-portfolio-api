
require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
require("./db/conn")
const router = require("./Routes/router");

const port = 6005;


app.use(cors());
app.use(express.json());

app.use(router);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
  }) 

// app.get('/', (req, res) => {
//     res.status(200).json("server started");
// });

app.listen(port, ()=> {
    console.log(`server is started ${port}`);
})