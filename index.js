const btnEnviar = document.querySelector('#enviar');
const btnProximo = document.querySelector('#proximo');
const principal = document.querySelector('#principal');
const loading = document.querySelector('#spinner');
const conteiner = document.querySelector('#conteiner-item');

let quiz = document.querySelectorAll('[type=radio]');
let opcoes = document.querySelectorAll('.opcao');
let quizEnunciado = document.querySelector('#conteiner-item h5');

let controle = 0;
let pontuacao;

var beforeDoPrincipal = window.getComputedStyle(principal,':before').animation.includes('espelho');

let respostasCorretas = [];
let respostasErradas = [];

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

  return elemento
}


const mudanca = ()=>{
  let classAtiva =  principal.classList.toggle('acao');
  let verificar = controle >= perguntasQuiz.length - 1;
  
  controle++;
  
  if(verificar){
    controle = 0;
  }
  
  retiraClass(principal);
  adicionarClass(classAtiva);
 
}

btnProximo.addEventListener('click',mudanca);

for(let i=0; i < quiz.length; i++){
  const selecionandoProximo = ()=>{
    setTimeout(()=>{
     mudanca();
     quiz[i].checked = false;
    },900)
   }
  quiz[i].addEventListener('click',(event)=>{
    let inf = event.target.nextElementSibling.innerText;
     if(!beforeDoPrincipal){
      console.log(verificar(inf));
      selecionandoProximo();
     }
  })
}

const verificar = (entrada)=>{
  let respostas =  perguntasQuiz[controle].resposta === entrada;
  const limit = respostasCorretas.length <= 6;
  if(respostas && limit){
    respostasCorretas.push(entrada);  
     return;
  }
  respostasErradas.push(entrada);
}                             


btnEnviar.addEventListener('click',()=>{
 let p = document.createElement('p')
  
  setTimeout(()=>{
    //conteiner.append(p);
    respostasCorretas.forEach((item)=>{p.innerHTML += `<p>${item}</p>`});
    principal.previousElementSibling.lastElementChild.setAttribute('style','visibility:hidden');
    principal.children.item(0).setAttribute('style','visibility:hidden');
    principal.children.item(1).setAttribute('style','visibility:visibile');
  },2000)
  
}); 

//principal.children.item(1).setAttribute('style','visibility:visibile');

