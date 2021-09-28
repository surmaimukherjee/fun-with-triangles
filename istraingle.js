const inputs = document.querySelectorAll(".angle-input");
const btnIsTriangle = document.querySelector("#is-triangle");
const output = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3)
{
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}


function isTriangle()
{
    if(inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "")
    {
        showOutput("Please enter all inputs");
        output.style.color = "red";
    }
    else
    {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    
    if(sumOfAngles === 180)
    {
        showOutput("Triangle formed 🙂");
        output.style.color = "#1a0a29";
    }
    else
    {
        showOutput("Triangle not formed 😑");
        output.style.color = "#1a0a29";
    }
}

}


btnIsTriangle.addEventListener("click",isTriangle);

function showOutput(message)
{
    output.innerText = message;
}