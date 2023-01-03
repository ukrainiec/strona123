function dodaj(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var liczba3=parseInt(document.getElementById("liczba3").value);
    var wynik1=liczba1+liczba2+liczba3;
    document.getElementById("wynik").innerHTML=wynik1;
 }
function odejmij(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var wynik2=liczba1-liczba2;
    document.getElementById("wynik").innerHTML=wynik2;
}
function mnozenie(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var liczba3=parseInt(document.getElementById("liczba3").value);
    var wynik3=liczba1*liczba2*liczba3;
    document.getElementById("wynik").innerHTML=wynik3;
 }
function dziel(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var wynik4=liczba1/liczba2;
    document.getElementById("wynik").innerHTML=wynik4;
}
function srednia(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var liczba3=parseInt(document.getElementById("liczba3").value);
    var wynik5=(liczba1+liczba2+liczba3)/3;
    document.getElementById("wynik").innerHTML=wynik5;
}
function pierwiastek(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var wynik6= liczba1 ** 2
    document.getElementById("wynik").innerHTML=wynik6;
}
function kolo(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var wynik7= (liczba1*liczba1) * 3.14 ;
    document.getElementById("wynik").innerHTML=wynik7;
}
function benzyna(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var liczba3=parseInt(document.getElementById("liczba3").value);
    var wynik8= ((liczba3 / liczba2) *100) * liczba1 ;
    document.getElementById("wynik").innerHTML=wynik8;
}
function zysk(){
    var liczba1=parseInt(document.getElementById("liczba1").value);
    var liczba2=parseInt(document.getElementById("liczba2").value);
    var liczba3=parseInt(document.getElementById("liczba3").value);
    var wynik9= liczba1 * (liczba3/100)/365 * liczba2;
    document.getElementById("wynik").innerHTML=wynik9;
}