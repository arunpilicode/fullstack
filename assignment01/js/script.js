function read(){
	var name1 = document.getElementById("name").value;
	alert(name1);
    //console.log(name1);
    var address = document.getElementById("address").value;
    console.log(address);
	//var gen = document.getElementById("gender").value;
	var age = document.getElementById("age").value;
	var dob = document.getElementById("dob").value;
	var mob = document.getElementById("mob").value;
    var email = document.getElementById("email").value;
    
	//var dis = document.getElementById("district");
	//var dist_select = dis.options[district.selectedIndex].value;
    //console.log(dist_select);

    //var op=document.getElementById("district");
    //var dist=op.options[op.selectedIndex].text;
    //console.log(dist);

	
	//console.log(gen);
	console.log(age);
	console.log(dob);
	
	console.log(mob);
	console.log(email);
	if(name1==" ")
	{
		alert("Please provide your name");
		return false;
	}
	
}	



