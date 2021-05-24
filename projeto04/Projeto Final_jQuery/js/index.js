// jQuery UI Accordion

$(function () {
    $(".accordion").accordion();
});


//Geral: Botão de acessibilidade visual 
//Pagina INDEX
var i = 0

function acessivel() {
    if (i == 0) {
        document.getElementById("container").style.fontSize = "180%";
        document.getElementsByTagName("p").style.fontSize = "180%";
        document.getElementsByTagName("h3").style.fontSize = "180%";
        i = 1;
    } else if (i == 1) {
        document.getElementById("container").style.fontSize = "100%";
        document.getElementsByTagName("p").style.fontSize = "100%";
        document.getElementsByTagName("h3").style.fontSize = "100%";
        i = 0;
    }
}

//Página QUEMSOMOS
var i = 0

function acessivel1() {
    if (i == 0) {
        document.getElementById("site").style.fontSize = "180%";
        document.getElementById("bannerPrinc").style.height = "70%";
        document.getElementById("bannerPrinc").style.margin = "10% 0px 0px 0px";

        i = 1;
    } else if (i == 1) {
        document.getElementById("site").style.fontSize = "100%";
        document.getElementById("bannerPrinc").style.height = "80%";
        document.getElementById("bannerPrinc").style.margin = "0px 20% 0px 20%";
        i = 0;
    }
}

//uso toggle e fadeTo
function banner() {
    console.log("aqui")
    $("#txtbanner").toggle();

    $("#imgbanner").fadeTo("slow", 0.4);
}
