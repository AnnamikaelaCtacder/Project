document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const nextButton = document.getElementById("next-btn");
    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");

    const quizData = [
        {
            question: "What is the primary goal of SDG 3?",
            choices: [
                "Ensure healthy lives and promote well-being for all at all ages",
                "Increase global economic productivity",
                "Develop new medical technologies",
                "Provide universal health insurance"
            ],
            correct: 0
        },
        {
            question: "Which of the following is a target of SDG 3?",
            choices: [
                "Reducing the global maternal mortality ratio",
                "Increasing fast food consumption",
                "Eliminating all hospitals",
                "Reducing sports activities"
            ],
            correct: 0
        },
        {
            question: "Which disease is a major concern under SDG 3?",
            choices: [
                "HIV/AIDS",
                "Common cold",
                "Mild allergies",
                "Temporary fatigue"
            ],
            correct: 0
        },
        {
            question: "How does SDG 3 promote mental health?",
            choices: [
                "By ensuring access to mental health care and reducing substance abuse",
                "By discouraging discussions about mental health",
                "By increasing work hours",
                "By banning medical treatments"
            ],
            correct: 0
        },
        {
            question: "How can individuals contribute to SDG 3?",
            choices: [
                "By maintaining a healthy lifestyle and advocating for better healthcare policies",
                "By ignoring vaccination programs",
                "By consuming unhealthy food regularly",
                "By avoiding exercise"
            ],
            correct: 0
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        choicesElement.innerHTML = "";

        currentQuestion.choices.forEach((choice, index) => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.classList.add("choice-btn");
            button.addEventListener("click", () => checkAnswer(index));
            choicesElement.appendChild(button);
        });
    }

    function checkAnswer(selectedIndex) {
        const correctIndex = quizData[currentQuestionIndex].correct;

        if (selectedIndex === correctIndex) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            displayResult();
        }
    }

    function displayResult() {
        quizContainer.style.display = "none";
        resultContainer.style.display = "block";

        let feedbackMessage = "";
        switch (score) {
            case 5:
                feedbackMessage = "You're well-versed in this!";
                break;
            case 4:
                feedbackMessage = "Way to go!";
                break;
            case 3:
                feedbackMessage = "Not bad! You already have some background on this.";
                break;
            case 2:
                feedbackMessage = "Keep going! You'll be able to learn better if you check out SDG 3 on the United Nations website.";
                break;
            default:
                feedbackMessage = "Hey, it's okay! You did your best.";
        }

        resultText.textContent = `You scored ${score} out of ${quizData.length}. ${feedbackMessage}`;
    }

    nextButton.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.style.display = "none";
        quizContainer.style.display = "block";
        loadQuestion();
    });

    loadQuestion();
});
