const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

const popup_cont=document.getElementById("popup-container");

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function openPopup()
{
  setTimeout(()=>{
    popup_cont.style.display="flex";
    popup_cont.style.visibility="visible";
  },1500);
  
}

function closePopup()
{
  popup_cont.style.display="none";
}

function checkForMatch() {
  if (!secondCard || !firstCard) return; // Check if either card is null

  let matchedFramework = firstCard.dataset.framework; // Store the framework in a variable
  let isMatch = matchedFramework === secondCard.dataset.framework;

  if (isMatch) 
  {
    openPopup();
    if (matchedFramework === 'RTE') {
      InfoRte();
    }
    else if(matchedFramework==='RTHE'){  
      InfoRhte();
    }
    else if(matchedFramework==='cyber'){
      InfoCyber();
    }
    else if(matchedFramework==='gtbt'){
      InfoGTBT();
    }
    else if(matchedFramework==='rtp'){
      InfoRtp();
    }
    else{
      Infoexpression(); 
    }
    disableCards();
  } 
  else 
  {
    unflipCards();
  }
}

function InfoRte(){
  document.getElementById("popup-title-para").innerHTML="Right to Education"
  document.getElementById("popup-body-para").innerHTML="This right is like a promise that everyone, including kids like you, should have the chance to go to school and learn. It means that no matter who you are or where you come from, you should have the opportunity to get an education. This right is for everyone and not just for some people. Every child between the age of 6-14 should have a chance to learn. "
}
function InfoRhte(){
  document.getElementById("popup-title-para").innerHTML="Right to healthy environment"
  document.getElementById("popup-body-para").innerHTML="This right means that every person, including you and me, has the special rule that we should live in a place that's clean, safe, and good for nature. It's like having a big wish for fresh air to breathe, clean water to drink, and lots of happy animals and plants. This rule reminds grown-ups to take care of the Earth, so it stays beautiful for you, your friends, and all the kids in the world, and for all the animals and plants too, because we all share this amazing planet together!"
}
function InfoCyber(){
  document.getElementById("popup-title-para").innerHTML="Cyber Safety"
  document.getElementById("popup-body-para").innerHTML="Cyber safety is like a set of rules for using the internet and devices, just like we have rules for crossing the street. You should never share personal information like your name, address, or passwords with strangers, and you should tell a grown-up if something online makes you uncomfortable. It's important to treat others online how you'd like to be treated and not to say mean things or share private stuff about people. Cyber safety helps you have fun and learn safely while using computers, tablets, and phones!"
}
function InfoGTBT(){
  document.getElementById("popup-title-para").innerHTML="Good Touch Bad Touch"
  document.getElementById("popup-body-para").innerHTML="It is a way to help you understand the difference between touches that make you feel safe and happy, like hugs from loved ones, and touches that make you feel uncomfortable or scared. Good touches, like a friendly pat on the back or a loving hug, are okay and make you feel warm inside. Bad touches, like someone touching you in a way that feels strange or secret, should always be told to a grown-up you trust, like mom, dad, or a teacher, so they can help keep you safe. Remember, it's important to listen to your feelings and speak up if something doesn't feel right because your safety is very important. "
}
function InfoRtp(){
  document.getElementById("popup-title-para").innerHTML="Right to play"
  document.getElementById("popup-body-para").innerHTML="This is like a fun rule that says every kid, including you, should have lots of time to have fun and play every day. It's important because playing helps you learn, make friends, and be happy. Just like going to school, playing is also an important part of being a kid. So, you have the right to run, jump, laugh, and have adventures because it makes you grow up strong and smart. Remember, playing is like your superhero training, and you should have a super-duper childhood full of joy and laughter!"
}
function Infoexpression(){
  document.getElementById("popup-title-para").innerHTML="Right to expression"
  document.getElementById("popup-body-para").innerHTML="This is like a superpower that says you have the freedom to share your thoughts, ideas, and feelings with others. It means you can talk, draw, write, or even sing about what's in your heart and mind. Just like superheroes use their powers for good, you can use this right to make the world a better place by letting your voice be heard. So, don't be afraid to share your thoughts and feelings because it's your special right, like having a magical megaphone to share your wonderful ideas with the world!"
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  
  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

