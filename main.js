// create our questions
let questions = [
    {
        id : 1,
        question : "Facehook wants to acquire your core product at 30M.",
        imgSrc : "img/fb.svg",
        choiceA : "Let's all join Facehook!",
        choiceB : "No way! We are better on our own.",
        choiceC : "(negotiation) We deserve more.",

        // odds for the result to be good
        oddsA : 0.2,
        oddsB : 0.2,
        oddsC : 0.9,

        resultA : "You product has very good synergies with Facehook. <br><br> @Valuation + 100M <br> Cash + 30M@ <br> %Morale - 1%",
        // data [valuation, cash, morale]
        dataA : [100, 30, -1],

        resultA_bad : "GAME OVER <br> <br> You are asked to step down as the CEO and you no longer have control over your company. <br> Good thing is that you are now pretty wealthy.",
        dataA_bad: [0, 0, -10],

        resultB : "Facehook's CEO is angry. They created an exact copy of your product. However, customers love your product more. <br><br> @Valuation + 50M <br> Cash + 10M <br> Morale + 3@",
        dataB: [50, -10, 3],

        resultB_bad : "Facehook's CEO is angry. They created an exact copy of your product and made all of their users sign up. <br><br> %Valuation - 50M <br> Cash - 10M% <br> @Morale + 1@",
        dataB_bad: [-50, -10, 1],

        resultC : "The negotiation is successful. <br><br> @Valuation + 100 <br> Cash + 30 <br> Morale + 2@",
        dataC: [100, 30, 2],

        resultC_bad : "The negotiation is unsuccessful. Facehook's CEO is angry. They created an exact copy of your product and made all of their users signed up. <br><br> %Valuation - 20M <br> Morale - 1%",
        dataC_bad: [-20, 0, -1],

    },{
        id : 2,
        question : "SoftTank wants to invest 500M to acquire most of your shares.",
        imgSrc : "img/sb.png",
        choiceA : "Yea! Let's celebrate.",
        choiceB : "No, I need to keep my ownership.",
        choiceC : "null",

        // odds for the result to be good
        oddsA : 0.7,
        oddsB : 0.3,
        oddsC : 0.9,

        resultA : "Your startup grew significantly with this extra cash. <br><br> @Valuation + 800M <br> Cash + 200M <br> Morale +5@",
        // data [valuation, cash, morale]
        dataA : [800, 200, 5],

        resultA_bad : "SoftTank asked you to quit all the international markets because they also invested in competitor companies in those countries.<br> <br> @Valuation + 100 <br> Cash + 50@ <br> %Morale - 5%",
        dataA_bad: [100, 50, -5],

        resultB : "Things are going well, and your company becomes famous. <br><br> @Valuation + 300M <br> Cash + 50M <br> Morale + 5@",
        dataB: [300, 50, 5],

        resultB_bad : "SoftTank invested your competitor. <br><br> %Valuation - 200M <br> Cash - 10M <br> Morale -3%",
        dataB_bad: [-200, -10, -3],

        resultC : "The negotiation is successful. <br><br> @Valuation + 100 <br> Cash + 30 <br> Morale + 2@",
        dataC: [100, 30, 2],

        resultC_bad : "The negotiation is unsuccessful. Facehook's CEO is angry. They created an exact copy of your product and made all of their users signed up. <br><br> Valuation - 20M <br> Morale - 1",
        dataC_bad: [-20, 0, -1],
    },
    {
        id : 3,
        question : "3Facehook wants to acquire your core product at 30M.",
        imgSrc : "img/fb.svg",
        choiceA : "Let's all join Facehook!",
        choiceB : "No way! We are better on our own.",
        choiceC : "(Unlocked: Negotiation) We deserve more.",

        // odds for the result to be good
        oddsA : 0.2,
        oddsB : 0.2,
        oddsC : 0.9,

        resultA : "You product has very good synergies with Facehook. <br><br> Valuation + 100M <br> Cash + 30M <br> Morale - 1",
        // data [valuation, cash, morale]
        dataA : [100, 30, -1],

        resultA_bad : "GAME OVER <br> <br> You are asked to step down as the CEO and you no longer have control over your company. <br> Good thing is that you are now pretty wealthy.",
        dataA_bad: [0, 0, -10],

        resultB : "Facehook's CEO is angry. They created an exact copy of your product. However, customers love your product more. <br><br> Valuation + 50M <br> Cash + 10M <br> Morale + 3",
        dataB: [50, -10, 3],

        resultB_bad : "Facehook's CEO is angry. They created an exact copy of your product and made all of their users signed up. <br><br> Valuation - 50M <br> Cash - 10M <br> Morale + 1",
        dataB_bad: [-50, -10, 1],

        resultC : "The negotiation is successful. <br><br> Valuation + 100 <br> Cash + 30 <br> Morale + 2",
        dataC: [100, 30, 2],

        resultC_bad : "The negotiation is unsuccessful. Facehook's CEO is angry. They created an exact copy of your product and made all of their users signed up. <br><br> Valuation - 20M <br> Morale - 1",
        dataC_bad: [-20, 0, -1],

    },{
        id : 4,
        question : "4SoftTank wants to invest 500M to acquire most of your shares.",
        imgSrc : "img/sb.png",
        choiceA : "Yea! Let's celebrate.",
        choiceB : "No, I need to keep my ownership.",
        choiceC : "null",

        // odds for the result to be good
        oddsA : 0.7,
        oddsB : 0.3,
        oddsC : 0.9,

        resultA : "Your startup grew significantly with this extra cash. <br><br> Valuation + 800M <br> Cash + 200M <br> Morale +5",
        // data [valuation, cash, morale]
        dataA : [800, 200, 5],

        resultA_bad : "SoftTank asked you to quit all the international markets because they also invested in competitor companies in those countries.<br> <br> Valuation + 100 <br> Cash + 50 <br> Morale - 5",
        dataA_bad: [100, 50, -5],

        resultB : "Things are going well, and your company becomes famous. <br><br> Valuation + 300M <br> Cash + 50M <br> Morale + 5",
        dataB: [300, 50, 5],

        resultB_bad : "SoftTank invested your competitor. <br><br> Valuation - 200M <br> Cash - 10M <br> Morale -3",
        dataB_bad: [-200, -10, -3],

        resultC : "The negotiation is successful. <br><br> Valuation + 100 <br> Cash + 30 <br> Morale + 2",
        dataC: [100, 30, 2],

        resultC_bad : "The negotiation is unsuccessful. Facehook's CEO is angry. They created an exact copy of your product and made all of their users signed up. <br><br> Valuation - 20M <br> Morale - 1",
        dataC_bad: [-20, 0, -1],
    },
    {
        id : 5,
        question : "5Facehook wants to acquire your core product at 30M.",
        imgSrc : "img/fb.svg",
        choiceA : "Let's all join Facehook!",
        choiceB : "No way! We are better on our own.",
        choiceC : "(Unlocked: Negotiation) We deserve more.",

        // odds for the result to be good
        oddsA : 0.2,
        oddsB : 0.2,
        oddsC : 0.9,

        resultA : "You product has very good synergies with Facehook. <br><br> Valuation + 100M <br> Cash + 30M <br> Morale - 1",
        // data [valuation, cash, morale]
        dataA : [100, 30, -1],

        resultA_bad : "GAME OVER <br> <br> You are asked to step down as the CEO and you no longer have control over your company. <br> Good thing is that you are now pretty wealthy.",
        dataA_bad: [0, 0, -10],

        resultB : "Facehook's CEO is angry. They created an exact copy of your product. However, customers love your product more. <br><br> Valuation + 50M <br> Cash + 10M <br> Morale + 3",
        dataB: [50, -10, 3],

        resultB_bad : "Facehook's CEO is angry. They created an exact copy of your product and made all of their users signed up. <br><br> Valuation - 50M <br> Cash - 10M <br> Morale + 1",
        dataB_bad: [-50, -10, 1],

        resultC : "The negotiation is successful. <br><br> Valuation + 100 <br> Cash + 30 <br> Morale + 2",
        dataC: [100, 30, 2],

        resultC_bad : "The negotiation is unsuccessful. Facehook's CEO is angry. They created an exact copy of your product and made all of their users signed up. <br><br> Valuation - 20M <br> Morale - 1",
        dataC_bad: [-20, 0, -1],

    },{
        id : 6,
        question : "6SoftTank wants to invest 500M to acquire most of your shares.",
        imgSrc : "img/sb.png",
        choiceA : "Yea! Let's celebrate.",
        choiceB : "No, I need to keep my ownership.",
        choiceC : "null",

        // odds for the result to be good
        oddsA : 0.7,
        oddsB : 0.3,
        oddsC : 0.9,

        resultA : "Your startup grew significantly with this extra cash. <br><br> Valuation + 800M <br> Cash + 200M <br> Morale +5",
        // data [valuation, cash, morale]
        dataA : [800, 200, 5],

        resultA_bad : "SoftTank asked you to quit all the international markets because they also invested in competitor companies in those countries.<br> <br> Valuation + 100 <br> Cash + 50 <br> Morale - 5",
        dataA_bad: [100, 50, -5],

        resultB : "Things are going well, and your company becomes famous. <br><br> Valuation + 300M <br> Cash + 50M <br> Morale + 5",
        dataB: [300, 50, 5],

        resultB_bad : "SoftTank invested your competitor. <br><br> Valuation - 200M <br> Cash - 10M <br> Morale -3",
        dataB_bad: [-200, -10, -3],

        resultC : "The negotiation is successful. <br><br> Valuation + 100 <br> Cash + 30 <br> Morale + 2",
        dataC: [100, 30, 2],

        resultC_bad : "The negotiation is unsuccessful. Facehook's CEO is angry. They created an exact copy of your product and made all of their users signed up. <br><br> Valuation - 20M <br> Morale - 1",
        dataC_bad: [-20, 0, -1],
    },
    {
        id : 7,
        question : "7Facehook wants to acquire your core product at 30M.",
        imgSrc : "img/fb.svg",
        choiceA : "Let's all join Facehook!",
        choiceB : "No way! We are better on our own.",
        choiceC : "(Unlocked: Negotiation) We deserve more.",

        // odds for the result to be good
        oddsA : 0.2,
        oddsB : 0.2,
        oddsC : 0.9,

        resultA : "You product has very good synergies with Facehook. <br><br> Valuation + 100M <br> Cash + 30M <br> Morale - 1",
        // data [valuation, cash, morale]
        dataA : [100, 30, -1],

        resultA_bad : "GAME OVER <br> <br> You are asked to step down as the CEO and you no longer have control over your company. <br> Good thing is that you are now pretty wealthy.",
        dataA_bad: [0, 0, -10],

        resultB : "Facehook's CEO is angry. They created an exact copy of your product. However, customers love your product more. <br><br> Valuation + 50M <br> Cash + 10M <br> Morale + 3",
        dataB: [50, -10, 3],

        resultB_bad : "Facehook's CEO is angry. They created an exact copy of your product and made all of their users signed up. <br><br> Valuation - 50M <br> Cash - 10M <br> Morale + 1",
        dataB_bad: [-50, -10, 1],

        resultC : "The negotiation is successful. <br><br> Valuation + 100 <br> Cash + 30 <br> Morale + 2",
        dataC: [100, 30, 2],

        resultC_bad : "The negotiation is unsuccessful. Facehook's CEO is angry. They created an exact copy of your product and made all of their users signed up. <br><br> Valuation - 20M <br> Morale - 1",
        dataC_bad: [-20, 0, -1],

    },{
        id : 8,
        question : "8SoftTank wants to invest 500M to acquire most of your shares.",
        imgSrc : "img/sb.png",
        choiceA : "Yea! Let's celebrate.",
        choiceB : "No, I need to keep my ownership.",
        choiceC : "null",

        // odds for the result to be good
        oddsA : 0.7,
        oddsB : 0.3,
        oddsC : 0.9,

        resultA : "Your startup grew significantly with this extra cash. <br><br> Valuation + 800M <br> Cash + 200M <br> Morale +5",
        // data [valuation, cash, morale]
        dataA : [800, 200, 5],

        resultA_bad : "SoftTank asked you to quit all the international markets because they also invested in competitor companies in those countries.<br> <br> Valuation + 100 <br> Cash + 50 <br> Morale - 5",
        dataA_bad: [100, 50, -5],

        resultB : "Things are going well, and your company becomes famous. <br><br> Valuation + 300M <br> Cash + 50M <br> Morale + 5",
        dataB: [300, 50, 5],

        resultB_bad : "SoftTank invested your competitor. <br><br> Valuation - 200M <br> Cash - 10M <br> Morale -3",
        dataB_bad: [-200, -10, -3],

        resultC : "The negotiation is successful. <br><br> Valuation + 100 <br> Cash + 30 <br> Morale + 2",
        dataC: [100, 30, 2],

        resultC_bad : "The negotiation is unsuccessful. Facehook's CEO is angry. They created an exact copy of your product and made all of their users signed up. <br><br> Valuation - 20M <br> Morale - 1",
        dataC_bad: [-20, 0, -1],
    },
];


