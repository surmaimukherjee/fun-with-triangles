const sideInput = document.querySelectorAll(".side-input");
const btnCalculatHypotenuse = document.querySelector("#calculate-hypotenuse");
const output = document.querySelector("#output");

function calculateSumOfSquare(a, b)
{
return (a**2 + b**2)
}


function calculatHypotenuse(e)
{
    e.preventDefault();
    if(sideInput[0].value == "" || sideInput[1].value == "" || sideInput[0].value <= 0 || sideInput[1].value <= 0)
    {
        output.innerText = `Please Enter Valid Inputs`;
        output.style.color = "red";
    }
    else
    {
    const sumOfSquare = calculateSumOfSquare(Number(sideInput[0].value),Number(sideInput[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquare);
    output.innerText = `The length of Hypotenuse is ${lengthOfHypotenuse.toFixed(2)}`;
    output.style.color = "#1a0a29";
    }
}

btnCalculatHypotenuse.addEventListener("click",calculatHypotenuse);