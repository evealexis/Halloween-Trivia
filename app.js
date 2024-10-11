const startBtn = document.getElementById("start");
const quizArea = document.getElementById("quiz");
const results = document.getElementById("results");
const questionArea = document.getElementById("question");
const answerArea = document.getElementById("answers");
const tryAgainBtn = document.getElementById("try-again");

// When the start button is clicked, it is hidden and quiz div is populated

let currentQuestion = 0;
let score = 0;


startBtn.addEventListener("click", () => {
    quizArea.style.display = "block"; 
    startBtn.style.display = "none"; 
    questionArea.style.display = "block"; 
    answerArea.style.display = "block";  
    buildQuiz();
});

// Shows quiz
function buildQuiz(){
    const question = quizQuestions[currentQuestion];
    questionArea.innerText = question.question;

    // clears previous answers
    answerArea.innerHTML = "";

    // convert asnwers object into an array
    const answersArray = Object.values(question.answers);

    answersArray.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        answerArea.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    // Select clicked button
    const selectedButton = e.target;
    // Grab text of clicked button
    const selectedAnswer = selectedButton.innerText;

    // Grab current question
    const currentQ = quizQuestions[currentQuestion];
    // grabs correct answer
    const correctAnswer = currentQ.correctAnswer;

    // Compare the user selection with the correct answer key
    if(selectedAnswer === currentQ.answers[correctAnswer]){
        score++
    }

    // Move on to the next question
    currentQuestion++;


    if (currentQuestion < quizQuestions.length){
        buildQuiz();
    } else {
        showResults()
    }
}


// Results
function showResults(){
    questionArea.style.display = "none";
    answerArea.style.display = "none";
    results.innerHTML = ` <h1>Well done for completing the Quiz!</h1> <p>Your score is ${score}/${quizQuestions.length}</p>`;
    tryAgainBtn.style.display = "block";
}

function tryAgain(){
    currentQuestion = 0;
    score = 0;
    results.innerHTML = "";
    tryAgainBtn.style.display = "none";
    startBtn.style.display = "block";
    quizArea.style.display = "none"
    buildQuiz();
}

tryAgainBtn.addEventListener("click", () => {
    tryAgain()
});




// Quiz questions:
const quizQuestions = [
    {
        "question": "1. What root vegetable was traditionally used to carve Jack-O-Lanterns?",
        answers: {
            "A": "Pumpkin",
            "B": "Turnip",
            "C": "Sweet Potato",
            "D": "Carrot"
        },
        correctAnswer : "B"
    },
    {
        "question": "2. Transylvania is commonly associated with Dracula. Where is this region located?",
        answers: {
            "A": "Scotland",
            "B": "Bulgaria",
            "C": "Wales",
            "D": "Romania",    
        },
        correctAnswer : "D"
    },
    {
        "question": "3. What iconic accessory did Michael Jackson wear in the Thriller music video?",
        answers: {
            "A": "A single white glove",
            "B": "A red leather jacket",
            "C": "A black fedora",
            "D": "A Moonwalking Shoe",
        },
        correctAnswer: "B"
    },
    {
        "question": "4. What date is Halloween celebrated",        
        answers: {
            "A": "October 31",
            "B": "November 1",
            "C": "October 30",
            "D": "October 29",
        },
        correctAnswer: "A"
    },
    {
        "question": "5. In which country did the tradition of trick-or-treating originate?",
        answers: {
            "A": "Ireland",
            "B": "United States",
            "C": "Mexico",
            "D": "Canada",            
        },
        correctAnswer: "A"
    },
    {
        "question": "6. What do people typically wear on Halloween to ward off evil spirits?",
        answers: {
            "A": "Capes",
            "B": "Garlic",
            "C": "Silver Jewellery",
            "D": "Masks",            
        },
        correctAnswer: "D"
    },
    {
        "question": "7. Which ancient Roman festival is believed to have influenced Halloween?",
        answers: {
            "A": "Saturnalia",
            "B": "Lupercalia",
            "C": "Feralia",
            "D": "Ides of March",
        },
        correctAnswer: "C"
    },
    {
        "question": "8. Which classic horror novel was written by Mary Shelley? ",
        answers: {
            "A": "Dracula",
            "B": "The Haunting of Hill House ",
            "C": "The Tell-Tale Heart",
            "D": "Frankenstein",            
        },
        correctAnswer: "D"
    }
]