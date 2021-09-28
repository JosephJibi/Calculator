function buttonclick(val)
{
    
    document.getElementById("screen").value+=val;   //document.getElementById("screen").value+=val; or we can write like ---  document.getElementById("screen").value=document.getElementById("screen").value+val;
}

function clearDisplay()
{
    document.getElementById("screen").value=""     // value="" --- means null value 
}

function equalClick()
{
    text=document.getElementById("screen").value;
    result=eval(text);                             //eval is a predefined function in javascript library, it do all the calculator opertions.
    document.getElementById("screen").value=result;
}

