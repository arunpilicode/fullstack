function route(nav)
{
const data=[{course:'CSE',content:"computer science and engineering ",staff:"The computer science Department",student:"The student having the different facilities here."},
{course:'MCA',content:"Master Of Computer Applications",staff:"The postgraduate program forthe students in computer application",student:"Students having the post graduate program here."},
{course:'ECE',content:"Electronics and communication engineering",staff:"The Electronic and communication can be available here",student:"student can gain about electronicd field"},
{course:'MECH',content:"Mechanical Engineering",staff:"The mechanical engineering",student:"Mechanical engineering for students"}];
const express=require('express');
const courseRouter=express.Router();
courseRouter.route('/').get((req,res)=>{
    res.render('courses',{nav});
})
courseRouter.route('/:id').get((req,res)=>{
    var id=req.params.id;
    if(id==1)
    {
        res.render('courses',{nav,details:data[0]});
    }
    else if(id==2)
    {
        res.render('courses',{nav,details:data[1]});
    }
    else if(id==3)
    {
        res.render('courses',{nav,details:data[2]});
    }
    else
    {
        res.render('courses',{nav,details:data[3]});
    }
})
return courseRouter;
}
module.exports=route;