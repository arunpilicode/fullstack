const express=require('express');
const aboutRouter=express.Router();
function router(nav){ 
var about="the about us page";

aboutRouter.route('/')
.get((req,res)=>{
    res.render('about',
        {
           nav,
           about,
           title:"About us"
        });
});
return aboutRouter;
}
module.exports=router;