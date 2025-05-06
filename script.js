/*
DO NOT DELETE!! This is your tracker for the project!
Store each input as a variable (there should be two input boxes - one for each answer) [ ]
Store the button as a variable (there should be ONE button) [ ]
Create a click handler [ ]
Use the .value property to store user input [ ]
Add console.log to test if the code is being stored [ ]
Write a conditional statement with else-if to include all 4 possible results [ ]
Write a compound conditional statement that uses input from both questions to provide the user with a result [ ]
Write a sentence using string concatenation using the data stored in the user input variables [ ]
Add a next level feature! [ ]
*/

let meals=document.querySelector(".meals");
let day=document.querySelector(".day");
let button=document.querySelector("button");
let result=document.querySelector(".result");

button.onclick=function(){
  if(meals.value ==="2" && day.value==="Morning"){
    result.innerHTML="You are a Giraffe!"} 
  else if(meals.value ==="3" && day.value==="Morning"){
    result.innerHTML="You are a Hippo!"}
   else if(meals.value ==="3" && day.value==="Night"){
    result.innerHTML="You are a Wolf!"}
   else if(meals.value ==="2" && day.value==="Night"){
    result.innerHTML="You are a Cat!"
  }
}