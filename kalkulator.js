$(document).ready(function () {
    let number = [0,1,2,3,4,5,6,7,8,9];
    let operator = ["+","-","*","/","="];
    var in1 = 0;
    let in2 = 0;
    let opt = null; 
    
    number.forEach(num => {
        $("#number").append($(`<button>${num}</button>`));
    });

    operator.forEach(op =>{
        $("#operator").append($(`<button>${op}</button>`));
    });

    $("button").click(function () { 
        let press = $(this).html();
        if (press.match(/[0-9]/g)) {
            in1 = press;
        } else if(press.match(/^(\+|-|\*|\/|\))$/)){
            opt = press;
            in2 = in1;
            in1 = '';
        } else if (press === "="){
            in1 = (operasi(in2, in1, opt))
        }
        display(in1);
    });

    function display(value) {
        $("#text").val(value);
    }
    function operasi(a, b, opt) {
        a = parseFloat(a);
        b = parseFloat(b);
        console.log(a, b, opt)
        if (opt === '+') return a + b;
        if (opt === '-') return a - b;
        if (opt === '*') return a * b;
        if (opt === '/') return a / b;
    }
});

