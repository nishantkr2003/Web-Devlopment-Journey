
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