//função IMC do formulário

function calculaIMC() {

    var peso = Number(document.getElementById("peso").value);
    var altura = Number(document.getElementById("altura").value);

    var imc = (peso / (altura ** 2)).toFixed(2);

    if (imc < 18.5) {
        var msgIMC = (" abaixo do peso.");
    } else if (imc >= 18.5 && imc <= 25) {
        var msgIMC = ("  peso é normal.");
    } else if (imc > 25 && imc < 30) {
        var msgIMC = ("acima do peso.");
    } else {
        var msgIMC = (" obeso.");
    }

    document.getElementById("imc").innerHTML = (`IMC = ${imc} - ${msgIMC}`)

}
