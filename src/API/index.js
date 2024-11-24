const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2408-FTB-MT-WEB-PT";

export async function fetchPlayers() {
  const response = await fetch(`${API_URL}/players`);
  const data = await response.json();
  return data.data.players;
}

export async function fetchSinglePlayer(playerId) {
  const response = await fetch(`${API_URL}/players/${playerId}`);
  const data = await response.json();
  console.log("data: ", data.data.player);
  return data.data.player;
}

export async function addPlayer(playerObj) {
  try {
    const response = await fetch(`${API_URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerObj),
    });
    const result = await response.json();
    console.log('result: ', result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function putDownPuppy(playerId) {
    try {
        const response = await fetch(`${API_URL}/players/${playerId}`, {
            method: 'DELETE',
        });
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}