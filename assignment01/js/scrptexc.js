
/*1. Write a JavaScript function to get an array and to read the first element of an array.
Check whether it is prime or not.*/

function getArray(n){
	var prime = true;

		if(n[0]===0){prime=false;}
	 if(n[0]>2){
	 		
		for(i=2;i<n[0];i++){
			
			if(n[0]%i===0){
				prime = false;
				
			}
		}
	}
	if(prime){
	console.log(n[0]+' is a prime');}
	else{
		console.log(n[0]+' is not a prime');
	}
}
/*
2. Write a JavaScript program to find the most frequent item of an array.
*/
function mostFrequent(n){

	var counts = {};
	n.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
	var count = [];
	n.sort();
	count.push(n[0]);
	for(i=0;i<n.length-1;i++){

		if(n[i]!=n[i+1])
			count.push(n[i+1]);
	}
	var big = 0;
	if(count.length==1){return count[0]+"is most frequent"}
	for(i=0;i<count.length-1;i++){
		if(counts[count[i]]>counts[count[i+1]]){
			if(count[i]>big){
			big = count[i]}
		}else{
			if(count[i+1]>big){
			big = count[i+1]}
		}
	}
console.log(big+" is most frequent");
console.log(big+" repeats "+counts[big]+" times");



	}
/*
3. Write a JavaScript program which accept a string as input and swap the case of
each character. For example if you input 'The Quick Brown Fox' the output should
be 'tHE qUICK bROWN fOX'.
*/	
function changeCase(n){
	newVal = ""
	for(i=0;i<n.length;i++){
		if(n[i]===n[i].toLowerCase()){
			newVal+=n[i].toUpperCase();
		}else{
			newVal+=n[i].toLowerCase();
		}
	}
	return newVal;
}
/*
4. Write a JavaScript program to find the sum of squares of the elements of an array.
*/
function square(n){
	sum=0;
	for(i=0;i<n.length;i++){
		n[i]=n[i]*n[i];
	}
	for(i=0;i<n.length;i++){
		sum+=n[i];
	}
	return('sum of squares of elements = '+sum);
}
/*
5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check
if the curre
*/
function oddOrEven(){
	for(i=0;i<15;i++){
		if(i%2===0){
			console.log("even-->"+i);
		}else{
			console.log("odd-->"+i);
		}
	}
}
/*
6. Write a JavaScript function to truncate a string if it is longer than the specified
number of characters.
*/
function truncate(n,size){
	return n.slice(0,size);
}
/*
7. Write a JavaScript program that accept two integers and display the larger using
findLarge() function.
*/
function findLarge(n1,n2){
	if(n1>n2){return n1+" is large";}
	else{return n2+" is large"}	
}
/*
8. Write a JavaScript program using for...in to read the objects from an array entered
by an user and to arrange it in alphabetical order.
*/

function userSort(){
	var c = prompt("enter the array elements").split();
	console.log(c.sort());
}

/* 9. Write a JavaScript program to print the letters of the word “Javascript” as below in
each line using for...of.
J
Ja
Jav
.
.
Javascript
*/

function javaScriptPrint(){
	var word = 'javascript'
	for(i=0;i<word.length+1;i++){
		console.log(word.slice(0,i))
	}
}
/* 10.Write a JavaScript program to construct the following pattern, using a nested for
loop.
*
* *
* * *
* * * *
*/

function printStar(){
	for(i=1;i<=4;i++){
		for(j=0;j<i;j++){
			console.log('*');
		}
		console.log("");
	}
}