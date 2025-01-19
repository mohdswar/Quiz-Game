/*-------------- Constants -------------*/
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: 2 // Index of the correct answer in the choices array
    },
    {
        question: "Which programming language is used for web development?",
        choices: ["Python", "JavaScript", "C++", "Java"],
        correctAnswer: 1
    },
    {
        question: "What is 5 + 3?",
        choices: ["5", "8", "10", "7"],
        correctAnswer: 1
    }
    {
        question: "What is 5 + 3?",
        choices: ["5", "8", "10", "7"],
        correctAnswer: 1
    }
];

/*---------- Variables ---------*/
let currentQuestionIndex = 0;
let score = 0;

/*----- Cached Element References  -----*/

const questionElement = document.querySelector("#quistion");
const answerButtonsElement = document.querySelector("#answer-buttons");
const nextButtonElement = document.querySelector("#next-btn");
const quizContainer = document.querySelector(".quiz");


/*-------------- Functions -------------*/

function startQuiz() {
    quizContainer.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {

    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}
/*----------- Event Listeners ----------*/

nextButtonElement.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});