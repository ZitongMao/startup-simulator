// create our questions
let questions = [
    {
        id : 1,
        question : "Facebook wants to acquire your core product at DOUBLE the price of your current valuation.",
        imgSrc : "img/fb.svg",
        choiceA : "Let's all join Facebook!",
        choiceB : "No way! We are better on our own.",
        choiceC : "(negotiation) We deserve more.",

        // odds for the result to be good
        oddsA : 0.2,
        oddsB : 0.2,
        oddsC : 0.9,

        resultA : "You product has very good synergies with Facebook. <br><br> @Valuation + 100M <br> Cash + 30M@ <br> %Morale - 1%",
        // data [valuation, cash, morale]
        dataA : [100, 30, -1],

        resultA_bad : "GAME OVER <br> <br> You are asked to step down as the CEO and you no longer have control over your company. <br> Good thing is that you are now pretty wealthy.",
        dataA_bad: [0, 0, -10],

        resultB : "Facebook's CEO is angry. They created an exact copy of your product. However, customers love your product more. <br><br> @Valuation + 50M <br> Cash + 10M <br> Morale + 3@",
        dataB: [50, -10, 3],

        resultB_bad : "Facebook's CEO is angry. They created an exact copy of your product and made all of their users sign up. <br><br> %Valuation - 50M <br> Cash - 10M% <br> @Morale + 1@",
        dataB_bad: [-50, -10, 1],

        resultC : "The negotiation is successful. <br><br> @Valuation + 100 <br> Cash + 30 <br> Morale + 2@",
        dataC: [100, 30, 2],

        resultC_bad : "The negotiation is unsuccessful. Facebook's CEO is angry. They created an exact copy of your product and made all of their users signed up. <br><br> %Valuation - 30M <br> Morale - 1%",
        dataC_bad: [-30, 0, -1],

    },{
        id : 2,
        question : "SoftBank wants to invest 200M to acquire most of your shares.",
        imgSrc : "img/sb.png",
        choiceA : "Yea! Let's celebrate.",
        choiceB : "No, I need to keep my ownership.",
        choiceC : "(negotiation) Emphasize our potential.",

        // odds for the result to be good
        oddsA : 0.7,
        oddsB : 0.3,
        oddsC : 0.8,

        resultA : "Your startup grew significantly with this extra cash. <br><br> @Valuation + 200M <br> Cash + 20M <br> Morale +5@",
        // data [valuation, cash, morale]
        dataA : [200, 20, 5],

        resultA_bad : "SoftBank asked you to quit all the international markets because they also invested in competitor companies in those countries.<br> <br> @Valuation + 100M <br> Cash + 10M@ <br> %Morale - 5%",
        dataA_bad: [100, 10, -5],

        resultB : "Things are going well, and your company becomes famous. <br><br> @Valuation + 300M <br> Cash + 50M <br> Morale + 5@",
        dataB: [100, 20, 5],

        resultB_bad : "SoftBank invested your competitor. <br><br> %Valuation - 200M <br> Cash - 10M <br> Morale -3%",
        dataB_bad: [-200, -10, -3],

        resultC : "Son Masayoshi agreed that you deserve more. <br><br> @Valuation + 250 <br> Cash + 30 <br> Morale + 2@",
        dataC: [250, 30, 2],

        resultC_bad : "Son Masayoshi decided to invest your competitor. <br><br>  %Valuation - 200M <br> Cash - 10M <br> Morale -3%",
        dataC_bad: [-200, -10, -3],
    },
    {
        id : 3,
        question : "You just realized that your potential investor's fund came from Saudi Arabia.",
        imgSrc : "img/arab.jpg",
        choiceA : "We love Saudi!",
        choiceB : "No dirty money in our company.",
        choiceC : "(marketing) Write on Medium about how your business creates positive value for the human kind.",

        // odds for the result to be good
        oddsA : 0.6,
        oddsB : 0.3,
        oddsC : 0.9,

        resultA : "Money that helps us grow is good money. <br><br> @Valuation + 150M <br> Cash + 20M@ <br> %Morale - 3%",
        // data [valuation, cash, morale]
        dataA : [150, 20, -3],

        resultA_bad : "Your employees are really against this idea. <br><br> @Valuation + 30M <br> Cash + 5M@ <br> %Morale - 10%",
        dataA_bad: [30, 5, -10],

        resultB : "You know that you are doing the right thing. <br><br> @Morale + 5@",
        dataB: [0, 0, 5],

        resultB_bad : "Your startup is dying but you know that you are doing the right thing. <br><br> %Valuation - 50M <br> Cash - 10M% <br> @Morale + 3@",
        dataB_bad: [-50, -10, 3],

        resultC : "Dirty money that helps the world is good money.  <br><br> @Valuation + 150 <br> Cash + 20 <br> Morale + 1@",
        dataC: [150, 20, 1],

        resultC_bad : "Customers and employees are still against dirty money. <br><br> %Morale - 10%",
        dataC_bad: [0, 0, -10],

    },{
        id : 4,
        question : "One of your Mexican employees is about to get deported because of the new president's immigration policy.",
        imgSrc : "img/trump.png",
        choiceA : "More jobs for AmErIcAns!",
        choiceB : "Sponsor their H1B visa to help them stay.",
        choiceC : "(language) Ask them to work remotely to promote your product in Mexico.",

        // odds for the result to be good
        oddsA : 0.1,
        oddsB : 0.6,
        oddsC : 0.5,

        resultA : "Your startup is named 'USA's future star' by Mr. President. <br><br> @Valuation + 50M <br> Cash + 5M <br> Morale +3@",
        // data [valuation, cash, morale]
        dataA : [50, 5, 3],

        resultA_bad : "Not much you can do in this situation.<br> <br> %Morale - 5%",
        dataA_bad: [0, 0, -5],

        resultB : "Alejandro got to stay, and your company is now more attractive to immigrants. <br><br> @Valuation + 30M <br> Morale + 3@",
        dataB: [30, 0, 3],

        resultB_bad : "Alejandro got to stay but sponsoring H1B came with a cost. <br><br> %Cash - 10M% <br> @Morale + 1@",
        dataB_bad: [0, -10, 1],

        resultC : "Your product became famous in Mexico! <br><br> @Valuation + 50 <br> Cash + 3 <br> Morale + 2@",
        dataC: [50, 3, 2],

        resultC_bad : "Local competition in Mexico was intense. <br><br> %Morale - 1%",
        dataC_bad: [0, 0, -1],
    },
    {
        id : 5,
        question : "Your website is banned in China.",
        imgSrc : "img/china.png",
        choiceA : "Nevermind.",
        choiceB : "Make a censored version for Chinese government.",
        choiceC : "(language) Compliment President Xi in Chinese.",

        // odds for the result to be good
        oddsA : 0.2,
        oddsB : 0.5,
        oddsC : 0.3,

        resultA : "Freedom matters. <br><br> %Valuation - 10M% <br> @Morale + 1@",
        // data [valuation, cash, morale]
        dataA : [-10, 0, +1],

        resultA_bad : "Losing 1.5B potential customers is okay. <br><br> %Valuation - 50M <br> Morale - 4%",
        dataA_bad: [-50, 0, -4],

        resultB : "Chinese people love the censored product! <br><br> @Valuation + 150M <br> Cash + 20M <br> Morale + 3@",
        dataB: [150, +20, 3],

        resultB_bad : "Several employees left your company for not agreeing with this. <br><br> @Valuation + 100M <br> Cash + 10M@ <br> %Morale - 5%",
        dataB_bad: [+100, +10, -5],

        resultC : "Nothing's changed but Chinese people have noticed your company. <br><br> @Valuation + 100M <br> Cash + 10M <br> Morale + 2@",
        dataC: [100, 10, 2],

        resultC_bad : "Nothing's changed really. Your website is still banned. <br><br> %Valuation - 50M <br> Morale - 4%",
        dataC_bad: [-50, 0, -4],

    },{
        id : 6,
        question : "Your co-founder suggests you to issue cryptocurrencies to raise money.",
        imgSrc : "img/bitcoin.png",
        choiceA : "UnicornCoin will make us rich!",
        choiceB : "Cryptocurrency is a scam.",
        choiceC : "(coding) Utilize blockchain without issuing cryptocurrencies.",

        // odds for the result to be good
        oddsA : 0.2,
        oddsB : 0.7,
        oddsC : 0.7,

        resultA : "Where did all these free money come from? <br><br> @Valuation + 200M <br> Cash + 20M <br> Morale +5@",
        // data [valuation, cash, morale]
        dataA : [200, 20, 5],

        resultA_bad : "GAME OVER <br> <br>Your co-founder took the money raised and disappeared. <br> You have to declare bankruptcy to pay the debt.",
        dataA_bad: [-1000, -200, -10],

        resultB : "Yea. <br><br> @Morale + 3@",
        dataB: [0, 0, 3],

        resultB_bad : "Your co-founder left the company in disagreement. <br><br> %Valuation - 100M <br> Morale -3%",
        dataB_bad: [-100, 0, -3],

        resultC : "VC investors love the word blockchain! <br><br> @Valuation + 100M <br> Cash + 10M <br> Morale + 2@",
        dataC: [100, 10, 2],

        resultC_bad : "Your engineers focused too much on blockchain and your main product is now incompetent. <br><br> %Valuation - 100M <br> Morale - 2%",
        dataC_bad: [-100, 0, -2],
    },
    {
        id : 7,
        question : "UK quit the EU. (Brexit)",
        imgSrc : "img/uk.png",
        choiceA : "Okay, but aren't we Americans?",
        choiceB : "Panicking.",
        choiceC : "(finance) Hedge Pound Sterling.",

        // odds for the result to be good
        oddsA : 0.5,
        oddsB : 0.3,
        oddsC : 0.7,

        resultA : "USA! USA! <br><br> @Morale + 1@",
        // data [valuation, cash, morale]
        dataA : [0, 0, +1],

        resultA_bad : "Stock markets in the US collapsed. <br><br> %Valuation - 50M <br> Cash - 10M <br> Morale - 3%",
        dataA_bad: [-50, -10, -3],

        resultB : "Keep calm and carry on. <br><br> %Morale -1%",
        dataB: [0, 0, -1],

        resultB_bad : "Stock markets in the US collapsed anyway.<br><br> %Valuation - 50M <br> Cash - 10M <br> Morale - 1%",
        dataB_bad: [-50, -10, -1],

        resultC : "MBA degree worked. <br><br> @Valuation + 10M <br>Cash + 5M <br> Morale + 2@",
        dataC: [10, 5, 2],

        resultC_bad : "Getting ready definitely helped. <br><br> %Valuation - 10M <br> Cash - 3M% <br> @Morale + 1@",
        dataC_bad: [-10, -3, 1],

    },
    {
        id : 8,
        question : "Trump started a trade war against China.",
        imgSrc : "img/tradewar.jpg",
        choiceA : "Switch to domestic suppliers.",
        choiceB : "Call your Chinese investors.",
        choiceC : "(finance) Seek investment opportunities in China.",

        // odds for the result to be good
        oddsA : 0.1,
        oddsB : 0.1,
        oddsC : 0.7,

        resultA : "Domestic suppliers are much more expensive but you feel good supporting USA! <br><br> %Valuation - 100M <br> Cash - 20M% <br> @Morale + 5@",
        // data [valuation, cash, morale]
        dataA : [-100, -20, 5],

        resultA_bad : "Domestic suppliers are much more expensive. <br><br> %Valuation - 100M <br> Cash - 20M%",
        dataA_bad: [-100, -20, 0],

        resultB : "Your Chinese investors had to cancel a planned investment but they offered other ways to help. <br><br> %Valuation - 10M <br> Cash - 2M% <br> @Morale + 3@",
        dataB: [-10, -2, 3],

        resultB_bad : "Your Chinese investors had to cancel a planned investment. <br><br> %Valuation - 100M <br> Cash - 20M <br> Morale - 3%",
        dataB_bad: [-100, -20, -3],

        resultC : "Chinese government is surprisingly open to foreign investment during the trade war. <br><br> @Valuation + 100M <br> Morale + 3@",
        dataC: [100, 0, 3],

        resultC_bad : "Chinese government is surprisingly open to foreign investment during the trade war but the environment is very competitive.",
        dataC_bad: [0, 0, 0],

    },{
        id : 9,
        question : "AWS is down, so is half of the internet world.",
        imgSrc : "img/amazon.png",
        choiceA : "Give everyone a day off.",
        choiceB : "Sue Amazon.",
        choiceC : "(marketing) Communicate what happened to customers.",

        // odds for the result to be good
        oddsA : 0.3,
        oddsB : 0,
        oddsC : 0.8,

        resultA : "Long live AWS! <br><br> @Morale + 2@",
        // data [valuation, cash, morale]
        dataA : [0, 0, 2],

        resultA_bad : "Customers were left in confusion and they could not reach your team. <br><br> %Valuation - 50M <br> Morale - 3%",
        dataA_bad: [-50, 0, -3],

        resultB : "Amazon decided to give you some credits for future use. <br><br> @Cash + 3M <br> Morale + 3@",
        dataB: [0, 3, 3],

        resultB_bad : "You are wasting your time. AWS already guaranteed 99.9 percent uptime. <br><br> %Valuation - 50M <br> Cash - 5M <br> Morale - 3%",
        dataB_bad: [-50, -5, -3],

        resultC : "You were able to serve your customers through phone. <br><br> @Valuation + 10M <br> Cash + 2M <br> Morale + 2@",
        dataC: [10, 2, 2],

        resultC_bad : "Customers blamed you instead of AWS. <br><br> %Valuation - 10M <br> Morale - 4%",
        dataC_bad: [-10, 0, -4],

    },{
        id : 10,
        question : "It's time to hire some software engineers.",
        imgSrc : "img/programmer.jpg",
        choiceA : "Ask for 8+ years of Swift experience.",
        choiceB : "Ask for CS degrees from prestigious colleges.",
        choiceC : "(coding) Test their coding skills.",

        // odds for the result to be good
        oddsA : 0.2,
        oddsB : 0.5,
        oddsC : 0.7,

        resultA : "Clearly Swift is a language that came out 4 years ago but you got some experienced engineers. <br><br> @Valuation + 150M <br> Morale +5@",
        // data [valuation, cash, morale]
        dataA : [150, 0, 5],

        resultA_bad : "Clearly Swift is a language that came out 4 years ago. Your company becomes a joke to engineers. <br> <br> %Valuation - 150M <br> Cash - 5M <br> Morale - 5%",
        dataA_bad: [-150, -5, -5],

        resultB : "You got some of these talents but had to pay them extra salary. <br><br> @Valuation + 100M@ <br> %Cash - 15M%",
        dataB: [100, -30, 0],

        resultB_bad : "Most of these new grads prefer to go to Google and Facebook. %<br><br> Cash - 10M <br> Morale -5%",
        dataB_bad: [0, -10, -5],

        resultC : "You understand that hiring good engineers is so important for a startup. <br><br> @Valuation + 150M <br> Morale + 3@",
        dataC: [150, 0, 3],

        resultC_bad : "These applicants spent months reading 'Cracking the coding interview' but could not work on actual projects. <br><br>  %Valuation - 50M <br> Cash - 10M <br> Morale -3%",
        dataC_bad: [-50, -10, -3],
    }
];


