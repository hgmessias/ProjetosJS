function converter() {
    var converter = parseFloat(document.getElementById("converter").value);
    var real = parseFloat(document.getElementById("real").value);
    const total = (real/converter).toFixed(2)

    document.getElementById("conversation").innerHTML = "O valor convertido será de US$ " + total;

}