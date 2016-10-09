'use strict';

var mongoose = require('mongoose');

var bookModel = function(){
    var bookSchema = mongoose.Schema({
        title:{
            type:String,
            index:true
        },
        category:{
            type:String
        },
        description:{
            type:String
        },
        author:{
            type:String
        },
        publisher:{
            type:String
        },
        price:{
            type:Number
        },
        cover:{
            type:String
        }
    });

    // shorten text
    bookSchema.methods.getTextPreview = function(length){
        return this.description.substring(0,length)+"...";
    }

    return mongoose.model('Book',bookSchema);
}

module.exports = new bookModel();
