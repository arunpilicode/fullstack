const express=require('express');
const booksRouter=express.Router();

function router(nav){ 
var books=[
    {name:'2 states',author:'chethan bagath',link:'../img/twostates.jpg'},
    {name:'wings of fire',author:'APJ ABDULKALAM',link:'../img/wing.jpg'},
    {name:'3 idiots',author:'Rahul dupiya',link:'../img/3.jpg'},
    {name:'The Struggle',author:'anand',link:'../img/strugle.png'},
    {name:'Discovery of India',author:'JAWAHARLAL NEHRU',link:'../img/discovery.jpg'},   
]
var nav=[
    {link:'/books',title:'Books'},
    {link:'/authors',title:'Authors'},
    {link:'/aboutus',title:'About us'},
    {link:'/contactus',title:'Contact Us'},
    {link:'/addbook',title:'Add Book'},
    ]

booksRouter.route('/')
.get((req,res)=>{
    res.render('books',
        {
           nav,
           books,
            title:"Library"
        }
    )
});


booksRouter.route('/:id')
.get((req,res)=>{
    const id=req.params.id;

    res.render(
        'book',
        {
            nav,
            title:"library",
            book:books[id]

            }
    );
});
return booksRouter;
}
module.exports=router;