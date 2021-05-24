function calcular() {
    var uti = $("#ocup_uti").val();
    var enfer = $("#ocup_enfer").val();
    var media;

    uti = Number(uti);
    enfer = Number(enfer);

    media = (uti + enfer) / 2
    $("#result").val(media + " % ");
    // document.getElementById("result").innerHTML=media;
    console.log(media);

    if (media >= 80) {
        $("#ocupacao").css("background", "red");
        document.getElementById("frase").innerHTML = "Fase vermelha, confira abaixo o que está aberto";
    } else if (media >= 70 && media < 80) {
        $("#ocupacao").css("background", "orange");
        document.getElementById("frase").innerHTML = "Fase vermelha, confira abaixo o que está aberto";
    } else if (media >= 60 && media < 70) {
        $("#ocupacao").css("background", "yellow");
        document.getElementById("frase").innerHTML = "Fase vermelha, confira abaixo o que está aberto";
    } else if (media >= 5 && media < 60) {
        $("#ocupacao").css("background", "rgb(6, 194, 6)");
        document.getElementById("frase").innerHTML = "Fase vermelha, confira abaixo o que está aberto";
    } else {
        $("#ocupacao").css("background", "rgb(35, 174, 221)");
        document.getElementById("frase").innerHTML = "Fase vermelha, confira abaixo o que está aberto";
    }
}
