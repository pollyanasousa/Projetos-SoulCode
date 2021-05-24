$(document).ready(function () {
    //Uso do focus e blur nos inputs do formulário
    $("input").not("#envia").focus(function () {
        $(this).css("background", "lightblue");
    });
    $("input").blur(function () {
        $(this).css("background", "white");
    })

    // Uso do click no formulário
    $("#envia").click(function () {
        $(this).css("background", "green");
    })


});
// Uso do fadeIn, fadeOut, slideDown, slideUp no formulário
$("#sexo").click(function () {
    sexoBonecos = document.getElementById("sexo").value
    if (sexoBonecos == "feminino") {
        $("img#boneca").fadeIn("slow");
        $("img#boneco").fadeOut("fast");
    } else if (sexoBonecos == "masculino") {
        $("img#boneco").slideDown("slow");
        $("img#boneca").slideUp("fast");

    }

})
