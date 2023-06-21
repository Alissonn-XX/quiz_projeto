const btnEnviar = document.querySelector('#enviar');
const btnProximo = document.querySelector('#proximo');
let  quiz = document.querySelectorAll('input[type=radio]');
let quizEnunciado = document.querySelector('#conteiner-item h5')



let pontuacao;
const perguntasQuiz = [
 {pergunta: 'Em Quantas nações Naruto é divido?', resposta: 5},
 {pergunta: 'Quais os nomes das nações como ninja?', resposta: 'Terra, Vento, fogo, Trovão e Água'},
 {pergunta: 'Quem selou a raposa no corpo do Naruto?', resposta: '4 Hokaque'},
 {pergunta: 'Qual ninja tem habilidades de estrategista?', resposta: 'Shikamaru'},
 {pergunta: 'Qual é o nome da organização que usa capa preta?', resposta: 'Akatisuki'},
 {pergunta: 'Qual o nome da pessoa que tem uma besta selada no corpo?', resposta: 'Jinchuuriki'}
];

const alternativas = [
  {um: 2, dois: 8, tres: 2},
  {um: 'Terra, Vento, fogo, Trovão e Água', dois: 'Terra, Vento, fogo, Trovão', tres: 'Terra, Vento, folha, Trovão e Areia'},
  {um: '3 Hokaque', dois: '4 Hokaque', tres: '7 Hokaque'},
  {um: 'Rock Lee', dois: 'Naruto', tres: 'Shikamaru'},
  {um: 'Akatisuki', dois: 'Ninjas Renegados', tres: 'Aldeia do Fogo'},
  {um: 'Ninja', dois: 'Jinchuuriki', tres: 'Besta'},
];

let controle = 0;
/* while(controle >= perguntasQuiz.length){
  controle++
} */
quizEnunciado.innerText = perguntasQuiz[controle].pergunta



quiz.forEach((item)=>{
   item.innerText = alternativas[0].um
})




btnEnviar.addEventListener('click',()=>{
    console.log('enviar');
});

btnProximo.addEventListener('click',()=>{
    if(controle > perguntasQuiz.length){
        controle = 0
        return
    }else{
        controle++;
        quizEnunciado.innerText = perguntasQuiz[controle].pergunta
    }

    console.log(controle);
})

