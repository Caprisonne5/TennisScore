
const getPlayersURL = "https://api.jsonstorage.net/v1/json/1ca616a1-12db-4d4c-9283-39df92656db9/cd24ce0e-d2e7-4c2f-97af-62967f2b5b23";
const getMatchesURL = "https://api.jsonstorage.net/v1/json/1ca616a1-12db-4d4c-9283-39df92656db9/3c5be2db-5ecd-417c-9662-be2a1ae6e115";


export async function getPlayers() {
    const response = await fetch(getPlayersURL);

    if (response.ok) {
        const json = await response.json();
        return json;
    } else {
        throw new Error('Failed to fetch data');
    }
}

export async function getMatches() {
    const response = await fetch(getMatchesURL);

    if (response.ok) {
        const json = await response.json();
        return json;
    } else {
        throw new Error('Failed to fetch data');
    }
}

export async function putNewMatch(player1ID, player2ID, winnerID) {
    const response = await fetch("https://api.jsonstorage.net/v1/json/1ca616a1-12db-4d4c-9283-39df92656db9/3c5be2db-5ecd-417c-9662-be2a1ae6e115");
    const existingMatches = await response.json();
    existingMatches.matches.push({[player1ID]: 1, [player2ID]: 2, [winnerID]: 1});
    const putResponse = await fetch("https://api.jsonstorage.net/v1/json/1ca616a1-12db-4d4c-9283-39df92656db9/3c5be2db-5ecd-417c-9662-be2a1ae6e115?apiKey=f92f9165-738c-4ca7-92c8-15667852190a",
        {
            method:"PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(existingMatches)
        })
    if(putResponse.ok){
        return putResponse;
    }else {
        console.log("Fehler beim Senden der Daten:", response.status, response.statusText);
    }
    return;
}


