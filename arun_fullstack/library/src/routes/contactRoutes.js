const express=require('express');
const contactRouter=express.Router();
function router(nav){ 
var contact="contact us on the following: abcd@gmail.com, 9633203328";

contactRouter.route('/')
.get((req,res)=>{
    res.render('contact',
        {
           nav,
           contact,
           title:"Contact us"
        });
});
return contactRouter;
}
module.exports=router;