const loadingGIF = document.querySelector(".Loading");
const loginForm = document.querySelector(".LoginContainer");
const gamesHolder = document.querySelector(".Games");
const currentGame = document.querySelector(".CurrentGame");
const leaderboard = document.querySelector(".Leaderboard");
const questions = document.querySelector(".Questions");
const youAreIn = document.querySelector(".YouAreIn");
const lobby = document.querySelector(".Lobby");
const waitingForOtherAnswers = document.querySelector(".WaitingForOtherAnswers");

function SetLoading(newState) {
    if (newState === true) {
        loadingGIF.style.display = "";
    } else {
        loadingGIF.style.display = "none";
    }
}

function ShowLogin(newState) {
    if (newState === false) {
        loginForm.style.display = "none";
    } else {
        loginForm.style.display = "";
    }
}

function ShowYouAreIn(newState) {
    if (newState === false) {
        youAreIn.style.display = "none";
    } else {
        youAreIn.style.display = "";
    }
}

function ShowLobby(newState) {
    if (newState === false) {
        lobby.style.display = "none";
    } else {
        lobby.style.display = "";
    }
}

function ShowWaitForOtherPlayers(newState) {
    if (newState === false) {
        waitingForOtherAnswers.style.display = "none";
    } else {
        waitingForOtherAnswers.style.display = "";
    }

}

function ShowGames(newState) {
    if (newState === false) {
        gamesHolder.style.display = "none";
    } else {
        gamesHolder.style.display = "";
    }
}

function ShowCurrentGame(newState) {
    if (newState === false) {
        currentGame.style.display = "none";
    } else {
        currentGame.style.display = "";
    }
}

function ShowLeaderboard(newState) {
    if (newState === false) {
        leaderboard.style.display = "none";
    } else {
        leaderboard.style.display = "";
    }
}

function ShowQuestions(newState) {
    if (newState === false) {
        questions.style.display = "none";
    } else {
        questions.style.display = "";
    }
}