'use strict';

var Book = require('../models/bookModel');
var Category = require('../models/categoryModel');

module.exports = function (router) {

    router.get('/', function (req, res) {

        var cart = req.session.cart;
        var displayCart = {items:[],total:0};
        var total = 0;

        for(var item in cart){
            displayCart.items.push(cart[item]);
            total += cart[item].value;
        }
        displayCart.total = total;

        res.render('cart/index',{cart:displayCart});
    });

    router.post('/:id', function (req, res) {

        req.session.cart = req.session.cart || {};
        var cart = req.session.cart;

        Book.findOne({_id:req.params.id},function (err,book) {
            if(err){
                console.log(err);
            }
            else{
                if(cart[req.params.id]){
                    cart[req.params.id].quantity++;
                    cart[req.params.id].value = cart[req.params.id].quantity*cart[req.params.id].price;
                }
                else{
                    cart[req.params.id] = {
                        _id : book._id,
                        title : book.title,
                        price : book.price,
                        quantity : 1,
                        value: book.price
                    }
                }
            }

            res.redirect('/cart');
        });
    });

    router.get('/remove/:id', function (req, res) {

        req.session.cart = req.session.cart || {};
        var cart = req.session.cart;

        if(cart[req.params.id]){
            if(cart[req.params.id].quantity==1){
                delete cart[req.params.id];
            }
            else{
                cart[req.params.id].quantity--;
            }
        }

        res.redirect('/cart');
    });

    router.get('/remove', function (req, res) {
        req.session.cart = {};
        res.redirect('/cart');
    });

};
