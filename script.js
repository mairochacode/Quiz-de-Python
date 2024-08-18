const questions = [
    {
        question: "Qual é a maneira correta de criar uma função em Python?",
        options: [
            "function minhaFuncao()",
            "def minhaFuncao():",
            "criar minhaFuncao():",
            "function: minhaFuncao"
        ],
        correct: 1
    },
    {
        question: "Qual das seguintes opções é uma tupla em Python?",
        options: [
            "[1, 2, 3]",
            "{1, 2, 3}",
            "(1, 2, 3)",
            "<1, 2, 3>"
        ],
        correct: 2
    },
    {
        question: "Como você inicia um comentário em Python?",
        options: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "# Este é um comentário",
            "-- Este é um comentário"
        ],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let selectedOptionIndex = null;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.question;
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.classList.remove('correct', 'incorrect', 'selected');
    });
    document.getElementById('next-button').style.display = 'none';
}

function selectAnswer(option) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    selectedOptionIndex = Array.from(options).indexOf(option);

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.correct) {
        option.classList.add('correct');
    } else {
        option.classList.add('incorrect');
    }
    document.getElementById('next-button').style.display = 'inline-block';
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Você completou o quiz!");
    }
}

document.addEventListener('DOMContentLoaded', loadQuestion);
