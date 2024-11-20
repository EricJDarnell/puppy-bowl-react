import { useState } from "react";

export default function SearchBar({ players }) {
  const [search, setSearch] = useState("");
  const [foundPuppy, setFoundPuppy] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("players: ", players);
    setFoundPuppy(players.find((pup) => pup.name === search));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Find Puppy{" "}
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </label>
        <button>Search</button>
      </form>
      {foundPuppy && <div>{foundPuppy.name}</div>}
    </>
  );
}
