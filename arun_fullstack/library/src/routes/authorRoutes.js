const express=require('express');
const authorRouter=express.Router();
function router(nav){

var books=[
    {name:'2 states',author:'chethan bagath',link:'../img/twostates.jpg'},
    {name:'wings of fire',author:'APJ ABDULKALAM',link:'../img/3.jpg'},
    {name:'3 idiots',author:'Rahul dupiya',link:'../img/twostates.jpg'},
    {name:'The Struggle',author:'anand',link:'../img/twostates.jpg'},
    {name:'Discovery of India',author:'JAWAHARLAL NEHRU',link:'../img/twostates.jpg'},   
]
var nav=[
    {link:'/books',title:'Books'},
    {link:'/authors',title:'Authors'},
    {link:'/aboutus',title:'About us'},
    {link:'/contactus',title:'Contact Us'},
    {link:'/addbook',title:'Add Book'},
    ]
    
    var author=[
        {name:'chethan bagath',origin:'india',link:'../img/chet.jpg'},
        {name:'APJ ABDULKALAM',origin:'india'},
        {name:'rahul',origin:'usa'},
        {name:'anand',origin:'australia'},
        {name:'JAWAHARLAL NEHRU',origin:'india'},

    ]

authorRouter.route('/')
.get((req,res)=>{
    res.render('authors',
        {
           nav,
           author,
            title:"authors"
        }
    )
});

authorRouter.route('/:id')
.get((req,res)=>{
    const id=req.params.id;

    res.render(
        'author',
        {
            nav:[
                {link:'/books',title:'Books'},
    
                {link:'/authors',title:'Authors'},],
                title:"author details",
                author:author[id]

            }
    )

});
return authorRouter;
}
module.exports=router;