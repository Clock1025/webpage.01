const questions = [
    {
        question: "I enjoy meeting new people.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    {
        question: "I prefer spending time alone rather than with others.",
        options: ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"]
    },
    // Add more questions and options here
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('question');
    questionContainer.innerText = questions[currentQuestionIndex].question;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    questions[currentQuestionIndex].options.forEach(option => {
        const optionElement = document.createElement('input');
        optionElement.type = 'radio';
        optionElement.name = 'option';
        optionElement.value = option;
        optionsContainer.appendChild(optionElement);

        const labelElement = document.createElement('label');
        labelElement.textContent = option;
        optionsContainer.appendChild(labelElement);
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    const resultContainer = document.getElementById('result');
    const totalQuestions = questions.length;
    const score = Math.floor((Math.random() * totalQuestions) + 1);
    resultContainer.innerHTML = `<p>Your score is ${score} out of ${totalQuestions}.</p>`;
}

// Display first question when page loads
displayQuestion();
