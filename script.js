const quizData = [
    {
        question: "En que ano foi desenvolvido o javascript?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "2002",
        correct: "b",
    },
    {
        question: "Qual linguagen roda nun navegador web?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Qual o indice inicial de um Array?",
        a: "Indice [0]",
        b: "Indice [1]",
        c: "Indice [2]",
        d: "Indice [3]",
        correct: "a",
    },
    {
        question: "Qual as tres formas de declara uma variavel?",
        a: "var, let, const",
        b: "var, let, script",
        c: "let, const, function",
        d: "NaN, const, var",
        correct: "a",
    },
    {
        question: "Quais os tipos mais comun de dados em javascript?",
        a:"numero, letra, sinais",
        b:"algoritimo, aritimetica, numeros",
        c:"undefined, NaN, Null",
        d:"string, nunber, boolean",
        correct: "d",
    },
    {
        question: "Quais os  tipos de Escopo em javascript?",
        a:"Escopo de tipo, e nome",
        b:"Escopo de numero, e letras",
        c:"Escopo de variaveis, e funçoêns",
        d:"Escopo global, e Local",
        correct: "d",
    },
    {
        question: "Qual e o operador de igualdade em javascript?",
        a:"=",
        b:"==",
        c:"===",
        d:"!==",
        correct: "b",
    },
    {
        question: "Qual propriedade nativa do JS e usado para percorrer todos elementos de um Array",
        a:".length",
        b:".map",
        c:".filter",
        d:".every",
        correct: "a",
    },
    {
        question: "Qual as formas de declara uma estruturas condicional em javascript?",
        a:"while, e for while",
        b:"if, else e switch",
        c:"for, e switch",
        d:"if, e case",
        correct: "b",
    },
    {
        question: "Quais as formas de declara uma estrutura de Loop em javascript?",
        a:"switch, case, breack",
        b:"for, if, break",
        c:"while, e break",
        d:"for, while, do...while ",
        correct: "d",
    },
   
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Você acertol ${score} de ${quizData.length} questoêns </h2>

                <button onclick="location.reload()">Recomesar Questionario</button>
            `
        }
    }else{
        alert('por favor escolha uma opcção!')
    }
})