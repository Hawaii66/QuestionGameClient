const localhost = "http://localhost:5000/";
const MAIN_URL = localhost;
const GetGameWithPin = MAIN_URL + "PinGame";

function GameWithPin(pin, callback) {
    fetch(GetGameWithPin, {
            method: "POST",
            body: JSON.stringify(pin),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => response.json())
        .then(game => {
            console.log(game);
            callback(game);
        });
}