//employees
let resumes = [
    {
        name: "CTO Raymundo",
        skill: ["coding", "lanaugage"],
    },{
        name: "CTO Zachery",
        skill: "coding",
    },{
        name: "CTO Michael",
        skill: "coding",
    },{
        name: "CMO Njeri",
        skill: ["marketing", "lanaugage"],
    },{
        name: "CMO Christine",
        skill: "marketing",
    },{
        name: "CMO Jake",
        skill: "marketing",
    },{
        name: "CFO Zitong",
        skill: ["finance", "lanaugage"],
    },{
        name: "CFO John",
        skill: "finance",
    },{
        name: "CFO Grant",
        skill: "finance",
    },{
        name: "COO Muhammad",
        skill: ["negotiation", "lanaugage"],
    },{
        name: "COO Ben",
        skill: "negotiation",
    },{
        name: "COO Katie",
        skill: "negotiation",
    },{
        name: "Chief Data Scientist Darya",
        skill: ["lucky", "lanaugage"],
    },{
        name: "Chief Data Scientist Austin",
        skill: "lucky",
    },{
        name: "Chief Data Scientist Matt",
        skill: "lucky",
    }

]



// select all elements
const startButton = document.getElementById("start-button");
const introductionButton = document.getElementById("introduction-button");
const game = document.getElementById("game");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const hidden = document.getElementById("hidden");

