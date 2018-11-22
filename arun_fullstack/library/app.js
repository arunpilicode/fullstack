const express=require('express');
const chalk=require('chalk');
const path=require('path');

var app=new express();
var nav=[
    {link:'/Books',title:'Books'},

    {link:'/authors',title:'Authors'},
    {link:'/aboutus',title:'About us'},
    {link:'/contactus',title:'Contact Us'},
    {link:'/newbook',title:'Add Book'},
    ]

const authorRouter=require('./src/routes/authorRoutes')(nav)
const booksRouter=require('./src/routes/booksRoutes.js')(nav)
const aboutRouter=require('./src/routes/aboutRoutes.js')(nav)
const contactRouter=require('./src/routes/contactRoutes.js')(nav)
const newRouter=require('./src/routes/newRoutes')(nav);

app.use(express.static(path.join(__dirname,"/public")));
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/aboutus',aboutRouter);
app.use('/contactus',contactRouter);
app.use('/newbook',newRouter)


app.set('views','./src/views');
app.set('view engine','ejs');

authorRouter.route('/')
.get((req,res)=>{
    res.send("Hello author");
});

authorRouter.route('/single')
.get((req,res)=>{
res.send("Hello single author");
});


app.get('/',function(req,res){

    res.render(
        'index',
        {
            nav,
            title:"Library"
        }
    )

});
app.listen(3000,function(){
    console.log('listening to port:'+chalk.green('3000'));
})