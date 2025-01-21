// /*-------------- Constants -------------*/
const questions = [
    {
        question: "Who's the best one in the town?",
        choices: ["idk", "Wrong", "mohd", "noone"],
        correctAnswer: 2
    },
    {
        question: "Is Mohammed the best?",
        choices: ["yes", "hah?", "ofc", "no"],
        correctAnswer: 0
    },
    {
        question: "Mohammed is the greatest?",
        choices: ["no", "yeea", "idk", "not sure"],
        correctAnswer: 1
    },
    {
        question: "What is Mohammed's car plate?",
        choices: ["87524", "535451", "985", "1000"],
        correctAnswer: 1
    }


];

const backgroundMusic = new Audio('./assets/Millionare.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;
const stopBackgroundMusic = () => {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}

/*---------- Variables (state) ---------*/
let currentQuestionIndex = 0;
let score = 0;

/*----- Cached Element References  -----*/
const questionElement = document.querySelector("#quistion");
const answerButtonsElement = document.querySelector("#answer-buttons");
const nextButtonElement = document.querySelector("#next-btn");
const resultEl = document.querySelector(".quiz");
/*-------------- Functions -------------*/


const playBackgroundMusic = () => {
    backgroundMusic.play();
};
const handleReaction = (event) => {
    const selectedAnswer = event.target.textContent;

    const correctAnswer = questions[currentQuestionIndex].choices[questions[currentQuestionIndex].correctAnswer];
    if (selectedAnswer === correctAnswer) {
        score++;
    }
};

const showQuestion = () => {

    playBackgroundMusic();

    answerButtonsElement.innerHTML = "";
    questionElement.textContent = questions[currentQuestionIndex].question;
    for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        const button = document.createElement("button");

        button.textContent = questions[currentQuestionIndex].choices[i];
        answerButtonsElement.appendChild(button);
    }

};

const nextQuestion = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
};

const showResults = () => {
    stopBackgroundMusic();
    resultEl.innerHTML = `Your Score: ${score}/4
    <button onclick="location.reload()">Restart Quiz</button>`
};


showQuestion();


/*----------- Event Listeners ----------*/
answerButtonsElement.addEventListener("click", handleReaction)
nextButtonElement.addEventListener("click", nextQuestion);






