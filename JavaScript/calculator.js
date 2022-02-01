function readNum(x)
{
    document.getElementById("display").value = 
    document.getElementById("display").value +
    document.getElementById(x).innerText;
}

function calculate()
{
    document.getElementById("display").value = eval(document.getElementById("display").value);
}

function opplus()
{
    document.getElementById("display").value = 
    document.getElementById("display").value + "+";
}

function opsub()
{
    document.getElementById("display").value = 
    document.getElementById("display").value + "-";
}

function opmul()
{
    document.getElementById("display").value = 
    document.getElementById("display").value + "*";
}

function opdiv()
{
    document.getElementById("display").value = 
    document.getElementById("display").value + "/";
}