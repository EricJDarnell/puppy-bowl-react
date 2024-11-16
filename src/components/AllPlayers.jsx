import { useState, useEffect } from "react";
import { fetchPlayers } from "../API";
import { fetchSinglePlayer } from "../API";
import SinglePlayer from "./SinglePlayer";
import { useNavigate } from "react-router-dom";

const styles = {
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  listItem: {
    padding: "10px",
    border: "3px solid #ccc",
    marginBottom: "10px",
    borderRadius: "1rem",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  image: {
    width: "500px",
    height: "auto",
    borderRadius: "1rem",
  },
};

export default function AllPlayers({ puppyId, setPuppyId }) {
  const navigate = useNavigate();
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const allPlayers = await fetchPlayers();
      setPlayers(allPlayers);
    }
    fetchData();
  }, []);

  console.log("players: ", players);
  return (
    <div>
      <h2>All Players</h2>
      <ul style={styles.list}>
        {players.length ? (
          <div>
            {players.map((pup, idx) => {
              return (
                <li
                  id={pup.id}
                  key={idx}
                  style={styles.listItem}
                  onClick={(e) => {
                    setPuppyId(pup.id);
                    navigate(`/puppy`);
                  }}
                >
                  <div>{pup.name}</div>
                  <img style={styles.image} src={pup.imageUrl} alt={pup.name} />
                  <div>{pup.breed}</div>
                </li>
              );
            })}
          </div>
        ) : (
          <div>no players found</div>
        )}
      </ul>
    </div>
  );
}
