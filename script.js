const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".ccontent");
const contentFinish = document.querySelector(".finish");
const btnResart = document.querySelector(".finish button");

import questions from "./questions.js";

let currentIndex = 0;
let questionCorrect = 0;

function nextQuestion(e){
    if(e.target.getAttribute("data-correct") === "true"){
        questionCorrect++;
    }
    if(currentIndex < question.length -1){
        currentIndex++;
        loadQuestion();
    }else{
        finish();
    }
}

btnResart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";

    currentIndex = 0;
    questionCorrect = 0;
    loadQuestion();
}

function finish(){
    textFinish.innerHTML = `Você acertou ${questionCorrect} de ${question.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

    function loadQuestion(){
        spnQtd.innerHTML = `${currentIndex + 1}/${question.length}`;
        const item = questions[currentIndex];
        answers.innerHTML = "";
        question.innerHTML = item.question;

        item.answers.forEach((answers) => {
            const div = document.createElement("div");
            div.innerHTML = 
            `<button class="answers" data-corrct="${answers.correct}">
                ${answers.option}
            </button>
            `;
            answers.appendChld(div);    
    });
    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    
    });
}

loadQuestion();