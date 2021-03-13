let wasCorrectOnPrevious = false;

function Generate1T2LQuestions(data) {
    const questions = data.questions;
    const name = data.name.name;
    ShowLobby(false);

    const questionParent = document.querySelector(".Questions");
    questionParent.innerHTML = "";

    const d1 = document.createElement("div");
    const d2 = document.createElement("div");
    const d3 = document.createElement("div");
    const h1 = document.createElement("h1");
    const h21 = document.createElement("h2");
    const h22 = document.createElement("h2");
    const h23 = document.createElement("h2");
    const p = document.createElement("p");
    const b1 = document.createElement("button");
    const b2 = document.createElement("button");
    const b3 = document.createElement("button");

    h1.textContent = name.toString();
    p.textContent = "Select the one you think is the truth";

    b1.textContent = "The truth?"
    d1.onclick = function() {
        Answer1T2L(0);
    }
    b2.textContent = "The truth?"
    d2.onclick = function() {
        Answer1T2L(1);
    }
    b3.textContent = "The truth?"
    d3.onclick = function() {
        Answer1T2L(2);
    }

    d1.className = "Game1T2LQuestion";
    d2.className = "Game1T2LQuestion";
    d3.className = "Game1T2LQuestion";

    d1.appendChild(h21);
    //d1.appendChild(b1);

    d2.appendChild(h22);
    //d2.appendChild(b2);

    d3.appendChild(h23);
    //d3.appendChild(b3);

    questionParent.appendChild(h1);
    questionParent.appendChild(d1);
    questionParent.appendChild(d2);
    questionParent.appendChild(d3);
    questionParent.appendChild(p);

    console.log(questions.t1);

    h21.textContent = questions.t.toString();
    h22.textContent = questions.l1.toString();
    h23.textContent = questions.l2.toString();


}

function Generate1T2LLeaderboard(leaderboard, j, wasCorrect) {
    const leaderboardParent = document.querySelector(".Leaderboard")
    leaderboardParent.innerHTML = "";
    ShowWaitForOtherPlayers(false);

    const h1 = document.createElement("h1");
    if (wasCorrectOnPrevious === true) {
        h1.textContent = "Correct";
        h1.style.color = "#4cd137";
        h1.className = "ChoiseAnswerText";
    } else {
        h1.textContent = "Wrong";
        h1.style.color = "#c0392b";
        h1.className = "ChoiseAnswerText";
    }

    leaderboardParent.appendChild(h1);

    for (let i = 0; i < leaderboard.length; i++) {
        const element = leaderboard[i];
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const h4 = document.createElement("h4");


        h3.textContent = element.name.name.toString();
        h4.textContent = element.score.toString();

        div.className = "LeaderboardPlace"

        div.appendChild(h3);
        div.appendChild(h4);
        leaderboardParent.appendChild(div);

        if (i === j) {
            /*const b = document.createElement("button");
            b.textContent = "Next Question";
            b.onclick = function() {
                ReadyForNextQuestion1T2L();
            }
            leaderboardParent.appendChild(b);*/
            div.style.backgroundColor = "#2980b9";
            h3.style.backgroundColor = "#2980b9";
            h4.style.backgroundColor = "#2980b9";
        }

    }

    const b = document.createElement("button");
    b.textContent = "Next Question";
    b.onclick = function() {
        ReadyForNextQuestion1T2L(b);
    }
    leaderboardParent.appendChild(b);
}

function Generate1T2LWinners(data) {
    ShowQuestions(false);
    ShowLeaderboard(false);
    ShowWaitForOtherPlayers(false);
    const winners = data.winners;
    const wasCorrect = data.correct;
    console.log(winners);
    const winnerParent = document.querySelector(".Winners");
    winnerParent.innerHTML = "";

    if (winners.length === 1) {
        const h1W = document.createElement("h1");
        h1W.textContent = "Winner:";
        winnerParent.appendChild(h1W);
    } else {
        const h1W = document.createElement("h1");
        h1W.textContent = "Winners:";
        winnerParent.appendChild(h1W);
    }

    for (let i = 0; i < winners.length; i++) {
        const element = winners[i];
        const h2 = document.createElement("h2");
        h2.textContent = element.name + ": " + element.score;
        winnerParent.appendChild(h2);
    }

    const b = document.createElement("button");
    b.className = "WinnerReturnBackButton";
    b.textContent = "Home";
    b.onclick = function() {
        location.href = "http://127.0.0.1:5500/index.html";
    }
    winnerParent.appendChild(b);
}

function Generate1T2LGame(currentGameIndex) {
    if (currentGameIndex === 0) {
        ShowYouAreIn(false);

        const form = document.createElement("form");
        const h31 = document.createElement("h3");
        const h32 = document.createElement("h3");
        const h33 = document.createElement("h3");
        const t = document.createElement("textarea");
        const l1 = document.createElement("textarea");
        const l2 = document.createElement("textarea");
        const done = document.createElement("button");

        form.id = "2T1LForm";

        h31.textContent = "Truth"
        h32.textContent = "Lie";
        h33.textContent = "Lie";

        t.name = "2T1LT1"
        t.id = "2T1LT1";
        l1.name = "2T1LL1";
        l1.id = "2T1LL1"
        l2.name = "2T1LL2";
        l2.id = "2T1LL2";

        done.onclick = function(event) {
            event.preventDefault();
            console.log("WHAT");
            const formData = new FormData(document.querySelector("[id='2T1LForm']"));
            const t = formData.get("2T1LT1");
            const l1 = formData.get("2T1LL1");
            const l2 = formData.get("2T1LL2");
            const toSend = {
                t,
                l1,
                l2
            }
            gameParent.querySelector(".Enter1T2LChoises").innerHTML = "";
            DoneWith2T1LChoise(toSend, () => {
                console.log("WHAT");
            });
        }
        done.textContent = "Enter Game"

        form.appendChild(h31);
        form.appendChild(t);
        form.appendChild(h32);
        form.appendChild(l1);
        form.appendChild(h33);
        form.appendChild(l2);
        form.appendChild(done);
        gameParent.querySelector(".Enter1T2LChoises").appendChild(form);
    }
}

function DoneWith2T1LChoise(data, callback) {
    console.log(data);
    ShowLobby(true);
    socket.emit("HasEntered2T1LChoise", data, (data) => {
        console.log("Answer submited");
        GenerateLobby(data);
    });
}

function Answer1T2L(index) {
    console.log(index);
    console.log("-----------------------mmmmmmmmmmmmmmmmmmmmmmmmmm");
    ShowWaitForOtherPlayers(true);
    ShowQuestions(false);
    socket.emit("2T1LSubmitAnswer", index, (data) => {
        console.log("-------------------------");
        console.log(data);
        wasCorrectOnPrevious = data;
    });
}

function ReadyForNextQuestion1T2L(button) {
    button.parentNode.removeChild(button);
    socket.emit("1T2LNextQuestion")
}