const valuationValue = document.getElementById("valuation-value");
const cashValue = document.getElementById("cash-value");
const timeValue = document.getElementById("calendar-week-number");
const moraleValue = document.getElementById("morale-value");

const score = document.getElementById("score");


const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

const resultDescription = document.getElementById("result-description");
const hiringResultDescription = document.getElementById("hiring-result-description");
const modalContinueButton = document.getElementById("modal-button");
const modalContinueButtonHiring = document.getElementById("hiring-modal-button");
const employeeContinueButton = document.getElementById("employee-button");
const seeEmployeesButton = document.getElementById("employees");



// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;

let runningResumeA = 0;
let runningResumeB = runningResumeA + 1;
let runningResumeC = runningResumeB + 2;



// game variables

const VALUATION_DEFAULT = 100;
const CASH_DEFAULT = 10;
const MORALE_DEFAULT = 5;
const TIME_DEFAULT = 1;

let valuation = VALUATION_DEFAULT;
let cash = CASH_DEFAULT;
let morale = MORALE_DEFAULT;
let time = TIME_DEFAULT;

let popularity = 0;

let skill_list = [];
let employee_list = ['Founder'];

// shuffle a given array
function shuffle(l) {
    for(var j, x, i = l.length; i; j = parseInt(Math.random() * i), x = l[--i], l[i] = l[j], l[j] = x);
    return l;
}

