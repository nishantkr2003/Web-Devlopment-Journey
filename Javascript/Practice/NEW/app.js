console.log("Hello World!");
console.log("This is for practice purpose!");
let a=10;
let b=15;
console.log("Sum is:" ,a+b);



let pencilPrice=10;
let penPrice=15;
let erasorPrice=20;
let output=`The total price is :${pencilPrice+penPrice+erasorPrice} Rupees.`;
console.log(output);

/*
let color="yellow";
if(color=="red"){
    console.log("stop!");
}
if(color=="yellow"){
    console.log("slow down!");
}
if (color=="green"){
    console.log("you can go");
}


*/ 
/*
let age=13;
if(age>=18){
    console.log("you can vote");
}

else if(age<=18){
    console.log("You cant vote");
}
else if(age>=18 && age<=60){
    console.log("You can vote and drive");
}
else{
    console.log("you can vote but not drive");
}
*/



/*
let size="L";

if(size=="XL"){
    console.log("Price is 250"); 
}
else if(size=="L"){
    console.log("Price is 200"); 
}
else if(size=="M"){
    console.log("Price is 100"); 
}
else{
    console.log("Price is 50");
}

*/


/*
let str="apple";

if(str[0]=='a' && str.length>3){
    console.log("Good String");
}
else{
    console.log("Not Good String");
}



alert("Something is wrong");
prompt("Enter your Name");

 


let n=prompt("Write your number: ");
n=parseInt(n);
for(let i=n;i<=n*10;i=i+n){
    console.log(i);
}
*/
/*

let todo=[];
let req=prompt("Please enter your request: ");


while(true){
    if(req=="quit"){
        console.log("Quitting app");
        break;
    }
    if(req=="list"){
        console.log("-------");
        for(task of todo){
            console.log(task);
        }
        console.log("-------");
    }
    else if(req=="add"){
        let task=prompt("please enter your task you want to add");
        todo.push(task);
        console.log("task added");
    } 
}
    


const students ={
    name: "Nishant",
    age: 20,
    marks: 95.5,
    city: "Delhi"
};

*/

const post={
    username: "@nishantkumar",
    content: "This is my first post ",
    likes: 150,
    reposts: 5,
    tags: ["@princekumar","@goluyadav","@delta"]
};

/*
const max=prompt("Enter the max number");
const random= Math.floor(Math.random()*max)+1;
console.log(random);
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("you quit the game");
        break;
    }
    if(guess==random){
        console.log("You are right!");
        break;
    }
    else if(guess<random){
        guess=prompt("your guess is to small.Please try again");
    }
    else{
        guess=prompt("your guess is to large.Please try again");
    }
}
    */

function avg(a,b,c){
    console.log(`average of ${a}, ${b} and ${c} are  ${(a+b+c)/3}`);
}
avg(2,6,1);