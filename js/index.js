const quiz = document.querySelectorAll('input[type=radio]');
const btnEnviar = document.querySelector('#enviar');
const btnProximo = document.querySelector('#proximo');

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
  {um: 'Terra, Vento, fogo, Trovão e Água', dois: Terra, Vento, fogo, Trovão, tres: Terra, Vento, folha, Trovão e Areia},
  {um: '3 Hokaque', dois: '4 Hokaque', tres: '7 Hokaque'},
  {um: 'Rock Lee, dois: 'Naruto', tres: 'Shikamaru'},
  {um: 'Akatisuki', dois: 'Ninjas Renegados', tres: 'Aldeia do Fogo'},
  {um: 'Ninja", dois: 'Jinchuuriki', tres: 'Besta'},
];



quiz.forEach((item)=>{
    item.addEventListener('click',event=>{
        if(event.target.id == 'um'){
            return  console.log(event.target.id);
        }
    })
})


btnEnviar.addEventListener('click',()=>{
    console.log('enviar');
});

btnProximo.addEventListener('click',()=>{
    console.log('proximo');
})

const pergunta =()=>{
  
}