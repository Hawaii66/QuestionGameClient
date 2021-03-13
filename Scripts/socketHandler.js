//var socket = io.connect("http://localhost:5000/");
var socket = io.connect("https://server-question-game.herokuapp.com/");
console.log(socket);
socket.on("userCount", (data) => {
    console.log(data);
    document.querySelector("#PlayerCount").textContent = "Player Count: " + data.userCount;
    document.querySelector("#PlayerCount").style.display = "none";
});

socket.on("RegeneratePlayerNames", (names) => {
    GenerateServerNames(names);
});

socket.on("ShowGames", (newState) => {
    ShowYouAreIn(false);
    ShowGames(newState);
});

socket.on("ShowGame", (gameIndex) => {
    console.log("Show current game");
    console.log(gameIndex);
    Generate1T2LGame(gameIndex);
    ShowCurrentGame(true);
    ShowGames(false);
});

socket.on("UpdatePlayerLobby", (lobby) => {
    GenerateLobby(lobby);
});

socket.on("Show1T2LQuestion", (data) => {
    console.log(data);
    ShowQuestions(true);
    ShowLeaderboard(false);
    Generate1T2LQuestions(data);
});

socket.on("Show1T2LLeaderboard", (leaderboard, j, wasCorrect) => {
    console.log(leaderboard);
    console.log("-----------");
    console.log(wasCorrect);
    ShowLeaderboard(true);
    ShowQuestions(false);
    Generate1T2LLeaderboard(leaderboard, j, wasCorrect);
});

socket.on("2T1LWinners", (data) => {
    Generate1T2LWinners(data);
});

function CreateServer() {
    SetLoading(true);
    console.log("Create New Server");
    const pin = "1234";
    socket.emit("createServer", pin, (data) => {
        SetLoading(false);
        if (data.succes) {
            document.querySelector(".ServerPin").textContent = data.pin;
            console.log("Succesfully Created Server");
        } else {
            console.log("Error with creating a server");
        }
    });
}

function JoinServer(data, callback) {
    console.log(data);
    socket.emit("joinServer", data, (data) => {
        console.log(data);
        callback(data);
    });
}

function ShowGameWindow(data, callback) {
    console.log(data);
    socket.emit("showGame", data, (data) => {
        console.log(data);
        callback(data);
    });
}