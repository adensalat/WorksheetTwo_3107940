const userNameInput = document.getElementById("userName");
const startButton = document.getElementById("startQuiz");
const introduction = document.getElementById("introduction");
const quizElement = document.getElementById("quiz");
const questionContainer = document.getElementById("question-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const feedback = document.getElementById("feedback");
const resultMessage = document.getElementById("resultMessage");

let userName;
let questions = [];
let questionIndex = 0;
let correctAnswers = 0;

const allQuestions = [
    {
        type: "radio",
        question: "Which planet is closest to the sun?",
        options: ["Earth", "Mercury", "Venus", "Mars"],
        answer: "Mercury",
    },
    {
        type: "dropdown",
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "South Korea", "Vietnam"],
        answer: "Japan",
    },
    {
        type: "text",
        question: "How many states are there in the United States?",
        answer: "50",
    },
    {
        type: "radio",
        question: "What is the capital of France?",
        options: ["Paris", "Lyon", "Marseille", "Bordeaux"],
        answer: "Paris",
    },
    {
        type: "dropdown",
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Gold", "Iodine"],
        answer: "Oxygen",
    },
    {
        type: "text",
        question: "How many continents are there on Earth?",
        answer: "7",
    },
    {
        type: "radio",
        question: "Which animal is the largest mammal?",
        options: ["Elephant", "Whale", "Hippopotamus", "Giraffe"],
        answer: "Whale",
    },
];

startButton.addEventListener("click", startQuiz);
prevButton.addEventListener("click", showPrevQuestion);
nextButton.addEventListener("click", showNextQuestion);

function startQuiz() {
    userName = userNameInput.value;
    if (!userName) {
        alert("Please enter your name.");
        return;
    }
    questions = getRandomQuestions(5, allQuestions);
    introduction.classList.add("hidden");
    quizElement.classList.remove("hidden");
    showQuestion();
}

function getRandomQuestions(n, questionsArray) {
    const shuffled = questionsArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

function showQuestion() {
    const currentQuestion = questions[questionIndex];
    questionContainer.innerHTML = "";

    const questionNumber = document.createElement("h2");
    questionNumber.textContent = `Question ${questionIndex + 1}`;
    questionContainer.appendChild(questionNumber);

    const questionText = document.createElement("p");
    questionText.textContent = currentQuestion.question;
    questionContainer.appendChild(questionText);

    if (currentQuestion.type === "radio") {
        createRadioButtons(currentQuestion);
    } else if (currentQuestion.type === "dropdown") {
        createDropdown(currentQuestion);
    } else if (currentQuestion.type === "text") {
        createTextInput(currentQuestion);
    }

    prevButton.disabled = questionIndex === 0;
}

// Rest of the code remains the same as in the previous response


function createRadioButtons(questionData) {
    const options = questionData.options;
    const name = "option" + questionIndex;

    options.forEach((option) => {
        const optionContainer = document.createElement("div");

        const radioButton = document.createElement("input");
        radioButton.type = "radio";
        radioButton.name = name;
        radioButton.value = option;
        optionContainer.appendChild(radioButton);

        const optionLabel = document.createElement("label");
        optionLabel.textContent = option;
        optionContainer.appendChild(optionLabel);

        questionContainer.appendChild(optionContainer);
    });
}

function createDropdown(questionData) {
    const select = document.createElement("select");
    select.id = "dropdown" + questionIndex;

    questionData.options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });

    questionContainer.appendChild(select);
}

function createTextInput(questionData) {
    const input = document.createElement("input");
    input.type = "text";
    input.id = "text" + questionIndex;
    questionContainer.appendChild(input);
}

function showPrevQuestion() {
    saveAnswer();
    questionIndex--;
    showQuestion();
}

function showNextQuestion() {
    if (saveAnswer()) {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion();
        } else {
            showFeedback();
        }
    }
}

function saveAnswer() {
    const currentQuestion = questions[questionIndex];
    let userAnswer;

    if (currentQuestion.type === "radio") {
        const options = document.getElementsByName("option" + questionIndex);
        options.forEach((option) => {
            if (option.checked) {
                userAnswer = option.value;
            }
        });
    } else if (currentQuestion.type === "dropdown") {
        const dropdown = document.getElementById("dropdown" + questionIndex);
        userAnswer = dropdown.value;
    } else if (currentQuestion.type === "text") {
        const textInput = document.getElementById("text" + questionIndex);
        userAnswer = textInput.value;
    }

    if (userAnswer === undefined || userAnswer === "") {
        alert("Please select an answer before proceeding.");
        return false;
    }

    if (userAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
        correctAnswers++;
    }

    return true;
}

function showFeedback() {
    quizElement.classList.add("hidden");
    feedback.classList.remove("hidden");

    const score = (correctAnswers / questions.length) * 100;
    resultMessage.textContent = `Well done, ${userName}! You got ${score.toFixed(2)}%`;

    // Reset the quiz
    questionIndex = 0;
    correctAnswers = 0;
}


