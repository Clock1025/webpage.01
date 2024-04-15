const questions = [
    "I enjoy meeting new people.",
    "I prefer spending time alone rather than with others.",
    "I often feel anxious in social situations.",
    "I am good at understanding other people's emotions.",
    "I find it easy to make decisions quickly.",
    "I worry about the future.",
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('question');
    questionContainer.innerText = questions[currentQuestionIndex];
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
