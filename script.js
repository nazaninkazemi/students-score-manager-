
let scoreCount = document.getElementById("scoreCount");
let generateBtn = document.getElementById("generateBtn");
let scoreInputs = document.getElementById("scoreInputs");
let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

generateBtn.addEventListener("click", function () {
    let count = Number(scoreCount.value);
    if (scoreCount.value === "" || count < 1 || !Number.isInteger(count)) {
        result.innerHTML = "Please enter a valid number of scores.";
        scoreInputs.innerHTML = "";
        return;
    }
    scoreInputs.innerHTML = "";
    result.innerHTML = "";
    for (let i = 1; i <= count; i++) {
        scoreInputs.innerHTML +=
            '<p><label for="score' + i + '">Score ' + i +
            ':</label> <input type="number" id="score' + i +
            '" min="0" max="100" step="any"></p>';
    }
});

calculateBtn.addEventListener("click", function () {
    let count = Number(scoreCount.value);
    let scores = [];
    let total = 0;
    if (scoreCount.value === "" || count < 1 || !Number.isInteger(count)) {
        result.innerHTML = "Please enter a valid number of scores.";
        return;
    }
    for (let i = 1; i <= count; i++) {
        let scoreInput = document.getElementById("score" + i);

        if (scoreInput === null || scoreInput.value.trim() === "") {
            result.innerHTML = "Please enter all scores.";
            return;
        }
        let score = Number(scoreInput.value);
        if (!Number.isFinite(score) || score < 0 || score > 100) {
            result.innerHTML = "Scores must be between 0 and 100.";
            return;
        }
        scores.push(score);
        total += score;
    }
    let average = total / scores.length;
    let status;
    if (average >= 50) {
        status = "Pass";
    } else {
        status = "Fail";
    }
    result.innerHTML =
        "<h2>Student Results</h2>" +
        "<p>Scores: " + scores.join(", ") + "</p>" +
        "<p>Total: " + total + "</p>" +
        "<p>Average: " + average.toFixed(2) + "</p>" +
        "<p>Result: " + status + "</p>";
});