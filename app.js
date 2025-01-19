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
    },
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

function startGame() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    answerButtonsElement.innerHTML = '';
    question.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("btn");

    });
}



/*----------- Event Listeners ----------*/
