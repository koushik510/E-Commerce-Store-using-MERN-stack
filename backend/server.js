const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

let uri="mongodb://localhost:27017/books";

mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
const connection = mongoose.connection;
connection.once('open',()=>{console.log("MongoDB successfully connected!!!")});

const booksRouter = require('./routes/books.routes');
app.use('/api/books',booksRouter);

const PORT =process.env.PORT || 5000;

app.listen(PORT,()=>{console.log(`Server is running ar port ${PORT}`)});