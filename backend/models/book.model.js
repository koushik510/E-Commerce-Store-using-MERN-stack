const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookID:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    authors:{
        type:String,
        required:true
    },
    average_rating:{
        type:Number,
        required:true
    },
    isbn:{
        type:String,
        required:true
    },
    language_code:{
        type:String,
        required:true
    },
    ratings_count:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
});


module.exports = Book = mongoose.model('book',BookSchema);
