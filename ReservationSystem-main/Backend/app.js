const express = require("express")
const bodyParser = require("body-parser")
var cors = require('cors')
const fs = require('fs');
// create our express app
const app = express()
// middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// route
const routes = require('./Routes/routes')
app.use('/', routes)
//start server
app.listen(3001, ()=>{
    console.log("listeniing at port:3001")
})