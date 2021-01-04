function clickC() {
    document.getElementById("display").value='';
}

function clickRemoveLast() {
    let text = document.getElementById("display").value;
    let textRem = text.substring(0,text.length-1)
    document.getElementById("display").value=textRem;
}
/*
function clickP() {

 var string = document.getElementById("display").value;

 var bol = false;

for (let index = 0; index < string.length; index++) {
    if (string.charAt(index)=="(") {
        bol=true;
    } else if (string.charAt(index)==")") {
        bol=false;
    }  

 
}
if (bol==false) {
    document.getElementById("display").value+="(";
}else{
   document.getElementById("display").value+=")";
} 

}*/
var actSize = 10;

var num1="";
var num2="";
var result;
var operation;

function getNum1() {
    num1 = document.getElementById("display").value;
}
function getNum2() {
    num2 = document.getElementById("display").value;
}


function isNotNull() {
    if (document.getElementById("display").value!='') {
        return true;
    }else{
        if (num1=="") {
            return alert("Digite um número primeiro!");
        }       
    }
}

function addSize() {
    if (actSize<9) {
        actSize+=2;
    }
}

function sizeValidation() {
    if (document.getElementById("display").value.length<actSize) {
        return true;
    }else{
        return false;
    }
}

/* Falta implementar a açao*/
function clickPercent() {  
    if (isNotNull()) {
        getNum1();
        clickC();  

        operation=0;
                    
    }
 
}
/* Falta implementar a açao*/
function clickDiv() {
    if (isNotNull()) {
        getNum1();
        clickC();  
        operation=1;
                   
    }
  
}
/* Falta implementar a açao*/
function clickMultiply() {
    if (isNotNull()) {
        getNum1();
        clickC();    
        operation=2;
                
    }
  
}

function click6() {
    if (sizeValidation()==true) {
        document.getElementById("display").value+="6";
    }    
}

function click7() {
    if (sizeValidation()==true) {
        document.getElementById("display").value+="7";
    }
    
}

function click8() {
    if (sizeValidation()==true) {
        document.getElementById("display").value+="8";
    }
    
}

function click9() {
    if (sizeValidation()==true) {
        document.getElementById("display").value+="9"; 
    }
    
}
/* Falta implementar a açao*/ 
function clickMinus() {
    if (isNotNull()) {
        getNum1();
        clickC();    
        operation=3;
                
    }
  
}

function click2() {
    if (sizeValidation()==true) {
        document.getElementById("display").value+="2";
    }
    
}
function click3() {
    if (sizeValidation()==true) {
        document.getElementById("display").value+="3"; 
    }
    
}
function click4() {
    if (sizeValidation()==true) {
        document.getElementById("display").value+="4";
    }
    
}
function click5() {
    if (sizeValidation()==true) {
        document.getElementById("display").value+="5";
    }
    
}
/* Falta implementar a açao*/ 
function clickSum() {
    if (isNotNull()) {
        getNum1();
        clickC();    
        operation=4
    }
  
}

function setNumNegative(num) {
   let numNegative="-";
    numNegative+=num;
    document.getElementById("display").value=numNegative;
}
function setNumPositive(num) {
    let numPositive=parseInt(num,10);
    numPositive*=-1;
    document.getElementById("display").value=numPositive;
 }

/* Falta implementar a açao*/ 
function clickNegative() {
    if (isNotNull()) {
       var num = document.getElementById("display").value; 
        if (num.charAt(0)!="-") {
            setNumNegative(num);
        }else{
            setNumPositive(num);
        }
       
    }
}
/* Falta implementar a açao*/ 
function clickComma() {

    if (isNotNull()) {
        addSize();
    document.getElementById("display").value+=".";
    let numDec=document.getElementById("display").value;
    numDec=parseFloat(numDec);

    if (num2!="") {
        num2=numDec;
    }else{
        num1=numDec;
    }

    }
}
function click0() {
    if (sizeValidation()==true) {
        document.getElementById("display").value+="0";
    }
    
}
function click1() {
    if (sizeValidation()==true) {
        document.getElementById("display").value+="1";
    }
    
}

/* Falta implementar a açao*/ 
function clickEqual() {
    getNum2();
    num1=parseFloat(num1);
    num2=parseFloat(num2)
   
    switch (operation) {
        
        // percent
        case 0 :
            result=(num2*num1)/100;
            showResult(result)
            break;
        // div
        case 1:
            result=(num1/num2);
            showResult(result)
            break;
        // multi
        case 2:
            result=num1*num2;
            showResult(result);
            break;
        // minus
        case 3:
            result=num1-num2;
            showResult(result);
            break; 
        // sum
        case 4:
            result=num1+num2;
            showResult(result);
         break;  

        default:
            alert("Execute uma operaçao válida!")
            break;
    }
}
function getLength(result) {
    let result1=result;
    return JSON.stringify(result1).length();
}
function showResult(result) {
   if (JSON.stringify(result).length<actSize) {
       document.getElementById("display").value=result;
   }else{
       alert("O número ultrapassa a casa dos milhões!")
   }
}