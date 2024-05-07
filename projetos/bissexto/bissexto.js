function checkYear() {
    var year = document.getElementById("year").value;

    
    if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0){
        document.getElementById("result").innerHTML = year + " é um ano bissexto. &#10004";
        }
    else {
        document.getElementById("result").innerHTML = year + " não é um ano bissexto. &#10008";   
    }
}