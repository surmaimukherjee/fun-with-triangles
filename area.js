const output = document.querySelector("#output");
const base = document.querySelector("#base");
const height = document.querySelector("#height");
const btnCalculateArea = document.querySelector("#calculate-area");

function calculateProductOfBaseAndHeight(b, h)
{
    return (b * h);
}



function calculateArea(e)
{
    e.preventDefault();
    if(base.value == "" || height.value == "" || base.value <= 0 || height.value <= 0 )
    {
        output.innerHTML = `Please Enter Valid Inputs`;
        output.style.color = "red";
    }
    else
    {
           
    const productOfBaseAndHeight = calculateProductOfBaseAndHeight(Number(base.value),Number(height.value));
    const areaOfTriangle = (productOfBaseAndHeight/2)
    output.innerHTML = `Area of Triangle is ${areaOfTriangle} cm<sup>2</sup>`;
    output.style.color = "#1a0a29";
    }

}

btnCalculateArea.addEventListener("click",calculateArea);