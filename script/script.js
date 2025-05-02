// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add active class to current section in navigation
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll(".nav__link");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 300) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }
  });
});


//quiz
const questions = [
  {
    question: "Wat staat CSS voor",
    answers: [
      "Cascading Style Sheets",
      "Computer Styled Sections",
      "Creative Style System",
      "Colorful Style Syntax",
    ],
    correct: 0,
  },
  {
    question: "Wat staat HTML voor",
    answers: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markdown Language",
    ],
    correct: 1,
  },
  {
    question: "In wat voor file schrijf je js?",
    answers: ["index.script", "script.code", "java.exe", "main.js"],
    correct: 3,
  },
  {
    question: "Hoe selecteer je een element via zijn class?",
    answers: [
      ".querySelector",
      ".addEventListener",
      ".class",
      ".ID",
    ],
    correct: 0,
  },
  {
    question: "Wat doet addEventListener",
    answers: [
      "Zet een functie op een target",
      "Zorgt ervoor dat iets klikbaar wordt",
      "Maakt een nieuwe functie aan",
      "Stelt je verjaardag in",
    ],
    correct: 0,
  },
];


const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestionIndex];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer__btn");
    btn.addEventListener("click", () => selectAnswer(index));
    answersEl.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

function selectAnswer(index) {
  const q = questions[currentQuestionIndex];
  const buttons = answersEl.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.style.backgroundColor = "lightgreen";
    else if (i === index) btn.style.backgroundColor = "lightcoral";
  });
  if (index === q.correct) score++;
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.textContent = `You scored ${score} out of ${questions.length}!`;
  answersEl.innerHTML = "";
  nextBtn.textContent = "Restart";
  nextBtn.onclick = () => location.reload();
}

showQuestion();
