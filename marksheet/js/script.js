function login()
{
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
}
function register()
{
    var name=document.getElementById("name").value;
    var address=document.getElementById("address").value;
    if(document.getElementById("r1").checked==true)
    {
        var gender=document.getElementById("r1").value;
    }
    else
    {
        var gender=document.getElementById("r2").value;
    }
    
    var age=document.getElementById("age").value;
    var dob=document.getElementById("dob").value;
    var email=document.getElementById("email").value;
    var disttag=document.getElementById("district");
    var district=disttag.options[disttag.selectedIndex].text;
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;
   /* console.log(name);
    console.log(address);
    console.log(gender);
    console.log(age);
    console.log(dob);
    console.log(email);
    console.log(district);
    console.log(user);
    console.log(pass);*/
}
function graded(x,y)
{
    percentage=(x*100)/y;
    if(percentage>95)
    {
        grade="S";
        return grade;
    }
    else if(percentage>90)
    {
        grade="A+";
        return grade;
    }   
    else if(percentage>85)
    {
        grade="A";
        return grade;
    } 
    else if(percentage>80)
    {
        grade="B+";
        return grade;
    } 
    else if(percentage>75)
    {
        grade="B";
        return grade;
    } 
    else if(percentage>70)
    {
        grade="C+";
        return grade;
    } 
    else if(percentage>65)
    {
        grade="C";
        return grade;
    }  
    else if(percentage>60)
    {
        grade="D+";
        return grade;
    }   
    else if(percentage>55)
    {
        grade="D";
        return grade;
     
    }  
    else if(percentage>=50)
    {
        grade="E";
        return grade;
       
    }  
    else
    {
        grade="F";
        return grade;
    }
  
}
function marklist()
{
    var inp1=document.getElementById("inp1").value;
    var inp2=document.getElementById("inp2").value;
    var inp3=document.getElementById("inp3").value;
    var inp4=document.getElementById("inp4").value;
    var inp5=document.getElementById("inp5").value;
    var inp6=document.getElementById("inp6").value;
    var inp7=document.getElementById("inp7").value;
    var inp8=document.getElementById("inp8").value;
    var inp9=document.getElementById("inp9").value;
    var inp10=document.getElementById("inp10").value;
    var inp11=document.getElementById("inp11").value;
    var inp12=document.getElementById("inp12").value;
    var inp13=document.getElementById("inp13").value;
    var inp14=document.getElementById("inp14").value;
    var inp15=document.getElementById("inp15").value;
    var inp16=document.getElementById("inp16").value;
    document.getElementById("name").innerHTML=inp1;
    document.getElementById("regno").innerHTML=inp2;
    document.getElementById("sem").innerHTML=inp3;
    document.getElementById("college").innerHTML=inp4;
    document.getElementById("sub1_name").innerHTML=inp5;
    document.getElementById("sub1_mark").innerHTML=inp6;
    document.getElementById("sub1_total").innerHTML=inp7;
    document.getElementById("sub1_grade").innerHTML=graded(inp6,inp7);
    document.getElementById("sub2_name").innerHTML=inp8;
    document.getElementById("sub2_mark").innerHTML=inp9;
    document.getElementById("sub2_total").innerHTML=inp10;
    document.getElementById("sub2_grade").innerHTML=graded(inp9,inp10);
    document.getElementById("sub3_name").innerHTML=inp11;
    document.getElementById("sub3_mark").innerHTML=inp12;
    document.getElementById("sub3_total").innerHTML=inp13;
    document.getElementById("sub3_grade").innerHTML=graded(inp12,inp13);
    document.getElementById("sub4_name").innerHTML=inp14;
    document.getElementById("sub4_mark").innerHTML=inp15;
    document.getElementById("sub4_total").innerHTML=inp16;
    document.getElementById("sub4_grade").innerHTML=graded(inp15,inp16);
}
