let questions = [
    {
        title: "¿Qué es HTML?",
        answers: [
            {
                title: "No existe!",
                isCorrect: false,
            },
            {
                title: "Lenguaje de programacion",
                isCorrect: false,
            },
            {
                title: "Un lenguaje de marcas",
                isCorrect: true,
            },
            {
                title: "Si",
                isCorrect: false,
            }
        ]
    },
    {
        title: "¿Qué es CSS?",
        answers: [
            {
                title: "No gqer!",
                isCorrect: false,
            },
            {
                title: "Lenguaje de rqe",
                isCorrect: false,
            },
            {
                title: "Un dqwger de marcas",
                isCorrect: true,
            }
        ]
    }
];

let pos = 0;
let isAnswered = false;
let answersCorrect = 0;

function initQuiz() {


    document.getElementById("question").innerHTML = questions[pos].title;

    let buttons = ``

    questions[pos].answers.forEach((answer, index) => {
        buttons += `<button id="btn` + index + `" onclick="checkCorrect(` + index + `)" class="w-full bg-slate-100 text-start p-2 mt-2">` + answer.title + `</button>`
    })

    document.getElementById("answers").innerHTML = buttons
}

function nextQuestion() {
    let cQuestion = pos + 1
    if (questions.length == cQuestion) {
        showResult()
    } else {
        pos++
        isAnswered = false
        initQuiz()
    }
}

function checkCorrect(buttonNum) {
    let idBtn = "btn" + buttonNum

    if (!isAnswered) {
        if (questions[pos].answers[buttonNum].isCorrect) {
            answersCorrect++
            document.getElementById(idBtn).classList.replace("bg-slate-100", "bg-green-500")
        } else {
            document.getElementById(idBtn).classList.replace("bg-slate-100", "bg-red-500")

            let index = questions[pos].answers.findIndex(answer => answer.isCorrect == true)
            let puff = "btn" + index
            document.getElementById(puff).classList.replace("bg-slate-100", "bg-green-500")
        }

        isAnswered = true
    }
}

function showResult() {
    document.getElementById("game").classList.add("hidden")
    document.getElementById("finish").classList.remove("hidden")

    document.getElementById("result").innerHTML = answersCorrect + " de " + questions.length
}

initQuiz()