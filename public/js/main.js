$(document).ready(function(){
        $('.removebook').click(function(event){
            var deleteId  = $(this).data("id");
            var csrf = $('._csrf').val();
            console.log('/manage/books/delete/' + deleteId);
            $.ajax({
                url: '/manage/books/delete/' + deleteId,
                type:'DELETE',
                data: {_csrf: csrf},
                success:function(data){
                    window.location = '/manage/books';
                }
            });

        });

        $('.removecategory').click(function(event){
            var deleteId  = $(this).data("id");
            var csrf = $('._csrf').val();
            console.log('/manage/categories/delete/' + deleteId);
            $.ajax({
                url: '/manage/categories/delete/' + deleteId,
                type:'DELETE',
                data: {_csrf: csrf},
                success:function(data){
                    window.location = '/manage/categories';
                }
            });

        });
    }
);
