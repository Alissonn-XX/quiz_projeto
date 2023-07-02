const conteiner = document.querySelector('#conteiner-item');
const btnEnviar = document.querySelector('#enviar');
const btnProximo = document.querySelector('#proximo');
const principal = document.querySelector('#principal');
const spinner = document.querySelector('#spinner');

let quiz = document.querySelectorAll('[type=radio]');
let opcoes = document.querySelectorAll('.opcao');
let quizEnunciado = document.querySelector('#conteiner-item h5');

let controle = 0;
let pontuacao;

var beforeDoPrincipal = window.getComputedStyle(principal,':before').animation.includes('espelho');

let respostasCorretas = [];
let respostasErradas = [];

const perguntasQuiz=[
 {pergunta: 'Em quantas nações Naruto é divido?',  resposta: 5},
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
  
  if(controle === 5){
    envioDasRespostas();
    return
  }
  
  retiraClass(principal);
  adicionarClass(classAtiva);
}

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
      verificar(inf);
      selecionandoProximo();
     }
  })
}

const verificar = (entrada)=>{
  let respostas =  String(perguntasQuiz[controle].resposta) === entrada;
  const limit = respostasCorretas.length < 6;
  
  if(respostas && limit){
    respostasCorretas.push(entrada);  
     return;
  }
  respostasErradas.push(entrada);
  
}                             


const envioDasRespostas = ()=>{
  let listaCorretas = document.createElement('ul');
  let listaErrados = document.createElement('ul');
  
   const loading  = ()=>{
     setTimeout(()=>{
       principal.previousElementSibling.lastElementChild.setAttribute('style','visibility:hidden');
       principal.children.item(0).setAttribute('style','visibility:hidden');
       spinner.setAttribute('style','visibility:visibile');
    },2000)
  };
    
  setTimeout(()=>{
    listaCorretas.classList.toggle('respostas-corretas');
    listaErrados.classList.toggle('respostas-erradas');
    respostasCorretas.forEach((item)=>{listaCorretas.innerHTML += `<li>${item}</li>`});
    respostasErradas.forEach((item)=>{listaErrados.innerHTML += `<li>${item}</li>`});
        conteiner.setAttribute('style','visibility:visible');
        conteiner.innerHTML = "";
        conteiner.classList.add('respostas-visivel');
        conteiner.append(listaCorretas,listaErrados);
        spinner.setAttribute('style','visibility:hidden');
        principal.previousElementSibling.lastElementChild.setAttribute('style','visibility:visible');
        principal.previousElementSibling.lastElementChild.innerHTML = `<span>Corretas</span><span>Erradas</span>`;
        principal.previousElementSibling.lastElementChild.classList.add('respostas-visivel');
        conteiner.insertAdjacentHTML('afterend',resumo(respostasCorretas,respostasErradas,controle));   
      },4000);
      
      loading();
}  

const confirmacao = ()=>{
  let envio = confirm('Corfirma o envio das respostas selecionadas?');
  if(envio){
    envioDasRespostas();
    return
  }
}

btnEnviar.addEventListener('click', confirmacao);
btnProximo.addEventListener('click',mudanca);  

const resumo = (acerto,erro,totalRespondido)=>{
  let erros = erro.length; let respostas = totalRespondido;
  let acertos = acerto.length;
  
  const resumototal = document.createElement('div');
  
  return resumototal.innerHTML = `<div class="resultado"> <span>Resumo:</span> <span>Acertos:${acertos}</span> <span >Erros:${erros}</span> <span>Total respondido:${respostas}</span> </div>`;

}

