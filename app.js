const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const colorSpn = document.querySelector(".color");

btn.addEventListener("click", function(){
    //get random number between 0 and 3
    const rdmNumber = getRandomNumber();
    //change color of the body tag
    document.body.style.backgroundColor = colors[rdmNumber];
    //change text within the span of color
    colorSpn.textContent = colors[rdmNumber];
});

const getRandomNumber = () => {
    //Math.random return values between 0 to 1 (1 is not included);
    //multiply Math.random by a number will give values between 0 till the multiplied number;
    //and doing floor will bring the number down to lower integer.

    //https://teamtreehouse.com/community/why-doesnt-my-arrow-function-work-in-my-addeventlistener
    
    return Math.floor(Math.random() * colors.length)
}