let question_index = shuffle([...Array(questions.length).keys()]);
let resume_index = shuffle([...Array(resumes.length).keys()]);
console.log(question_index);
console.log(resume_index);


// random good or bad result

function randomResult(odds){
    var x = Math.random();
    if (x < odds) {
        // good result
        return true;
    } else {
        // bad result
        return false;
    }
}

function randomResultLuck(odds){
    if (skill_list.includes('lucky')){
        randomResult(odds+0.1)
    } else {
        randomResult(odds)
    }
}

// color data change, positive to green, negative to red, speical to blue
function changeTextColor(str){
    // negative
    str=str.replace(/(%)(.*)(%)/g,"<font color='red'>$2</font>");
    // positive
    str=str.replace(/(@)(.*)(@)/g,"<font color='green'>$2</font>");
    // special
    str=str.replace(/(&)(.*)(&)/g,"<font color='blue'>$2</font>");
    return str
}

// color stats board
function changeStatsColor(num){
    if (num > 0){
        return "<font color='green'>" + num + "</font>";
    } else if (num < 0) {
        return "<font color='red'>" + num + "</font>";
    } else {
        return "<font color='orange'>" + num + "</font>";
    }
}

// render starting stats

function renderDefaultStats(){
    valuationValue.innerHTML = VALUATION_DEFAULT;
    cashValue.innerHTML = changeStatsColor(CASH_DEFAULT);
    timeValue.innerHTML = TIME_DEFAULT;
    moraleValue.innerHTML = changeStatsColor(MORALE_DEFAULT);
    employeenumber.innerHTML = employee_list.length;
}

