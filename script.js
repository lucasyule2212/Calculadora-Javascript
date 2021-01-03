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
var actSize = 9;

var num1;
var num2;
var result;
var operation;

function isNull() {
    if (document.getElementById("display").value!='') {
        return true;
    }else{
        return false;
    }
}

function addSize() {
    if (actSize<10) {
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
    
    if (isNull()) {
        num1=document.getElementById("display").value;
        clickC();
        while (true) {
            if (isNull()) {
                num2=document.getElementById("display").value;
            }else{
                alert("Digite outro número!")
            }
        }
    }

}
/* Falta implementar a açao*/
function clickDiv() {
    
}
/* Falta implementar a açao*/
function clickMultiply() {
    
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
    if (isNull()) {
        
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
    
}

/* Falta implementar a açao*/ 
function clickNegative() {
    
}
/* Falta implementar a açao*/ 
function clickComma() {
    if (isNull()) {
        addSize();
    document.getElementById("display").value+=",";
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
    
}