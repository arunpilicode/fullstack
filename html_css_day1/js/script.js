
function read()
{
    var name=document.getElementById("name1").value;
    console.log(name);
    var roll=document.getElementById("rno").value;
    console.log(roll);
    var admn=document.getElementById("adno").value;
    console.log(admn)
    var age1=document.getElementById("age").value;
    console.log(age1);

    var op=document.getElementById("district");
    var dist=op.options[op.selectedIndex].text;
    console.log(dist);

   
    if(age1>=18)
    {
        alert("yes..eligible");
    }
    else{
        alert("you are not eligible");
    }
}
    
function calculate()
{
        var num1=document.getElementById("n1").value;
        var num2=document.getElementById("n2").value;
        var x= parseInt(num1);
        var y= parseInt(num2);
         var z=x+y;
         console.log(z);
}
function result()
    {
        var n1=document.getElementById("num1").value;
        var n2=document.getElementById("num2").value;
        var n3=document.getElementById("num3").value;
        
        var x= parseInt(n1);
        var y= parseInt(n2);
        var z= parseInt(n3);
        
        if(x>y)
        {
            if(x>z)
            {
                var res=x;
            }
            else
            {
                var res=y;
            }
        }


        if(y>z)
        {
            var res=y;

        }
        else
        {
            var res=z;
        }
        document.getElementById("result1").innerHTML=res;
    }


    function smallest()
    {
        var n1=document.getElementById("num1").value;
        var n2=document.getElementById("num2").value;
        var n3=document.getElementById("num3").value;
        
        var x= parseInt(n1);
        var y= parseInt(n2);
        var z= parseInt(n3);
        
        if(x<y)
        {
            if(x<z)
            {
               var res=x;
            }
            else
            {
                var res=z;
                
            }
        }


        if(y<z)
        {
            var res=y;

        }
        else
        {
            var res=z;
        }

        document.getElementById("result1").innerHTML="<table><tr><td>Result is:</td><td>res</td></tr></table>";
    }
