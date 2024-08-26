const startbutton = document.getElementById('start-btn');
const nextbutton = document.getElementById('next-btn');
const questioncontainerelement = document.getElementById('question-container');
const questionElement = document.getElementById('question-display');
const answerselement = document.getElementById('answer-buttons')
const images = document.getElementById('images')

let shuffledIdentityQuestions, shuffledDevelopmentQuestions, currentQuestionIndex

startbutton.addEventListener('click', startGame)
nextbutton.addEventListener('click', () => {
    currentQuestionIndex++;
    setQuestion();
});

function startGame() {
    startbutton.classList.add('hide');
    questioncontainerelement.classList.remove('hide');
    shuffledIdentityQuestions = questions[0].sort(() => Math.random() - 0.5);
    shuffledDevelopmentQuestions = questions[1].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    console.log(shuffledIdentityQuestions);
    setQuestion();
}

function selectAnswer(e) {
    const selectedAnswer = e.target;
    const correct = selectedAnswer.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerselement.children).forEach(answer => {
        setStatusClass(answer,answer.dataset.correct);
    })
    nextbutton.classList.remove('hide');
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

function resetState() {
    nextbutton.classList.add('hide');
    if(document.body.classList == 'correct') {
        document.body.classList.remove('correct');
    } else {
        document.body.classList.remove('wrong')
    }
    while (answerselement.firstChild) {
        answerselement.removeChild(answerselement.firstChild);
    }
}

function setQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledIdentityQuestions.length) {
        showQuestion(shuffledIdentityQuestions[currentQuestionIndex]);
    } else if (currentQuestionIndex < shuffledIdentityQuestions.length + shuffledDevelopmentQuestions.length) {
        showQuestion(shuffledDevelopmentQuestions[currentQuestionIndex - shuffledIdentityQuestions.length]);
    } 
    else {
        startbutton.classList.remove('hide');
        startbutton.innerText='Restart';
        questioncontainerelement.classList.add('hide');
    }
}

function showimage(imagetoshow) {
    Array.from(images.children).forEach(image => {
        image.classList.add('hide');
    })
    imagetoshow.classList.remove('hide');
}


function showQuestion(question) {
   
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('answer');
        button.innerText = answer.text;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        answerselement.appendChild(button);
        showimage(images.children[question.image]);

        button.addEventListener('click', selectAnswer);
    });
}


const questions = [
    [


        {
            question: "Identify the President",

            answers : [
                {text:"John Mahama", correct:false},
                {text:"Kwame Nkrumah", correct:true},
                {text:"Jerry John Rawlings", correct:false},
                {text:"John Mahama", correct:false},
            ],

            image:0

            
        },

        {
            question: "Identify the President",

            answers : [
                {text:"John Mahama", correct:true},
                {text:"Kwame Nkrumah", correct:false},
                {text:"Jerry John Rawlings", correct:false},
                {text:"John Attah Mills", correct:false},
            ],

            image:1
        },

        {
            question: "Identify the President",

            answers : [
                {text:"John Mahama", correct:false},
                {text:"Kwame Nkrumah", correct:false},
                {text:"Jerry John Rawlings", correct:true},
                {text:"John Attah Mills", correct:false},
            ],

            image:3
        },

        {
            question: "Identify the President",

            answers : [
                {text:"John Mahama", correct:false},
                {text:"Kwame Nkrumah", correct:false},
                {text:"Jerry John Rawlings", correct:false},
                {text:"John Attah Mills", correct:true},
            ],

            image:2
        }
    ],





    [
        {
            question: "Who built the Akosumbo Dam?",

            answers : [
                {text:"John Mahama", correct:false},
                {text:"Kwame Nkrumah", correct:true},
                {text:"Jerry John Rawlings", correct:false},
                {text:"John Mahama", correct:false},
            ],

            image:0
        }, 

        {
            question: "Who built the Pokuase Interchange?",

            answers : [
                {text:"John Mahama", correct:true},
                {text:"Kwame Nkrumah", correct:false},
                {text:"Jerry John Rawlings", correct:false},
                {text:"John Atta Mills", correct:false},
            ],

            image:1
        },

        {
            question: "Who built the DNA laboratory at DNH?",

            answers : [
                {text:"John Mahama", correct:false},
                {text:"Kwame Nkrumah", correct:false},
                {text:"Jerry John Rawlings", correct:false},
                {text:"John Atta Mills", correct:true},
            ],

            image:2
        },


    ]
]
 