// /*-------------- Constants -------------*/
const questions = [
    {
        question: "What will the following code return: '5' + 5?",
        choices: ["55", "10", "15", "undefined"],
        correctAnswer: 0
    },
    {
        question: "What will the following code output: 'console.log(!!null)'?",
        choices: ["true", "false", "undefined", "NaN"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT a falsy value in JavaScript?",
        choices: ["false", "0", "NaN", "[]"],
        correctAnswer: 3
    },
    {
        question: "What is the difference between '==' and '===' in JavaScript?",
        choices: ["'==' compares values only, '===' compares both value and type", "'==' is for strict comparison", "'===' is for abstract comparison", "'==' is used for objects and '===' for primitives"],
        correctAnswer: 0
    }
];


const backgroundMusic = new Audio('./assets/Millionare.mp3');
backgroundMusic.loop = true;
backgroundMusic.volume = 0.5;
const stopBackgroundMusic = () => {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
}


const winMusic = new Audio('./assets/win.mp3');
winMusic.loop = true;
winMusic.volume = 0.5;

const stopWinMusic = () => {
    winMusic.pause();
    winMusic.currentTime = 0;
}


/*---------- Variables (state) ---------*/
let currentQuestionIndex = 0;
let score = 0;

/*----- Cached Element References  -----*/
const questionElement = document.querySelector("#quistion");
const answerButtonsElement = document.querySelector("#answer-buttons");
const nextButtonElement = document.querySelector("#next-btn");
const resultEl = document.querySelector(".quiz");
const btnEl = document.querySelectorAll(".btn");
/*-------------- Functions -------------*/

const playBackgroundMusic = () => {
    backgroundMusic.play();
};

const playWinMusic = () => {
    winMusic.play();
};

const handleReaction = (event) => {
    selectedAnswer = event.target.textContent;
};

const showQuestion = () => {

    playBackgroundMusic();

    answerButtonsElement.innerHTML = "";
    questionElement.textContent = questions[currentQuestionIndex].question;
    for (let i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        btnEl[i].textContent = questions[currentQuestionIndex].choices[i];
        const button = btnEl[i];

        answerButtonsElement.appendChild(button);


    }

};

const nextQuestion = () => {

    const correctAnswer = questions[currentQuestionIndex].choices[questions[currentQuestionIndex].correctAnswer];
    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
};

const showResults = () => {
    stopBackgroundMusic();
    playWinMusic();
    resultEl.innerHTML = `
        <div style="text-align: center; font-size: 24px; margin-top: 20px;">
            Your Score: ${score}/4
            <button style="display: block; margin: 20px auto; padding: 10px 20px; font-size: 16px; cursor: pointer;" onclick="location.reload()">Restart Quiz</button>
        </div>`;
};


showQuestion();


/*----------- Event Listeners ----------*/
answerButtonsElement.addEventListener("click", handleReaction)
nextButtonElement.addEventListener("click", nextQuestion);

