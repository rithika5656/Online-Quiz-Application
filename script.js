// Quiz Questions
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language", "Hyperlinking Text Marking Language"],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"],
        answer: 1
    },
    {
        question: "Which language is used for web scripting?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: 2
    },
    {
        question: "What is the correct HTML tag for the largest heading?",
        options: ["<h6>", "<heading>", "<head>", "<h1>"],
        answer: 3
    },
    {
        question: "Which CSS property changes the text color?",
        options: ["font-color", "text-color", "color", "background-color"],
        answer: 2
    }
];

// Load questions when page loads
window.onload = loadQuiz;

function loadQuiz() {
    const quizDiv = document.getElementById('quiz');
    let html = '';

    for (let i = 0; i < questions.length; i++) {
        html += `
            <div class="question">
                <h3>Q${i + 1}. ${questions[i].question}</h3>
                <div class="options">
        `;

        for (let j = 0; j < questions[i].options.length; j++) {
            html += `
                <label>
                    <input type="radio" name="question${i}" value="${j}">
                    ${questions[i].options[j]}
                </label>
            `;
        }

        html += `
                </div>
            </div>
        `;
    }

    quizDiv.innerHTML = html;
}

function submitQuiz() {
    let score = 0;

    // Check each answer
    for (let i = 0; i < questions.length; i++) {
        const selected = document.querySelector(`input[name="question${i}"]:checked`);
        
        if (selected && parseInt(selected.value) === questions[i].answer) {
            score++;
        }
    }

    // Show result
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = score + ' / ' + questions.length;
}

function restartQuiz() {
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('submit-btn').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    loadQuiz();
}
