let calculation = "";
let afterCalc = false;

function numCalc(num){
    if (afterCalc){
        calculation = '';
        afterCalc = false;
    }
    calculation += num;
    document.querySelector('.calculations').innerHTML = calculation;
}

function opCalc(op) {
    afterCalc = false;
    calculation += op;
    document.querySelector('.calculations').innerHTML = calculation;
}