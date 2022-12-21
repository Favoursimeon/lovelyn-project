const quizData = [{
    question: "what is your name?",
    a: "favour",
    b: "yassine",
    c: "hassan",
    d: "moris",
    correct: "b"



}];
const quiz = document.getElementById("quiz")
const answerElemets = document.querySelectorAll("answer");
const questionElements = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElemets.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElemets.forEach(answerElemets); { if (answerElemets.checked) answer = answerElemets.id }
    return answer;
};
const loadQuiz = () => { deselectAnswer(); }
const currentQuizData = quizData[currentQuize]
questionElements.innerText = currentQuizData.question;


a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;
loadQuiz();
submitButton.addEventListener("check", () => { const answer = getSelected(); })
if (answer)
    if (answer === quizData[currentQuiz].correct) score++;
currentQuiz++; {
    if (currentQuiz < quizData.length) loadQuiz();
    else quiz.InnerHtml = - < h2 > you answered $(score) / $(quizData.length) correctly < /h2 > ' <button OnClik = "history.go(0)" > 'Play again</button > '

};
};