const add = (a, b) => a + b;
const subtract = (a, b) => a -b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
//const operate = (operator, a, b) => operator(a, b);

function operate(a,b){
    if (operationSign == 'add'){
        return add(a, b);
    } else if(operationSign == 'subtract'){
        return subtract(a, b);
    } else if(operationSign == 'multiply'){
        return multiply(a, b);
    } else if(operationSign == 'divide'){
        return divide(a, b).toFixed(2);
    }
}

let result = document.getElementById('result');
let isOperatorClicked = false;
let operationSign;
let x = 0;
let y = 0;
let resultValue = 0;
let resultValue2 = 0;
function populate(n){
    if (result.innerText == 0){
        result.textContent = n;
        resultValue = result.textContent;
        return;
    }
    result.insertAdjacentText('beforeend', n);
    resultValue = result.innerText;
    return resultValue;
}

function populate2(n){
    if (result.innerText == resultValue){
        result.textContent = n;
        resultValue2 = result.textContent;
        return;
    }
    result.insertAdjacentText('beforeend', n);
    resultValue2 = result.innerText;
    return resultValue2;   
}

const keys = document.getElementsByClassName('calculator_key');
for (const key of keys){
    key.addEventListener('click', function number(){
        if (!isOperatorClicked){
            populate(key.innerText);
            x = resultValue;
            return x;
        } else{
            populate2(key.innerText);
            y = resultValue2;
            return y;
        }
    })
}
const operateKeys = document.getElementsByClassName('key-operator');
for (const operateKey of operateKeys){
    operateKey.addEventListener('click', function midOperate(){
        if (operationSign == undefined){
            operationSign = operateKey.id;
        }
        isOperatorClicked = true;
        if(y != 0){
            resultValue = result.textContent = operate(parseInt(x), parseInt(y));
            x = resultValue;
            resultValue2 = 0;
            y = resultValue2;
        }
        operationSign = operateKey.id;
        return operationSign;
    })
}

const clearKey = document.getElementById('key-clear');
clearKey.addEventListener('click', function clearAll(){
    result.innerText = 0;
    resultValue = 0;
    x = 0;
    y = 0;
})

const enterKey = document.getElementById('key-enter');
enterKey.addEventListener('click', function calc(){
    if(result.innerText == 0){
        result.innerText = 0;
        return;
    }
   resultValue = result.textContent = operate(parseInt(x), parseInt(y));
   x = resultValue;
   resultValue2 = 0;
   y = resultValue2;
   isOperatorClicked = false;
})