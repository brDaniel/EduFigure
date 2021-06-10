'use strict'
/*
@
*/
const memoryGame=document.getElementById("memory-game");
const resultDisplay=document.querySelector('#result');
const movesDisplay=document.querySelector('.moves');
const scoreDisplay=document.querySelector('.score');
const timeDisplay=document.querySelector('.time');


//list of shapes &
var cardsNames=[
  {
    name:'circle',
    img:'src/images/shape_circle.png'
  },
  {
    name:'tirangle',
    img:'src/images/shape_triangle.png'
  },
  {
    name:'square',
    img:'src/images/shape_square.png'
  },
  {
    name:'circle',
    img:'src/images/shape_circle.png'
  },
  {
    name:'tirangle',
    img:'src/images/shape_triangle.png'
  },
  {
    name:'square',
    img:'src/images/shape_square.png'
  }];

cardsNames.sort(()=>0.5-Math.random());


var cardsChosen=[];
var cardsChosenId=[];
var cardsWon=[];
var minutes,seconds,score,moves,interval;

function starGame(){
  
  for(let i=0;i<cardsNames.length;i++){

    var card=document.createElement('img');
    card.setAttribute('src','src/images/backCard.png');
    card.setAttribute('data-id',i);
    card.addEventListener('click',flipCard,false);
    memoryGame.appendChild(card);

  }
  score=0,moves=0,minutes=0,seconds=0;
  scoreDisplay.innerHTML=score;
  movesDisplay.innerHTML=moves;
  startTime();

}

//
//flipCard flip to card selected
function flipCard(){
  var cardChosen=this.getAttribute('data-id');
  cardsChosen.push(cardsNames[cardChosen].name);
  cardsChosenId.push(cardChosen);
  this.setAttribute('src',cardsNames[cardChosen].img);
  
  if(cardsChosen.length===2){
    moveCounter();
    setTimeout(checkMatch,500);
  }
}

function checkMatch(){
  var cards=document.querySelectorAll('img');
  const optionOneId=cardsChosenId[0];
  const optionTwoId=cardsChosenId[1];

  if(cardsChosen[0]===cardsChosen[1]){
    alert('match!!');
    scoreCounter();
    cards[optionOneId].setAttribute('src','images/white.png');
    cards[optionTwoId].setAttribute('src','images/white.png');
    cardsWon.push(cardsChosen);
  }else{
    cards[optionOneId].setAttribute('src','src/images/backCard.png');
    cards[optionTwoId].setAttribute('src','src/images/backCard.png');
    alert('try again');
  }

  cardsChosen=[];
  cardsChosenId=[];
  resultDisplay.textContent=cardsWon.length;
  if(cardsWon.length===cardsNames.length/2){
    alert("cogratulations you're win!");
  }
}

function moveCounter(){
  moves++;
  movesDisplay.innerHTML=moves;
}

function startTime(){
  interval = setInterval(function(){
        timeDisplay.innerHTML = minutes+"mins "+seconds+"secs";
        seconds++;
        if(seconds == 60){
            minutes++;
            seconds = 0;
        }
    },1000);

}

function scoreCounter(){
  score++;
  scoreDisplay.innerHTML=score;

}
//window.addEventListener("load", iniciar, false);
window.addEventListener("load",starGame,false);

