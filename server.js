//require express
const express = require('express');

// Create  Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
 

//Create port 
require('dotenv').config()
const port = process.env.port ||5510



//Create route
app.listen(port,(error)=>{
error?console.log('error'):console.log(`the server is running at http://127.0.0.1:${port}`)});

//conect db 
const connect= require('./connectDb/connectDB');
connect(); 
  
 
