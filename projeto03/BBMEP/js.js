
// OFF E ON//    
function trocarDeTema(){
  var img = document.getElementsByTagName('img')[0].src // vai guardar o valor para retornar o src
  if(img.includes("off1.png")){ // se nessa string tem off1.png Este método retorna truese a string contém os caracteres e, falsecaso contrário.
    document.getElementsByTagName('img')[0].src="imgbruna/onwhite1.png";
    document.body.style.color='black'
    document.body.style.background = color='white'
    //document.getElementById('fundadoras').className = 'fundadorasblack'

  }else if(img.includes("onwhite1.png")){
    document.getElementsByTagName('img')[0].src="imgbruna/off1.png";
    document.body.style.color='white'
    document.body.style.background = color='black'
    //document.getElementById('fundadoras').className = 'fundadoraswhite'
  }
}
/* MUDAR O TAMANHO DA FONTE*/
function toUpper(){
var font = document.getElementsByClassName('font')[0].src
if(font.includes("18.png")){
    document.getElementsByClassName('font')[0].src="imgbruna/17.png";
    document.body.style.fontSize='1.5em'
    document.querySelector(".paragrafo-calculadora").style.fontSize = "1.5em"; // mudar parágrafo da calculadora
    document.querySelector(".aumentarFonte").style.fontSize = "1.5em";
}else if(font.includes("17.png")){
    document.getElementsByClassName('font')[0].src="imgbruna/18.png";
    document.body.style.fontSize='1.2em'
    document.querySelector(".paragrafo-calculadora").style.fontSize = "1em"; // mudar parágrafo da calculadora
    document.querySelector(".aumentarFonte").style.fontSize = "1em"; // mudar parágrafo da calculadora
  }
}

//-------------JAVASCRIPT DA CALCULADORA-------------//

//Função para Calculadora Simples aparecer
function aparecerSimples(){
  document.querySelector(".calculadora-simples").style.display = "block";
  document.querySelector(".calculadora-cientifica").style.display = "none";
  limpar2();
}

//Função para Calculadora Científica aparecer
function aparecerCientifica(){
  document.querySelector(".calculadora-cientifica").style.display = "block";
  document.querySelector(".calculadora-simples").style.display = "none";
  limpar();
}

//---------------------------------------------------------------------

// JS da calculadora Simples
var numeroEscolhido, numeroAtual, numeroAnterior, operando, novoOperando, total;
var divNumeroAtual = document.querySelector("div.numero-atual");
var divnumeroAnterior = document.querySelector("div.operacao-anterior");
var divOperando = document.querySelector("div.operador");

//Função para apagar todos os números e esvaziar valores
function limpar(){
  divOperando.innerText = "";
  divnumeroAnterior.innerText = "";
  divNumeroAtual.innerText = "";
  numeroAtual = "";
  operando = "";
  numeroAnterior = "";
};

//Função para colher o número digitado pelo usuário e armazenar na variável numeroAtual
function pegarNumero(e){
  numeroEscolhido = e.value;
  divNumeroAtual.innerText += numeroEscolhido;
  numeroAtual = divNumeroAtual.innerHTML;
  console.log(numeroAtual)
};

//Função para quando o usuário clicar em algum dos operadores da calculadora
function criarOperador(e){
  //Se clicar no operador e não tiver digitado um número antes, limpa a calculadora
  if((numeroAtual == "" || numeroAtual == undefined) && (numeroAnterior == "" || numeroAnterior == undefined)){
      limpar();
      //Se estiver fazendo uma operação pela primeira vez, coloca o valor digitado anteriormente na variável numeroAnterior e captura o valor do operador utilizado
  } else if ((numeroAtual != "" || numeroAtual != undefined) && (numeroAnterior == "" || numeroAnterior == undefined)){
      divNumeroAtual.innerText = "";
      divnumeroAnterior.innerText = numeroAtual
      numeroAnterior = numeroAtual;
      divnumeroAnterior.innerText = numeroAnterior;
      operando = e.value;
      divOperando.innerText = operando;
      //Se já tiver feito uma operação e não tiver limpado, ao clicar novamente em um botão de operador, a calculadora já faz o cálculo com os números usados, coloca o valor total como numeroAnterior e captura o novo operador.
  } else {
      calcular();
      divNumeroAtual.innerText = "";
      operando = e.value;
      divOperando.innerText = operando;
      numeroAnterior = total;
      divnumeroAnterior.innerText = numeroAnterior;
  };
  //Limpa o valor do numeroAtual
  numeroAtual = "";
}

//Função que faz o cálculo
function calcular (){
  //Se não tiver um número atual e a pessoa clicar no sinal de resultado, retorna false.
  if(numeroAtual == "" || numeroAtual == undefined){
      return false;
  //Se a pessoa digitar algo como 9 = (onde o 9 não vai ter sido passado ainda para o numeroAnteior), retorna "semNumeroAnterior"
  } else if (numeroAnterior == "" || numeroAnterior == undefined){
      return ("semNumeroAnterior");
  //Se tiver todos os números e operador, limpa as divs de cima e calcula de acordo com o operador.
  } else {
      divOperando.innerText = "";
      divnumeroAnterior.innerText = "";
      if (operando === "+"){
          total = parseInt(numeroAnterior) + parseInt(numeroAtual);
      };
      if (operando === "-"){
          total = parseInt(numeroAnterior) - parseInt(numeroAtual);
      };
      if (operando === "/"){
          total = parseInt(numeroAnterior) / parseInt(numeroAtual);
      };
      if (operando === "*"){
          total = parseInt(numeroAnterior) * parseInt(numeroAtual);
      };
  }
};

