var bill = 0 ;
var Carcass = 0;
var mach = 0
var war = 0
var rok = 0
var rs = 0
var got = 0
function Carcassonne(){
    bill = bill + 9500
    Carcass = Carcass + 1
}
function Machi(){
    bill = bill + 6000
    mach = mach + 1
}
function warhammer(){
    bill = bill + 140000
    war = war + 1
}
function Rokugan(){
    bill = bill + 17000
    rok = rok + 1
}
function RS(){
    bill = bill + 53000
    rs = rs +1
}
function GoT(){
    bill = bill + 29000
    got = got + 1
}

function sum(){
    document.getElementById("total").innerHTML='Total price is &ensp;' + bill ; 
    document.getElementById("Carcassnumber").innerHTML='Carcassonne ordered &ensp;' + Carcass;
    document.getElementById("Machinumber").innerHTML='Machi ordered &ensp;' + mach;
    document.getElementById("Warhammernumber").innerHTML='Warhammer ordered &ensp;' + war;
    document.getElementById("Rokugannumber").innerHTML='Rokugan ordered &ensp;' + rok;
    document.getElementById("RSnumber").innerHTML='RS ordered &ensp;' + rs;
    document.getElementById("GoTnumber").innerHTML='GoT ordered &ensp;' + got; 
    var all = parseInt(Carcass) + parseInt(mach) + parseInt(war) + parseInt(rok) + parseInt(rs) + parseInt(got)
    document.getElementById("allnumber").innerHTML='Overall ordered &ensp;' + all; 


}
function idea(){
    var data = document.getElementById("NAME").value;
    alert( "Thank you very much for your ideas! " + data )
}
function order(){
    var data = document.getElementById("NAME").value;
    alert( "Thank you for order!" + data )
}

function slideshow(classname, myIndex) {

    var x = document.getElementsByClassName(classname);
    
    for (var i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    
    x[myIndex].style.display = "inline-block";

    myIndex = myIndex + 1;
    
    if (myIndex >= x.length) {
      myIndex = 0
   }

   setTimeout(function() { 
        slideshow(classname, myIndex);
    }, 1000);
}

slideshow("Euro", 0);
slideshow("Strategy", 0);
slideshow("Production", 0);

/*
var yourIndex = 0;

function picturemove() {

    var y = document.getElementsByClassName("Strategy");
    
    for (var j = 0; j < y.length; j++) {
       y[j].style.display = "none";
    }
    
    y[yourIndex].style.display = "inline-block";

    yourIndex = yourIndex + 1;
    
    if (yourIndex >= y.length) {
      yourIndex = 0
   }
  
    setTimeout(picturemove, 1000);
}

picturemove();
var hisIndex = 0;

function movingpictures() {

    var z = document.getElementsByClassName("Production");
    
    for (var g = 0; g < z.length; g++) {
       z[g].style.display = "none";
    }
    
    z[hisIndex].style.display = "inline-block";

    hisIndex = hisIndex + 1;
    
    if (hisIndex >= z.length) {
      hisIndex = 0
   }
  
    setTimeout(movingpictures, 1000);
}

movingpictures();
*/