function renderStats(){
    valuationValue.innerHTML = valuation;
    cashValue.innerHTML = changeStatsColor(cash);
    timeValue.innerHTML = time;
    moraleValue.innerHTML = changeStatsColor(morale);
    employeenumber.innerHTML = employee_list.length;
}


// render a question
function renderQuestion(){
    hiringbuttons.style.display = "none";
    choicebuttons.style.display = "block";
    hidden.style.display = "none";
    let q = questions[question_index[runningQuestion]];

    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = changeTextColor("&"+q.choiceC+"&");
    if (choiceC.innerText[0] === "(") {
        let regExp = /\(([^)]+)\)/;
        let matches = regExp.exec(choiceC.innerText);

        if (skill_list.includes(matches[1])) {
            hidden.style.display = "block";
        } else {
            hidden.style.display = "none";
        }

    }
}

function renderHiringQuestion() {
    choicebuttons.style.display = "none";
    hiringbuttons.style.display = "block";

    let r_A = resumes[resume_index[runningResumeA]];
    let r_B = resumes[resume_index[runningResumeB]];
    let r_C = resumes[resume_index[runningResumeC]];

    question.innerHTML = "<p> You got some resumes. Who do you want to hire? </p>";
    qImg.innerHTML = "<img src=img/businessman.jpg>";
    ah.innerHTML = r_A.name;
    bh.innerHTML = r_B.name;
    ch.innerHTML = r_C.name;

}

startButton.addEventListener("click",startIntroduction);

introductionButton.addEventListener("click",startSkill);

modalContinueButton.addEventListener("click",continueGame);

modalContinueButtonHiring.addEventListener("click",continueGameHiring);


employeeContinueButton.addEventListener("click",backToGame);

seeEmployeesButton.addEventListener("click",renderEmployee);

//render a result
function renderResult(choice){
    let q = questions[question_index[runningQuestion]];
    if (choice === 'A') {
        if (randomResultLuck(q.oddsA)){
            resultDescription.innerHTML = changeTextColor(q.resultA);
            valuation += q.dataA[0];
            cash += q.dataA[1];
            morale += q.dataA[2];
        } else {
            resultDescription.innerHTML = changeTextColor(q.resultA_bad);
            valuation += q.dataA_bad[0];
            cash += q.dataA_bad[1];
            morale += q.dataA_bad[2];
        }

    } else if (choice === 'B') {
        if (randomResultLuck(q.oddsB)){
            resultDescription.innerHTML = changeTextColor(q.resultB);
            valuation += q.dataB[0];
            cash += q.dataB[1];
            morale += q.dataB[2];
        } else {
            resultDescription.innerHTML = changeTextColor(q.resultB_bad);
            valuation += q.dataB_bad[0];
            cash += q.dataB_bad[1];
            morale += q.dataB_bad[2];
        }
    } else if (choice === 'C') {
        if (randomResultLuck(q.oddsC)){
            resultDescription.innerHTML = changeTextColor(q.resultC);
            valuation += q.dataC[0];
            cash += q.dataC[1];
            morale += q.dataC[2];
        } else {
            resultDescription.innerHTML = changeTextColor(q.resultC_bad);
            valuation += q.dataC_bad[0];
            cash += q.dataC_bad[1];
            morale += q.dataC_bad[2];
        }
    }
    time++;
    renderStats();
    result.style.display = "block";
}

