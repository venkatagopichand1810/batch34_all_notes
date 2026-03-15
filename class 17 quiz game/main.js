

const progressBar = document.getElementById("progress");
const timerElement = document.getElementById("timer");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// init

let score = 0;
let timer;
let timeLeft = 15;
let currentQuestionIndex = 0; //current question index


// array of ojects for the questions and answers

const questions = [
    {
        question: "What is React?",
        answers: [
            { text: "React is Backend", correct: false },
            { text: "React is database", correct: false },
            { text: "React is javascript library", correct: true },
            { text: "None of the above", correct: false },
        ]
    },

     {
        question: "What is CSS?",
        answers: [
            { text: "CSS is Styling lang", correct: true },
            { text: "css is database", correct: false },
            { text: "css is javascript library", correct: false },
            { text: "None of the above", correct: false },
        ]
    }
]

// start the quiz
function startQuiz() {
    score = 0;
    currentQuestionIndex = 0
    showQuestion();
    updateProgress()
}

// function to show the question 

function showQuestion() {
   
    const currentQuestion = questions[currentQuestionIndex]; 
    questionElement.textContent = currentQuestion.question;

    // create the buttons for each answer

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn")
        // button.addEventListener("click")
        answerButtons.appendChild(button)
    })


}


function updateProgress(){

}

startQuiz(); //calling the startquiz