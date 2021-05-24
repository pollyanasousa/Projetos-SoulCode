
//-------------OFF E ON-------------//
function trocarDeTema(){
  var img = document.getElementsByTagName('img')[0].src // vai guardar o valor para retornar o src
  if(img.includes("off1.png")){ // se nessa string tem off1.png Este método retorna truese a string contém os caracteres e, falsecaso contrário.
    document.getElementsByTagName('img')[0].src="imgbruna/onwhite1.png";
    document.body.style.color='black'
    document.body.style.background = color='white'
    document.getElementById('fundadoras').className = 'fundadorasblack'

  }else if(img.includes("onwhite1.png")){
    document.getElementsByTagName('img')[0].src="imgbruna/off1.png";
    document.body.style.color='white'
    document.body.style.background = color='black'
    document.getElementById('fundadoras').className = 'fundadoraswhite'
  }
}
//-------------MUDAR O TAMANHO DA FONTE-------------//
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

//-------- JAVASCRITP PÁGINA DE CADASTRO --------------//

  
//UPPERCASE no NOME
function saiu(x) {
  x.value = x.value.toUpperCase();
};

//VALIDANDO CPF E COLOCANDO PONTOS
function validaCPF() {
  let ao_cpf = document.forms.form1.ao_cpf.value; //cria variável e específica onde no html
  let cpfValido = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/; //condição para o formato correto de cpf

  if (cpfValido.test(ao_cpf) == false) {
      ao_cpf = ao_cpf.replace(/\D/g, ""); //Remove tudo o que não é dígito

      if (ao_cpf.length == 11) {
          ao_cpf = ao_cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
          ao_cpf = ao_cpf.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos de novo (para o segundo bloco de números)
          ao_cpf = ao_cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos

          var valorValido = document.getElementById("ao_cpf").value = ao_cpf;

      } else { //se a condição for falsa então fica vermelho e dá alerta
          document.forms.form1.ao_cpf.style.color = "red";
          alert("CPF invalido");
      }
  }
};

// DATA DE NASCIMENTO, VALIDANDO A DATA MÁXIMA (HOJE)
data.max = new Date().toISOString().split("T")[0]; //chama uma função (toISOString) na qual irá separar a data e o horário da data atual em um array, sendo a data posição 0 e o horário posição 1.

// CALCULANDO A IDADE DO USUÁRIO
function calculaIdade(data) {  
  let userInput = data;  
  let dia = new Date(userInput);  
  if (userInput == null || userInput == '') {  
      alert = "Escolha uma data de nascimento.";    
      return false;   
  } else {  
      // calcula a diferença do mês com a data atual
      let mesDif = Date.now() - dia.getTime();  
      
      // converte o calculo acima em um formato data
      let idadeDif = new Date(mesDif);   
      
      // pegando o ano da data digitada     
      let ano = idadeDif.getUTCFullYear();  
      
      // calcula a idade 
      let idade = Math.abs(ano - 1970);  
      
      //retorna valor
      return idade  
  }
}  

// VALIDANDO EMAIL
function validaEmail() {
  let email = document.forms.form1.email.value; //cria variável e específica seu lugar no html
  let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); //cria variável para o formato válido de email
  if (!isValid){ //se NÃO FOR válido então mudo a cor e dou alerta
      document.forms.form1.email.style.color = "red";
      alert("E-mail inválido");
  }
}


// EXIBINDO OS RESULTADOS
function resultado(){
  const form = document.querySelector('.form'); //seleciona a classe form no html
  const resultado = document.querySelector('.resultado'); //seleciona a classe resultado no html

  const pessoas = []; //criando um array para jogar os valores dos inputs dentro dele

  function recebeEventoForm(evento){
      evento.preventDefault(); //essa função faz a página parar de atualizar

      //variáveis criadas e chamadas pela classe no html
      const nome = form.querySelector('.nome');
      const cpf = form.querySelector('.cpf');
      const data = form.querySelector('.data');
      const email = form.querySelector('.email');
      const sexo = form.querySelector('.sexo');

      //incluindo os dados através do push e declarando os valores através do objeto
      pessoas.push({
          nome: nome.value, //value serve para mostrar os valores
          cpf: cpf.value,
          data: data.value,
          email: email.value,
          sexo: sexo.value
      });

      //imprimindo o textinho com os valores na tela quando clica em enviar
      resultado.innerHTML += `<p>Olá ${nome.value}, seu login é: ${email.value}, você tem ${calculaIdade(data.value)} anos de idade, se define como uma pessoa do sexo ${sexo.value}, e pode usar ${cpf.value} como senha. </p>` //incluindo no html os valores digitados cada vez que clicar no submit
      console.log(pessoas);
  }
  form.addEventListener('submit', recebeEventoForm); //adiciona um 'evento' no form quando clica em submit e chama a função
}
resultado();

//-------------- JAVASCRIPT DO CONVERSOR -------------//

//conversor de moeda
function converter() {
  valor = document.getElementById("valorDigitado").value;
  //variaveis recebem valor
  var moeda1 = document.getElementById("moedaorigem").value;
  var moeda2 = document.getElementById("moedadestino").value;

  //validação, não letra e não numero menor que 0
  if (isNaN(valor) || valor < 0 || valor == "") {
      alert("Valor inválido. Digite um número maior que 0.");
  } else if(moeda1 == moeda2) {
      //as duas não podem ser iguais
          alert("Escolha moedas diferentes");
  } else {
      var valordigi = parseFloat(valor);
  
      // //validar moedas , é preciso escolher - Caso fossemos colocar um "Escolha uma moeda" dentre as opções:
      // if (moeda1 == '0' || moeda2 == '0') {
      //     alert("Escolha um moeda ");
      // }

      //calculo da conversão
      let conversao = (valordigi * moeda1) / moeda2;

      //imprime na tela
      document.getElementById("mostraResultado").innerHTML = "O valor convertido fica: R𝄞" + conversao.toFixed(2);
  };
};