function renderHiringResult(choice){
    let r_A = resumes[resume_index[runningResumeA]];
    let r_B = resumes[resume_index[runningResumeB]];
    let r_C = resumes[resume_index[runningResumeC]];

    if (choice === 'A') {
        employee_list.push(r_A.name);
        hiringResultDescription.innerHTML = r_A.name + " joined you!";

        if (r_A.skill.length = 1){
            skill_list.push(r_A.skill)
        } else {
            skill_list = skill_list.concat(r_A.skill)
        }
    } else if (choice === 'B') {
        employee_list.push(r_B.name);
        hiringResultDescription.innerHTML = r_B.name + " joined you!";

        if (r_B.skill.length = 1){
            skill_list.push(r_B.skill)
        } else {
            skill_list = skill_list.concat(r_B.skill)
        }
    }  else if (choice === 'C') {
        employee_list.push(r_C.name);
        hiringResultDescription.innerHTML = r_C.name + " joined you!";
        if (r_C.skill.length = 1){
            skill_list.push(r_C.skill)
        } else {
            skill_list = skill_list.concat(r_C.skill)
        }
    }
    renderStats();

    hiringresult.style.display = "block";
}

// start introduction
function startIntroduction(){
    start.style.display = "none";
    introduction.style.display = "block";
}

//start skill
function startSkill(){
    introduction.style.display = "none";
    skill.style.display = "block";
}

// start game
function startGame(choose){
    skill_list.push(choose);
    skill.style.display = "none";
    renderQuestion();
    game.style.display = "block";
    renderDefaultStats();


    // renderProgress();
    // renderCounter();
    // TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

function continueGame(){
    result.style.display = "none";

    popularity = 0.1 + valuation / 1000 * 0.2;

    // next question

    if (resultDescription.innerHTML.slice(0,9) == "GAME OVER"){
        gameOver();
    } else if (runningQuestion == 10){
        gameOver('time');
    } else if (valuation <= 0) {
        gameOver('worthless');
    } else if (cash+valuation <= 0) {
        gameOver('bankrupt');
    } else if (morale < -20) {
        gameOver('quit')
    } else if (randomResult(popularity)){
        //hiring time
        console.log("hiring");
        renderHiringQuestion();
    } else {
        console.log("not hiring");

        runningQuestion++;
        renderQuestion();
    }

}

function continueGameHiring(){
    hiringresult.style.display = "none";
    runningResumeA += 4;
    runningResumeB += 4;
    runningResumeC += 4;
    runningQuestion++;
    renderQuestion();
}

function backToGame(){
    employeelist.style.display = "none";

}


function gameOver(temp){
    game.style.display = "none";
    gameover.style.display = "block";
    score.innerHTML = changeStatsColor(valuation);
    if (temp == 'time') {
        reason.innerHTML = "Congrats on surviving 10 weeks!"
    } else if (temp == 'worthless') {
        reason.innerHTML = "Your startup is worthless."
    } else if (temp == 'bankrupt') {
        reason.innerHTML = "You ran out of cash and bankrupted."
    } else if (temp == 'quit') {
        reason.innerHTML = "No one wants to work for you anymore."
    } else {
        reason.innerHTML = "Sh*t happens."
    }
}

function renderEmployee(){
    employeelist.style.display = "block";
    count = employee_list.length;
    var content = "";
    for(i = 0; i < count; i++) {
        content = content + "<br />" + employee_list[i] + ": " + skill_list[i]
    }
    employeeoverview.innerHTML = content;
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
