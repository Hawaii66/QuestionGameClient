const gameParent = document.querySelector(".CurrentGame");

function ChooseGame(index) {
    let currentGameIndex = -1;
    if (index === 0) {
        currentGameIndex = index;
        const toSend = {
            gameIndex: currentGameIndex
        }
        ShowGameWindow(toSend, (data) => {
            console.log("TES");
        });

    }
}

function GenerateLobby(lobby) {
    console.log(lobby);
    const lobbyParent = document.querySelector(".Lobby");
    lobbyParent.innerHTML = "";
    for (let i = 0; i < lobby.length; i++) {
        const element = lobby[i];
        console.log(element.name);
        const h3 = document.createElement("h3");
        h3.textContent = element.name.name;
        lobbyParent.append(h3);
    }
}