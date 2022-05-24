let result = document.querySelector('.result');
let value = 0
function sum(){
 result.innerHTML = ++value
 if(value>=0){
     result.style.color = 'black'
 }
}
function subtraction(){
 result.innerHTML = --value
if(value<0){
    result.style.color = 'red'
}
}
