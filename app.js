require('dotenv').config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4500;

const routes = require('./api')

app.use('/api', routes)

app.listen(PORT, ()=>console.log(`Server is runnign on port: ${PORT}`))
