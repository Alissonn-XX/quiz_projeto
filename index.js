const btnEnviar = document.querySelector('#enviar');
const btnProximo = document.querySelector('#proximo');
const principal = document.querySelector('#principal');

let quiz = document.querySelectorAll('input[type=radio]');
let opcoes = document.querySelectorAll('.opcao');
let quizEnunciado = document.querySelector('#conteiner-item h5');
let controle = 0;
let pontuacao;

const perguntasQuiz=[
 {pergunta: 'Em Quantas nações Naruto é divido?',  resposta: 5},
 {pergunta: 'Quais os nomes das nações como ninja?', resposta: 'Terra, Vento, fogo, Trovão e Água'},
 {pergunta: 'Quem selou a raposa no corpo do Naruto?', resposta: '4 Hokaque'},
 {pergunta: 'Qual ninja tem habilidades de estrategista?', resposta: 'Shikamaru'},
 {pergunta: 'Qual é o nome da organização que usa capa preta?', resposta: 'Akatisuki'},
 {pergunta: 'Qual o nome da pessoa que tem uma besta selada no corpo?', resposta: 'Jinchuuriki'}
];

const alternativas = [
  {um: 2, dois: 5, tres: 4},
  {um: 'Terra, Vento, fogo, Trovão e Água', dois: 'Terra, Vento, fogo, Trovão', tres: 'Terra, Vento, folha, Trovão e Areia'},
  {um: '3 Hokaque', dois: '4 Hokaque', tres: 'Poze do Rodo'},
  {um: 'Rock Lee', dois: 'Naruto', tres: 'Shikamaru'},
  {um: 'Akatisuki', dois: 'Ninjas Renegados', tres: 'Aldeia do Fogo'},
  {um: 'Ninja', dois: 'Jinchuuriki', tres: 'Besta'}
];

quizEnunciado.innerText = perguntasQuiz[controle].pergunta;
opcoes[0].innerText = alternativas[controle].um;
opcoes[1].innerText = alternativas[controle].dois;
opcoes[2].innerText = alternativas[controle].tres;

const proximoEnuciado = num => perguntasQuiz[num].pergunta;
const alternativa =(respostasOp = [])=>{
  respostasOp[0].innerText = alternativas[controle].um
  respostasOp[1].innerText = alternativas[controle].dois
  respostasOp[2].innerText = alternativas[controle].tres
}

btnProximo.addEventListener('click',()=>{
  let classAtiva =  principal.classList.toggle('acao');
  let verificar = controle >= perguntasQuiz.length - 1;
  
   controle++;

  if(verificar){
      controle = 0;
    }

   
    retiraClass(principal);
    adicionarClass(classAtiva);
})

const retiraClass = (elemento) =>{
  setTimeout(()=>{
    elemento.classList.remove('acao');
  },1010)
}

const adicionarClass = (elemento) =>{
  if(elemento){
    setTimeout(()=>{
      quizEnunciado.innerText = proximoEnuciado(controle);
      alternativa(opcoes);
    },100);
  }
}

btnEnviar.addEventListener('click',()=>{
  console.log('enviar');
 

})
