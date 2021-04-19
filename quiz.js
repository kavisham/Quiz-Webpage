const arr = [
    {
        question:"1. Which type of JavaScript language is ",
        a:"Object-Oriented",
        b:"Object-Based",
        c:"Assembly-language",
        d:"High-level",
        correct:"b"
    },
    {
        question:"2. The \"function\" and \" var\" are known as:",
        a:"Keywords",
        b:"Data Types",
        c:"Declaration statements",
        d:"Prototype",
        correct:"c"
    },
    {
        question:"3. Most used language in 2020",
        a:"Python",
        b:"Java",
        c:"HTML",
        d:"C++",
        correct:"a"
    },
    {
        question:"What is the age of kavisha ",
        a:"30",
        b:"19",
        c:"24",
        d:"20",
        correct:"d"
    },
    {
        question:"President of US",
        a:"Donald Trumph",
        b:"Ram Nath Kovind",
        c:"Dr. A.P.J. Abdul Kalam ",
        d:"None",
        correct:"a"
    }
];
const quiz=document.getElementById("quiz");
const answerEle=document.querySelectorAll(".answer");
const question1=document.getElementById('questionn');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');

let currentQuiz=0;
let score=0;


loadQuiz();

function loadQuiz()
{
    deselect();
    const currentQuizData = arr[currentQuiz];

    question1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

 
}

function getSelected()
{
    

    let answer = undefined;

    answerEle.forEach((answerEls) => {
        if(answerEls.checked)
        {
            answer = answerEls.id;
        }
    });
    return answer;
}

function deselect()
{
    answerEle.forEach((answerEls) => {
        answerEls.checked = false;
});
}

submitBtn.addEventListener('click',() =>
{
    const answer = getSelected();

    console.log(answer);

    if(answer)
    {
        if(answer === arr[currentQuiz].correct)
        {
            score++;
        }
    
        currentQuiz++;
        if(currentQuiz < arr.length)
        {
            loadQuiz();
        }
        else{
           quiz.innerHTML = `<h1> You answered correctly ${score}/${arr.length} questions</h1> 
           <button onclick="location.reload()">Reload</button>  `;
        }
    }

});