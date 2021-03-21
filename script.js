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
    question: "How is document type initialized in HTML5.?",
    a: "</DOCTYPE HTML>",
    b: "`<`DOCTYPE`>`",
    c: "`<!`DOCTYPE HTML`>`",
    d: "`</DOCTYPE html`>`",
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
    c: "' this is a comment",
    d: "// this is a comment",
    answer: "B",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    a: "The <head> section",
    b: "The <body> section",
    c: "Both the <head> section and the <body> section are correct  ",
    d: "At the end of the page after <HTML> tag",
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

function renderQuestion() {
  test = get("test");
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
  if (choice == questions[pos].answer) {
    correct++;
  }
  pos++;
  renderQuestion();
}

window.addEventListener("load", renderQuestion);
