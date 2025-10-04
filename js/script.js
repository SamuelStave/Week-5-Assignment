// Variables & Conditionals
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');
checkAgeBtn.addEventListener('click', function () {
    let age = Number(ageInput.value);
    if (isNaN(age) || age < 0) {
        ageResult.textContent = "Please enter a valid age.";
    } else if (age >= 18) {
        ageResult.textContent = "You are an adult!";
    } else {
        ageResult.textContent = "You are not an adult yet.";
    }
});

// Functions
function addNumbers(a, b) {
    return a + b;
}
function getGreeting(name = "friend") {
    return "Hello, " + name + "!";
}
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const sumBtn = document.getElementById('sumBtn');
const sumResult = document.getElementById('sumResult');
sumBtn.addEventListener('click', function () {
    let a = Number(num1.value);
    let b = Number(num2.value);
    let result = addNumbers(a, b);
    sumResult.textContent = "Sum: " + result;
});
const greetBtn = document.getElementById('greetBtn');
const greetResult = document.getElementById('greetResult');
greetBtn.addEventListener('click', function () {
    greetResult.textContent = getGreeting("Developer");
});

// Loops
const showNumbersBtn = document.getElementById('showNumbersBtn');
const numbersList = document.getElementById('numbersList');
showNumbersBtn.addEventListener('click', function () {
    numbersList.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        let li = document.createElement('li');
        li.textContent = i;
        numbersList.appendChild(li);
    }
});
const countdownBtn = document.getElementById('countdownBtn');
const countdownResult = document.getElementById('countdownResult');
countdownBtn.addEventListener('click', function () {
    let count = 5;
    let output = "";
    while (count > 0) {
        output += count + " ";
        count--;
    }
    countdownResult.textContent = "Countdown: " + output.trim();
});

// DOM Manipulation
const toggleColorBtn = document.getElementById('toggleColorBtn');
const main = document.querySelector('main');
let colorToggled = false;
toggleColorBtn.addEventListener('click', function () {
    colorToggled = !colorToggled;
    main.style.background = colorToggled ? "#e0f7fa" : "#fff";
});
const addListItemBtn = document.getElementById('addListItemBtn');
const dynamicList = document.getElementById('dynamicList');
let itemCount = 1;
addListItemBtn.addEventListener('click', function () {
    itemCount++;
    let li = document.createElement('li');
    li.textContent = "New item " + itemCount;
    dynamicList.appendChild(li);
});
const changeHeaderBtn = document.getElementById('changeHeaderBtn');
const header = document.querySelector('header h1');
changeHeaderBtn.addEventListener('click', function () {
    header.textContent = "Header Changed!";
});
