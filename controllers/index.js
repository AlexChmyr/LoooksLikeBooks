'use strict';

var Book = require('../models/bookModel');

module.exports = function (router) {

    router.get('/', function (req, res) {
        Book.find({},function (err,books) {
            if(err){
                console.log(err);
            }
            else{

                books.forEach(function(book){
                    book.textPreview = book.getTextPreview(50);
                });
                var model = {
                    'books':books
                }
                res.render('index', model);
            }
        });
        //res.render('index');
    });

};
