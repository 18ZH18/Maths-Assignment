let user_input_1;
let user_input_2;
let user_input_3;
let user_input_4;

let user_input = Number(prompt("Number to check")); 

function alert_log(msg) {
    console.log(msg);
    alert(msg);
}

if (user_input %2==0) {
    alert_log("this number is even");
}else{
    alert_log("this number is odd")
}
 
//Program 2 
user_input_1 = Number(prompt("Number 1")); 
user_input_2 = Number(prompt("Number 2")); 
if (user_input_1>user_input_2) {
    alert_log("Number 1 is greater than Number 2"); 
}else if (user_input_2>user_input_1){
    alert_log("Number 2 is greater than number 1") 
}else{
    alert_log("Numbers are equal")
}
 

//Program 3 
user_input_1 = Number(prompt("Number 1"))
user_input_2 = Number(prompt("Number 2"))
user_input_3 = Number(prompt("Number 3")) 
if (user_input_1>user_input_2 && user_input_1>user_input_3) {
    alert_log("Number 1 is the greatest number"); 
}else if (user_input_2>user_input_1 && user_input_2>user_input_3){
    alert_log("Number 2 is greatest number") 
}else{
    alert_log("Number 3 is the greatest number")
} 


 //program 4 
user_input_1 = Number(prompt("Hypotenuse"))
user_input_2 = Number(prompt("Adjacent"))
user_input_3 = Number(prompt("Opposite")) 
if (user_input_1==user_input_2 && user_input_1==user_input_3) {
    alert_log("The triangle is an equilateral"); 
}else if (user_input_2==user_input_1 && user_input_2!=user_input_3){
    alert_log("The triangle is a scalene") 
}else{
    alert_log("The triangle is a isosceles")
} 
 

//Program 5 
user_input_1 = Number(prompt("Number 1"))
user_input_2 = Number(prompt("Number 2")) 
user_input_3 = prompt("Operation")
if (user_input_3 == "add"){
    alert_log(user_input_1+user_input_2) 
} 
if (user_input_3 == "subtract"){
    alert_log(user_input_1-user_input_2) 
}  
if (user_input_3 == "multiply"){
    alert_log(user_input_1*user_input_2) 
}  
if (user_input_3 == "divide"){
    alert_log(user_input_1/user_input_2) 
}  
if (user_input_3 == "modulus"){
    alert_log(user_input_1%user_input_2) 
}  else{
    alert_log("Invalid operation")
}