//employees
let resumes = [
    {
        name: "CTO Raymundo",
        skill: ["coding", "language"],
    },{
        name: "CTO Zachery",
        skill: "coding",
    },{
        name: "CTO Michael",
        skill: "coding",
    },{
        name: "CMO Njeri",
        skill: ["marketing", "language"],
    },{
        name: "CMO Christine",
        skill: "marketing",
    },{
        name: "CMO Jake",
        skill: "marketing",
    },{
        name: "CFO Zitong",
        skill: ["finance", "language"],
    },{
        name: "CFO John",
        skill: "finance",
    },{
        name: "CFO Grant",
        skill: "finance",
    },{
        name: "COO Muhammad",
        skill: ["negotiation", "language"],
    },{
        name: "COO Ben",
        skill: "negotiation",
    },{
        name: "COO Katie",
        skill: "negotiation",
    },{
        name: "Chief Data Scientist Darya",
        skill: ["lucky", "language"],
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
const restartButton = document.getElementById("restart-button");
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

const leaderButton = document.getElementById("start-leader");
const aboutButton = document.getElementById("start-about");
const shareButton = document.getElementById("start-share");




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
    if (skill_list.includes('lucky')) {
        return randomResult(odds+0.1+morale/100);
    } else {
        return randomResult(odds+morale/100);
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

restartButton.addEventListener("click",restartGame);


modalContinueButton.addEventListener("click",continueGame);

modalContinueButtonHiring.addEventListener("click",continueGameHiring);


employeeContinueButton.addEventListener("click",backToGame);

seeEmployeesButton.addEventListener("click",renderEmployee);

aboutButton.addEventListener("click",renderAbout);
leaderButton.addEventListener("click",renderLeader);
shareButton.addEventListener("click",renderShare);


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
        skill_list = skill_list.concat(r_A.skill)
    } else if (choice === 'B') {
        employee_list.push(r_B.name);
        hiringResultDescription.innerHTML = r_B.name + " joined you!";
        skill_list = skill_list.concat(r_B.skill)
        }  else if (choice === 'C') {
        employee_list.push(r_C.name);
        hiringResultDescription.innerHTML = r_C.name + " joined you!";
        skill_list = skill_list.concat(r_C.skill)

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

function restartGame(){
    gameover.style.display = "none";
    start.style.display = "block";
    valuation = VALUATION_DEFAULT;
    cash = CASH_DEFAULT;
    morale = MORALE_DEFAULT;
    time = TIME_DEFAULT;

    popularity = 0;

    skill_list = [];
    employee_list = ['Founder'];

    runningQuestion = 0;
    count = 0;
    runningResumeA = 0;
    runningResumeB = runningResumeA + 1;
    runningResumeC = runningResumeB + 2;
    question_index = shuffle([...Array(questions.length).keys()]);
    resume_index = shuffle([...Array(resumes.length).keys()]);
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

    popularity = 0.15 + valuation / 1000 * 0.5;

    // next question

    if (resultDescription.innerHTML.slice(0,9) == "GAME OVER"){
        gameOver();
    } else if (runningQuestion == 9){
        valuation += 1000;
        gameOver('time');
    } else if (valuation <= 0) {
        gameOver('worthless');
    } else if (cash*10+valuation <= 0) {
        gameOver('bankrupt');
    } else if (morale < -20) {
        gameOver('quit')
    } else if (randomResult(popularity) && cash > 10){
        //hiring time
        renderHiringQuestion();
    } else {
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
        reason.innerHTML = "Congrats on surviving 10 weeks!";
    } else if (temp == 'worthless') {
        reason.innerHTML = "Your startup is worthless.";
    } else if (temp == 'bankrupt') {
        reason.innerHTML = "You ran out of cash and bankrupted.";
    } else if (temp == 'quit') {
        reason.innerHTML = "No one wants to work for you anymore.";
    } else {
        reason.innerHTML = "Sh*t happens.";
    }
}



function renderEmployee(){
    employeelist.style.display = "block";
    var count = employee_list.length;
    var pool = resumes.length;
    var content = "";
    for (i = 0; i < count; i++) {
        var current_skill = skill_list[0];
        for (j = 0; j < pool; j++) {
            if (employee_list[i] == resumes[j].name){
                current_skill = resumes[j].skill.toString();
            }
        }
        content = content + "<br />" + employee_list[i] + ": " + current_skill;
    }
    employeeoverview.innerHTML = content;
}

function renderAbout(){
    about.style.display = "block";
}
function hideAbout(){
    about.style.display = "none";
}

function renderShare(){
    share.style.display = "block";
}
function hideShare(){
    share.style.display = "none";
}

function renderLeader(){
    leader.style.display = "block";
}
function hideLeader(){
    leader.style.display = "none";
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}
