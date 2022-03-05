/*var paraVar=document.querySelector("#paraId");
function addStyle()
{
paraVar.style.color="red";
paraVar.style.fontSize="3re";
paraVar.style.fontWeight="bold";
paraVar.style.fontStyle="italic";


    
}
/*function removeStyle()
{

    paraVar.style="";
}
*/
/*var paraVar=document.querySelector("#paraId");
function addStyle()
{
    paraVar.classList.add("para-style");

}
function removeStyle()
{
    paraVar.classList.remove("para-style");


}

function nextpage()
{

    location.href="next.html";
}
*/

/*document.querySelector("button").addEventListener("click",listenerFunction);

function listenerFunction()
{
    alert("hello");

}
document.querySelector("button").addEventListener("mouseover",function listenerFunction(a,b){
   alert(a+b);
});

document.querySelector("button").addEventListener("mouseover",function(){
document.write("hello from me");
});

document.querySelector("button").addEventListener("dblclick",function(){
    document.write("hello from me");
    });
*/
/*document.querySelectorAll(".myButton")[0].addEventListener("click",function(){
    var text=this.innerHTML;
    document.querySelector("h1").innerHTML=text+"is clicked";
});

var Len=document.querySelectorAll(".myButton").length;
for(var i=0;i<Len; i++)
{
document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
    var text =this.innerHTML;
    document.querySelector("h1").innerHTML=text+"is clicked";
});

}
const names=["karim","rahim","john"];
//for of

document.write("for of use:");

for(let name of names){
    document.write(name+"\t");
}
document.write("<br/>for in loop use:<br/>");

//for in loop

let person={
    id:1,
    name:'samia',
    profession:'student'
}

for (let x in person){

    document.write(x + ":"+person[x]+"<br/>");
   
}
document.write("<br/>for each loop use:<br/>");

//for each loop

var numbers=[1,21,31,41];
numbers.forEach(myFunction);
function myFunction(x){
document.write(x + "<br/>");

}
//map

document.write("<br/>map use:<br/>");

var squareNumbers=numbers.map(function(x){

    return x*x;
})
document.write(squareNumbers+"<br/>");

//filter

document.write("<br/>filter use:<br/>");
var numbers_filter=[1,21,31,41,67,99];
var filteredNumbers=numbers_filter.filter(function(x){

    return x>20;
    
})
document.write(filteredNumbers +"<br/>");


//arrow function

const display=()=>
{
document.write("<br/>hello from array.");


}
display();


function abc(){


    return "hello without keyword";
}

//without return keyword

 var display2=()=> "hello without return fn";
 document.write("<br/>"+display2()+"<br/>");

//arrow,map,filter

students=[

    {
        id:1,
        name:"karim",
        cgpa:3.67

    },
{
id:2,
name:"rahim",
cgpa:3

}


];




function showStudentNames(){

return students.filter(function(x){
 return x.cgpa>3.67

}).map(function(y){
return y.name;


});

}
document.write("<br/>" showStudentNames()+"<br/>");

const showStudentNamesWithArrow= ()=>students.filter((x)=>
x.cgpa > 3.67).map((y)=>y.name);

document.write("<br/>"+ showStudentNamesWithArrow()+ "<br/>");

*/

console.log(window);

const input=document.querySelector("input");
input.addEventListener("change",changehandler);
 function changehandler(e){
document.write("changed");
console.log("changed");

console.log(e);
console.log(e.target);
console.log(e.type);
console.log(e.target.value);
console.log(e.target.id);
console.log(e.target.classname);

 }
//checkbox

/*const programs=document.querySelectorAll("input[name=program]");
console.log(programs);


Array.from(programs).map((program)=>{

    program.addEventListener("change",programhandler);
});

function programhandler(e){

    console.log("checked");
if(e.target.checked){

    console.log(e.target.value);
    console.log(e.target.required);
}

}*/



