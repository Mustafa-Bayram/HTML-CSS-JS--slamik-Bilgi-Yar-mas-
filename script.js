const data = [
  {
    id: 1,
    question: "Aşağıdaki hayvanlardan hangisinin yenmesi haramdır?",
    answers: [
      { answer: "Kuzu", isCorrect: false },
      { answer: "Tavuk", isCorrect: false },
      { answer: "Domuz", isCorrect: true },
      { answer: "Dana", isCorrect: false },
    ],
  },
  {
    id: 2,
    question:
      "Aşağıdaki Sahabe efendilerimizden hangisi cennet ile müjdelenen 10 sahabeden biri değildir?",
    answers: [
      { answer: "Ebu Bekir(ra)", isCorrect: false },
      { answer: "Ebu Ubeyde Bin Cerrah(ra)", isCorrect: false },
      { answer: "Hz. Ömer", isCorrect: false },
      { answer: "Hassan Bin Sabit(ra)", isCorrect: true },
    ],
  },
  {
    id: 3,
    question:
      "Aşağıdaki kişilerden hangisi   yalancı peygamber olarak  ünü yayılan ve  Hz. Vahşinin mızrağı ile öldürülmüş olan kişi kimdir?",
    answers: [
      { answer: "Ebu Leheb", isCorrect: false },
      { answer: "Müseylemetül Kezzab", isCorrect: true },
      { answer: "Ebu Cehil", isCorrect: false },
      { answer: "Firavun", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  total = 0;
  selectedAnswer;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playAgain();
});

const showResult = () => {
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};
const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) => `
    <div class="answer">
            <input type="radio"  name="answer" id=${index} value=${item.isCorrect} />
            <label for="1">${item.answer}</label>
          </div>
    `
    )
    .join("");
  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else alert("Lütfen Bir Cevap Seçin!");
  });
};
showQuestion(qIndex);
submitAnswer();
