function zad2(){
    var integer = document.getElementById('integer').value;
    alert("Zaokraglenie w gore: " + Math.ceil(integer));
}

function zad3(){
    var integer = document.getElementById('integer').value;
    alert("Liczba eulera: " + Math.exp(integer));
}

function zad4(){
    var integer = document.getElementById('integer').value;
    alert("Zaokraglenie w dol: " + Math.floor(integer));
}

function zad5(){
    var integer = document.getElementById('integer').value;
    alert("Logartym: " + Math.log(integer));
}

function zad6(){
    var integer1 = document.getElementById('integer1').value;
    var integer2 = document.getElementById('integer2').value;
    alert("Wieksza z podanych liczb: " + Math.max(integer1, integer2));
}

function zad7(){
    var integer1 = document.getElementById('integer1').value;
    var integer2 = document.getElementById('integer2').value;
    alert("Mniejsza z podanych liczb: " + Math.min(integer1, integer2));
}

function zad8(){
    var integer1 = document.getElementById('integer1').value;
    var integer2 = document.getElementById('integer2').value;
    alert("Potega x do y: " + Math.pow(integer1, integer2));
}

function zad9(){
    var integer = document.getElementById('integer').value;
    alert("Zaokraglona: " + Math.round(integer));
}

function zad10(){
    var integer = document.getElementById('integer').value;
    alert("Sinus kata: " + Math.sin(integer));
}

function zad11(){
    var integer = document.getElementById('integer').value;
    alert("Cosinus kata: " + Math.cos(integer));
}

function zad12(){
    var integer = document.getElementById('integer').value;
    alert("Tangens kata: " + Math.tan(integer));
}

function zad13(){
    var integer = document.getElementById('integer').value;
    alert("Pierwiastek: " + Math.sqrt(integer));
}

function zad13(){
    alert(Math.random());
}
