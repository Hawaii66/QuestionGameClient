const form = document.querySelector("#LoginGame");

SetLoading(false);
ShowGames(false);
ShowCurrentGame(false);
ShowQuestions(false);
ShowLeaderboard(false);
ShowYouAreIn(false);
ShowLobby(false);
ShowWaitForOtherPlayers(false);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    SetLoading(true);
    EnterGame();
});

function EnterGame() {
    const formData = new FormData(form);
    const pin = formData.get("KahootPin");
    const name = formData.get("KahootName");
    console.log(pin);

    const toSend = {
        pin,
        name
    }
    JoinServer(toSend, (data => {
        SetLoading(false);
        if (data === false) {
            console.log("Failed to log in");
        } else {
            console.log("Loged in");
            ShowYouAreIn(true);
            ShowLogin(false);
        }
    }));
}

function GenerateServerNames(data) {
    const parent = document.querySelector(".PlayersInServer");
    parent.innerHTML = ""; // Clear list of players
    const names = data;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const h3 = document.createElement("h3");
        h3.textContent = name.toString();
        parent.appendChild(h3);
    }

    parent.style.display = "none";
}