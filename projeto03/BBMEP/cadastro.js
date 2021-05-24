// OFF E ON//    
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
  /* MUDAR O TAMANHO DA FONTE*/
  function toUpper(){
  var font = document.getElementsByClassName('font')[0].src
  if(font.includes("18.png")){
      document.getElementsByClassName('font')[0].src="imgbruna/17.png";
      document.body.style.fontSize='1.2em'
  }else if(font.includes("17.png")){
      document.getElementsByClassName('font')[0].src="imgbruna/18.png";
      document.body.style.fontSize='1em'
    }
  }

  
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