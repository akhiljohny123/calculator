function displayNumber(num){
    result.value += num;
}

//clear text box
function clearBox(){
    result.value="";
}

//3 evaluate expression
function evaluateExpression(){
    expression=result.value;
    output=eval(expression);
    result.value=output;
}

function removeItem(){
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1)

}