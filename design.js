function addition()
{
    var a=parseFloat(document.getElementById("n1").value);
    var b=parseFloat(document.getElementById("n2").value);
    document.getElementById("res").textContent=a+b;
}
function subtraction()
{
    var a=parseFloat(document.getElementById("n1").value);
    var b=parseFloat(document.getElementById("n2").value);
    document.getElementById("res").textContent=a-b;
}
function multiplication()
{
    var a=parseFloat(document.getElementById("n1").value);
    var b=parseFloat(document.getElementById("n2").value);
    document.getElementById("res").textContent=a*b;
}
function division()
{
    var a=parseFloat(document.getElementById("n1").value);
    var b=parseFloat(document.getElementById("n2").value);
    document.getElementById("res").textContent=a/b;
}