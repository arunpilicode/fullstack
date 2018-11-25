function route(nav)
{
const data=[[{name:"Mr.Abhilash k",designation:"HOD",specialization:"cs"},{name:"Mr.dheeraj",designation:"Assitant Professor",specialization:"cs"}],
[{name:"Mr.Rajesh v",designation:"Assistant professor",specialization:"mca"},{name:"Mr.Nathan",designation:"HOD",specialization:"mca"}],
[{name:"Mr.Girish",designation:"Assistant professor,electronics",specialization:"ec"},{name:"Mr.john",designation:"Assistant professor",specialization:"Electronics"}],
[{name:"Mr.prasanth",designation:"HOD,Mechanicl Engineering",specialization:"mechanical"},{name:"mr.Amal",designation:"assistant professor",specialization:"Mechanical"}]
];
const stream=["CSE","MCA","ECE","ME"];
const express=require('express');
const departmentRouter=express.Router();
departmentRouter.route('/').get((req,res)=>{
    res.render('departments',{nav});
})
departmentRouter.route('/:id/:id1?').get((req,res)=>{
    var id=req.params.id;
    var id1=req.params.id1;
      if(id1==undefined)
        {
            res.render('departments',{nav,details:data[id-1],index:id,course:stream[id-1]});
        }
        else
        {
            data1=[data[id-1][id1]];
            res.render('departments',{nav,details:data1,index:5,course:stream[id-1]});
        }

})
return departmentRouter;
}
module.exports=route;