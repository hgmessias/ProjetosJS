function converter() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var text = `A temperatura de ${temperature} °C, corresponde a ...`;

    document.getElementById("text").innerHTML = text;

    document.getElementById("kelvin").innerHTML = (temperature + 273.15) + " K (Kelvin)";

    document.getElementById("fahrenheit").innerHTML = (temperature * (9/5) + 32) + " °F (Fahrenheit)";

}