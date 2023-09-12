var input = document.getElementById("inputDisplay")

function setNumber(num){
    input.value += num
}
function equal(){
    var answer = eval(input.value)
    input.value = answer
}
function del(){
    input.value = input.value.slice(0, -1)
}
function percent(){
    input.value = eval(input.value)/100
}