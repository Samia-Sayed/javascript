
//try catch block

/*try{

    alert("hello from try block");
    alert("y");
    

    //myFunction();
}
catch(error){

    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{

alert("executing finaly block");

}*/



//throw statement
/*function myFunction(){

const message=document.getElementById("paraId");
message.innerHTML="";
let x=document.getElementById("demo").value;
try{
if(x =="") throw " is empty";
if(isNaN(x)) throw " is not a number";
x=Number(x);
if(x>10) throw " is too high";
if(x<5) throw " is too low";

}catch(e){
    message.innerHTML="input"+ e;

}finally{
    document.getElementById("demo").value="";
}


}*/

console.clear();

.then((res)=>){
    if(!res.ok){
        const message='error:${res.status'};
        throw new console.error(message);

    }
    return res.json();
})
.then(res)