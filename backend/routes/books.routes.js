const router = require('express').Router();
const Book =require('../models/book.model');

router.route('/').get((req,res)=>{
    Book.find()
    .then(books=>res.json(books))
    .catch(err=>res.status(400).console.log("Error :"+err))
})

router.route('/:id').get((req,res)=>{
    Book.findById(req.params.id)
    .then(book=>res.json(book))
    .catch(err=>res.status(400).console.log("Error :"+err))
})

router.route('/').post((req,res)=>{
    const books=req.body;
    for (let i=0;i<books.length;i++){
        var newBook = new Book({
            bookID:books[i].bookID,
            title:books[i].title,
            authors:books[i].authors,
            average_rating:books[i].average_rating,
            isbn:books[i].isbn,
            language_code:books[i].language_code,
            ratings_count:books[i].ratings_count,
            price:books[i].price
        });
        newBook.save()
        .then(books=>res.json("Added"+books.length))
        .catch(err=>res.status(400).console.log("Error :"+err));
    }
}) 

router.route('/:id').delete((req,res)=>{
    Book.findByIdAndDelete(req.params.id)
    .then(books=>res.json(books))
    .catch(err=>res.status(404).console.log("Error :"+err))
})

module.exports=router;