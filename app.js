require('dotenv').config(); //Loading all environment variable 
const express = require('express');
const bodyParser = require('body-parser');
//Importing Custom Routes
const newProduct = require('./Controller/Routes/New')
const readProduct = require('./Controller/Routes/Read')
const updateProduct = require('./Controller/Routes/Update')
const deleteProduct = require('./Controller/Routes/Delete')
const filterProduct = require('./Controller/Routes/filter')
//Importing Database Connection Function
const connectToDb = require('./models/db');
//Function to connect to the database
connectToDb();

const port= process.env.PORT || 8000;
const app = express();
const route = '/api/v1'

// Express Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(route, newProduct);
app.use(route, readProduct);
app.use(route, updateProduct);
app.use(route, deleteProduct);
app.use(route, filterProduct);

//Starting the server
app.listen(port, ()=>{
    console.log(`Server is running on http://127.0.0.1:${port}`)
})


