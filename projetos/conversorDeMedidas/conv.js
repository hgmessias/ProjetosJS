function converter() {
    var measure = document.getElementById("measure").value;
    var text = `A distância de ${measure} metros, corresponde a ...`;

    document.getElementById("text").innerHTML = text;

    document.getElementById("km").innerHTML = measure/1000 + " quilômetros (Km)";

    document.getElementById("hm").innerHTML = measure/100 + " hectômetros (Hm)";

    document.getElementById("dam").innerHTML = measure/10 + " decâmetros (Dam)";

    document.getElementById("dm").innerHTML = measure/0.1 + " decímetros (dm)";

    document.getElementById("cm").innerHTML = measure/0.01 + " centímetros (cm)";

    document.getElementById("mm").innerHTML = measure/0.001 + " milímetros (mm)";
}