const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const quizResult = document.getElementById('quiz-result');

const quizData = [
    {
        question: "Which of the following is a lie about Yasmin?",
        options: ["She is color blind", "She got hit by a car last year", "She loves cars"],
        correct: 1
    },
    {
        question: "Which genre does Yasmin listen to the most?",
        options: ["Pop", "Rock", "Rap", "Classical"],
        correct: 2
    },
    {
        question: "Yasmin’s go-to drink?",
        options: ["Latte", "Black Coffee", "Mojito", "Espresso", "Matcha"],
        correct: 2
    }
    ,
    {
        question: "Where did Yasmin grow up",
        options: ["Saudi Arabia", "Qatar", "Jordan", "UAE"],
        correct: 2
    }
    ,
    {
        question: "What car does Yasmin drive",
        options: ["BMW", "Toyota", "Mercedes", "Ford"],
        correct: 2
    },
    {
        question: "What pet did Yasmin have growing up",
        options: ["Cat", "Fish", "Dog", "Rabbit"],
        correct: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', nextQuestion);

function startQuiz() {
    startButton.classList.add('hide');
    quizContainer.classList.remove('hide');
    quizResult.innerText = '';
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = quizData[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(index));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        score++;
    }
    Array.from(answerButtons.children).forEach((button, index) => {
        button.disabled = true;
        if (index === correctIndex) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    });
    nextButton.classList.remove('hide');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.classList.add('hide');
    let resultText;
    if (score === quizData.length) {
        resultText = "You're a Yasmin expert - You know everything about her!";
    } else if (score >= quizData.length / 2) {
        resultText = "You know Yasmin pretty well but not the best!";
    } else {
        resultText = "You might need to learn a little bit more about Yasmin!";
    }
    quizResult.innerText = resultText;
    startButton.innerText = 'Restart Quiz';
    startButton.classList.remove('hide');
}

// Array of quotes
const quotes = [
    "Bombaaaaaaaaaastic",
    "Can we finish this now so we don't have to do it later (due date is in 20 days)",
    "Let's walk to get water (so we go to class 10 mins late)",
  
];

// Function to generate and display a random quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    // Display the quote in the paragraph element
    document.getElementById('meme-text').textContent = randomQuote;
}
