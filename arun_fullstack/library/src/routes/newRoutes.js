const express=require('express');

const newRouter=express.Router();

function router(nav) {

var newBook=[
  {
    name:'Enter the name of the new Book',
    Author: 'Enter the name of the Author'
  }
]

  newRouter.route('/')
    .get((req,res)=>{
      res.render('newbook',{
        nav,
        newBook,
        title: "ADD A NEW BOOK"
      });
    });

    return newRouter;
}

module.exports=router;
