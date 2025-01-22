// /*-------------- Constants -------------*/
const questions = [
    {
        question: "In which year did Bahrain first host the Formula 1 race?",
        choices: ["2004", "2005", "2007", "2010"],
        correctAnswer: 1
    },
    {
        question: "Which year was the Bahrain World Trade Center completed?",
        choices: ["2000", "2004", "2008", "2011"],
        correctAnswer: 2
    },
    {
        question: "Which is the oldest fort in Bahrain?",
        choices: ["Qal'at al-Bahrain", "Riffa Fort", "Arad Fort", "Fort of Bahrain"],
        correctAnswer: 0
    },
    {
        question: "What is the largest island in Bahrain?",
        choices: ["Hawar Islands", "Sitra", "Muharraq", "Amwaj Islands"],
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
    resultEl.innerHTML = `Your Score: ${score}/4
    <button onclick="location.reload()">Restart Quiz</button>`
};


showQuestion();


/*----------- Event Listeners ----------*/
answerButtonsElement.addEventListener("click", handleReaction)
nextButtonElement.addEventListener("click", nextQuestion);
