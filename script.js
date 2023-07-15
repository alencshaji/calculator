function buttonclick(val) {
    var screen = document.getElementById("screen");
    screen.value = screen.value + val;
   
}
function clearScreen()
{
    document.getElementById("screen").value=""
}
function equalClick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result;
}
function deleteElement() {
    var screen=document.getElementById("screen")
    var currentValue = screen.value
    screen.value = currentValue.slice(0,-1);
}