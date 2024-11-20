import { useState, useEffect } from "react";
import { fetchPlayers } from "../API";
import { fetchSinglePlayer } from "../API";
import SinglePlayer from "./SinglePlayer";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const styles = {
  list: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px', // space between items
    padding: 0,
    listStyle: 'none',
  },
  listItem: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    width: '200px', // adjust the width as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  },
  listItemHover: {
    transform: 'scale(1.05)',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
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
      <SearchBar players={players} />
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
