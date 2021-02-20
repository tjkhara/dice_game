let randomNumber1 = generateRandomNumber(1,6);
let randomNumber2 = generateRandomNumber(1,6);

console.log(randomNumber1);

let leftDice = document.querySelector('.img1');
let imageLink = `images/dice${randomNumber1}.png`

leftDice.setAttribute("src", imageLink)

let rightDice = document.querySelector('.img2');
let imageLink2 = `images/dice${randomNumber2}.png`

rightDice.setAttribute("src", imageLink2)

// Get the heading
let heading = document.querySelector('h1');

if(randomNumber1 > randomNumber2){
    heading.innerHTML = "Player 1 wins."
} else if (randomNumber1 < randomNumber2){
    heading.innerHTML = "Player 2 wins."
} else {
    heading.innerHTML = "Draw."
}




// This function takes the start and the end
// and generates a random number between
// start (inclusive) and end (inclusive).
function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * end) + start;
}