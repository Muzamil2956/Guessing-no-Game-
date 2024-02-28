// User enters a max no and then tries to guess a random generated no between 1 to max. 
const max = prompt("Enter Max no");
console.log(max);
const random =Math.floor(Math.random() *max )+1;
console.log(random);
let guess = prompt("Guess the Random no Generated");
while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }
    if(guess == random) {
        console.log("Right guess random no was", random);
        break;
    }else if(guess < random) {
        guess = prompt(" hint :Your Guessed no is small, Try again")
    } else if(guess > random) {
        guess = prompt("hint : Your Guessed no is large, Try again")
    }
}
    
    