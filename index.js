let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let initScore_home = 0
let initScore_away = 0

function home_plusOne() {
    initScore_home += 1
    homeScore.textContent = initScore_home
}

function home_plusTwo() {
    initScore_home += 2
    homeScore.textContent = initScore_home
}

function home_plusThree() {
    initScore_home += 3
    homeScore.textContent = initScore_home
}

function away_plusThree() {
    initScore_away += 3
    awayScore.textContent = initScore_away
}

function away_plusTwo() {
    initScore_away += 2
    awayScore.textContent = initScore_away
}

function away_plusOne() {
    initScore_away += 1
    awayScore.textContent = initScore_away
}

function reset() {
    initScore_home = 0
    initScore_away = 0
    awayScore.textContent = initScore_away
    homeScore.textContent = initScore_home
}