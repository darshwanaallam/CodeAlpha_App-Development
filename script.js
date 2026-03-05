let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

let currentIndex = 0;

const question = document.getElementById("question");
const answer = document.getElementById("answer");

function displayCard(){

if(flashcards.length === 0){
question.innerText = "No Flashcards Available";
answer.innerText = "";
return;
}

question.innerText = flashcards[currentIndex].question;
answer.innerText = flashcards[currentIndex].answer;
answer.classList.add("hide");

document.getElementById("newQuestion").value = flashcards[currentIndex].question;
document.getElementById("newAnswer").value = flashcards[currentIndex].answer;

}

displayCard();

document.getElementById("showAnswer").onclick = function(){
answer.classList.toggle("hide");
};

document.getElementById("next").onclick = function(){

if(flashcards.length === 0) return;

currentIndex++;

if(currentIndex >= flashcards.length){
currentIndex = 0;
}

displayCard();

};

document.getElementById("prev").onclick = function(){

if(flashcards.length === 0) return;

currentIndex--;

if(currentIndex < 0){
currentIndex = flashcards.length - 1;
}

displayCard();

};

document.getElementById("addCard").onclick = function(){

let q = document.getElementById("newQuestion").value;
let a = document.getElementById("newAnswer").value;

if(q === "" || a === ""){
alert("Enter both question and answer");
return;
}

flashcards.push({
question:q,
answer:a
});

localStorage.setItem("flashcards",JSON.stringify(flashcards));

currentIndex = flashcards.length - 1;

displayCard();

};

document.getElementById("updateCard").onclick = function(){

if(flashcards.length === 0) return;

flashcards[currentIndex].question = document.getElementById("newQuestion").value;
flashcards[currentIndex].answer = document.getElementById("newAnswer").value;

localStorage.setItem("flashcards",JSON.stringify(flashcards));

displayCard();

};

document.getElementById("deleteCard").onclick = function(){

if(flashcards.length === 0) return;

flashcards.splice(currentIndex,1);

if(currentIndex > 0){
currentIndex--;
}

localStorage.setItem("flashcards",JSON.stringify(flashcards));

displayCard();

};