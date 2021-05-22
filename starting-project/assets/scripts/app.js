//alert('this works');
const defaultRes = 0;
let currentResult = defaultRes;
let logEnteries = [];


//currentResult = (currentResult + 10) *3/2 -1;
//using back tick ` 
//let calculatorDesc = `${defaultRes} `+'hi there  ' + currentResult ;


//let errMsg = "'an error occured ' so we are going out of single quotes ";


function getuserNumberInput(){
    return parseInt(userInput.value);
}
function createAndWriteOutput(operator,resultBeforeCalc,calcNumber){
    const calcDEscription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDEscription);
}

function writeToLog(
    operationIdentifier,
    previousResult,
    operationNumber,
    newResult
){
    const logEntry = {
        operation : operationIdentifier,
        previousResult : previousResult,
        number : operationNumber,
        result : newResult
    };
    logEnteries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEnteries);
}


function calculateResult(calculationType){
    const enteredNumber = getuserNumberInput();
    if(calculationType !== 'ADD' &&
        calculationType != 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType != 'DIVIDE'   ||
        !enteredNumber                        
        ){
            return; 
        }


    
    const initialResult = currentResult;
    let mathOperator;
    if(calculationType==='ADD'){
        currentResult = currentResult + +userInput.value;//edit the global variable
        mathOperator = '+';
    }else if(calculationType==='SUBTRACT') {
        currentResult = currentResult - +userInput.value;
        mathOperator = '-';
    }
    else if(calculationType==='MULTIPLY'){
        currentResult = currentResult * +userInput.value;
        mathOperator = '*';
    }
    else{
        currentResult = currentResult / +userInput.value;
        mathOperator = '/';
    }
    
    createAndWriteOutput(mathOperator,initialResult,enteredNumber);
    writeToLog(calculationType, initialResult ,enteredNumber,currentResult);

}

function add(){
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUBTRACT');
}
function multiply(){    
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');

}
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
// const ad = add(23,45);
// let userName = 'Manu ';
// function greetUser(name){
//     let userName = name;
//     return userName;
//     //alert(userName);
// }
// userG = greetUser('vaibhav');
// alert(userG);

//currentResult = ad;  //value returned from add() function 
//add(12,34);
//alert(12,345);

//'(0+10)*3)';

//outputResult(currentResult, calculatorDesc);

