function Szamolj(){
    var mag = document.getElementById("magassag").value;
    var suly = document.getElementById("suly").value;
    mag = Number(mag);
    suly=Number(suly);
    var a =mag/100;
    var testtömegindex = suly/(a*a);
    var s  = Math.round(testtömegindex*100)/100;
    document.getElementById("kiir").innerText=s;
}