// pos is position of where the user in the test or which question they're up to
let pos = 0,
  test,
  test_status,
  question,
  choice,
  choices,
  chA,
  chB,
  chC,
  chD,
  correct = 0;

//Setting up a timer
let secondsLeft = 100;

// this is a multidimensional array with 5 inner array elements with 6 elements inside them
let questions = [
  {
    question: "What does HTML stand for?",
    a: "Hyperlinks and Text Markup Language",
    b: "Hyper Text Markup Language",
    c: "Home Tool Markup Language",
    d: "Hypertext Machine Language",
    answer: "B",
  },
  {
    question: "What time does our class start on Tuesday and Thursday?",
    a: "3:30 P.M.",
    b: "1:00 P.M.",
    c: "6:30 P.M.",
    d: "6:00 A.M.",
    answer: "C",
  },
  {
    question: "What does CSS stand for?",
    a: "Colorful Style Sheets",
    b: "Creative Style Sheets",
    c: "Computer Style Sheets",
    d: "Cascading Style Sheets",
    answer: "D",
  },
  {
    question: "Which is the correct CSS syntax?",
    a: "body {color: black;}  ",
    b: "{body;color:black;}",
    c: "body:color=black;",
    d: "{body:color=black;}",
    answer: "A",
  },
  {
    question: "How do you insert a comment in a CSS file?",
    a: "// this is a comment // ",
    b: "/* this is a comment */  ",
    c: "this is a comment",
    d: "// this is a comment",
    answer: "B",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "The head section",
    b: "The body section",
    c: "Both the head section and the body section are correct  ",
    d: "At the end of the page after HTML tag",
    answer: "C",
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    a: "msgBox(`Hello World`);",
    b: "msg('Hello World');",
    c: "alertBox('Hello World');",
    d: "alert('Hello World');  ",
    answer: "ABCD",
  },
  {
    question: "How do you create a function in JavaScript?",
    a: "function myFunction()  ",
    b: "function:myFunction()",
    c: "function = myFunction()",
    d: "Javascript does not have functions",
    answer: "A",
  },
  {
    question: "Who is our class instructor?",
    a: "Sam",
    b: "James",
    c: "Lada",
    d: "Gemini",
    answer: "C",
  },
];

//Using a function is shorter way of calling questions and instaed of using getElementById every single time.
function get(questions) {
  return document.getElementById(questions);
}

function startTimer() {
  let timerEl = document.getElementById("time");
  timerEl.textContent = secondsLeft;
  //console.log(secondsLeft);
  secondsLeft = secondsLeft - 1;
  if (secondsLeft <= 0) {
    clearInterval(startTimer);
  } else {
    setTimeout(startTimer, 1000);
  }
}

function renderQuestion() {
  let startPage = document.getElementById("start-page");
  startPage.style.display = "none";
  test = get("test");
  test.style.display = "block";
  if (pos >= questions.length) {
    test.innerHTML =
      "<h2> You got " +
      correct +
      " of " +
      questions.length +
      " questions correct</h2>";
    get("test-status").innerHTML = "Test completed";
    pos = 0;
    correct = 0;
    return false;
  }

  get("test-status").innerHTML =
    "Question " + (pos + 1) + " of " + questions.length;

  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  chD = questions[pos].d;

  test.innerHTML = "<h3>" + question + "</h3>";

  test.innerHTML +=
    "<label> <input type='radio' name='choices' value='A'> " +
    chA +
    "</label><br>";
  test.innerHTML +=
    "<label> <input type='radio' name='choices' value='B'> " +
    chB +
    "</label><br>";
  test.innerHTML +=
    "<label> <input type='radio' name='choices' value='C'> " +
    chC +
    "</label><br>";
  test.innerHTML +=
    "<label> <input type='radio' name='choices' value='D'> " +
    chD +
    "</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (let i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  if (choice === questions[pos].answer) {
    //console.log(correct);
    correct++;
  }
  pos++;
  renderQuestion();
}

function startPage() {
  renderQuestion();
  startTimer();
}

let startButton = document.getElementById("start-button");

startButton.addEventListener("click", startPage);
// window.addEventListener("load", renderQuestion);
