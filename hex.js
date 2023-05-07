const hexList = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById('btn');
const colorSpn = document.querySelector(".color");

btn.addEventListener('click', function () {
    let hexColor ='#';
    //hex color code contain 6 character
    for(let i = 0; i< 6 ; i++){
        //we generate random number based on the length of the hexList
        const rdmNumber = Math.floor(Math.random()*hexList.length);
        hexColor += hexList[rdmNumber];
    }

    document.body.style.backgroundColor = hexColor;
    colorSpn.textContent = hexColor;
})