//Função para mostrar o resultado
function mostrarResultado(){
  //Faz o cálculo
  calcular();
  //Se retornar falso, limpa a calculadora.
  if(calcular() == false){
      limpar();
  //Se retornar "semNumeroAnterior", não faz nada, até que a pessoa digite outro número.
  } else if(calcular() == "semNumeroAnterior"){
      return;
  //Se tudo der certo, atualiza o numeroAtual para o valor total
  } else{
      numeroAtual = total;
      divNumeroAtual.innerText = numeroAtual;
  }
  //Limpa o numeroAnterior
  numeroAnterior = "";
  console.log(numeroAtual)
}


//------------------------------------------------------------------------

// JS da calculadora Científica. Explicações idênticas às da Simples, mudando apenas a parte das potências.

var numeroEscolhido2, numeroAtual2, numeroAnterior2, operando2, total2;
var divNumeroAtual2 = document.querySelector("div.numero-atual2");
var divnumeroAnterior2 = document.querySelector("div.operacao-anterior2");
var divOperando2 = document.querySelector("div.operador2");

function limpar2(){
  divOperando2.innerText = "";
  divnumeroAnterior2.innerText = "";
  divNumeroAtual2.innerText = "";
  numeroAtual2 = "";
  operando2 = "";
  numeroAnterior2 = "";
};

function pegarNumero2(e){
  numeroEscolhido2 = e.value;
  divNumeroAtual2.innerText += numeroEscolhido2;
  numeroAtual2 = divNumeroAtual2.innerHTML;
  console.log(numeroAtual2)
};

function criarOperador2(e){

  if((numeroAtual2 == "" || numeroAtual2 == undefined) && (numeroAnterior2 == "" || numeroAnterior2 == undefined)){
      limpar2();
  } else if ((numeroAtual2 != "" || numeroAtual2 != undefined) && (numeroAnterior2 == "" || numeroAnterior2 == undefined)){
      divNumeroAtual2.innerText = "";
      divnumeroAnterior2.innerText = numeroAtual2
      numeroAnterior2 = numeroAtual2;
      divnumeroAnterior2.innerText = numeroAnterior2;
      operando2 = e.value;
      divOperando2.innerText = operando2;
  } else {
      calcular2();
      divNumeroAtual2.innerText = "";
      operando2 = e.value;
      divOperando2.innerText = operando2;
      numeroAnterior2 = total2;
      divnumeroAnterior2.innerText = numeroAnterior2;
  };

  numeroAtual2 = "";
}

function calcular2 (){
  if(numeroAtual2 == "" || numeroAtual2 == undefined){
      return false;
  } else if (numeroAnterior2 == "" || numeroAnterior2 == undefined){
      return ("semNumeroAnterior");
  } else {
      divOperando2.innerText = "";
      divnumeroAnterior2.innerText = "";
      if (operando2 === "+"){
          total2 = parseFloat(numeroAnterior2) + parseFloat(numeroAtual2);
      };
      if (operando2 === "-"){
          total2 = parseFloat(numeroAnterior2) - parseFloat(numeroAtual2);
      };
      if (operando2 === "/"){
          total2 = parseFloat(numeroAnterior2) / parseFloat(numeroAtual2);
      };
      if (operando2 === "*"){
          total2 = parseFloat(numeroAnterior2) * parseFloat(numeroAtual2);
      };
  }
};

//Função para elevar a potência ou calcular a raíz quadrada
function elevarPotencia(e){
  //Se a pessoa não tiver digitado um número antes, não acontece nada.
  if(numeroAtual2 == "" || numeroAtual2 == undefined){
      limpar2();
  } else{
      // Calcula o valor ao quadrado
      if(e.value === "x²"){
          total2 = Math.pow(parseFloat(numeroAtual2), 2);
      }
      //Calcula o valor ao cubo
      if(e.value === "x³"){
          total2 = Math.pow(parseFloat(numeroAtual2), 3) 
      }
      //Calcula a raíz quadrada
      if(e.value === "√"){
          total2 = Math.sqrt(parseFloat(numeroAtual2)); 
      }
      //O numeroAtual vira o total e é mostrado na tela.
      numeroAtual2 = total2;
      divNumeroAtual2.innerText = numeroAtual2;
  } 
};
function mostrarResultado2 (){
  calcular2();
  if(calcular2() == false){
      limpar2();
  } else if(calcular2() == "semNumeroAnterior"){
      return;
  }else{
      numeroAtual2 = total2;
      divNumeroAtual2.innerText = numeroAtual2;
  }
  numeroAnterior2 = "";
  console.log(numeroAtual2)
}

