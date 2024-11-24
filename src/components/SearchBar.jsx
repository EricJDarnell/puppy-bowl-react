import { useState, useEffect } from "react";
import SinglePlayer from "./SinglePlayer";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ players, setPuppyId, puppyId }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function navigateOnSearch() {
    const pup1 = players.find((pup) => pup.name === search);
    setPuppyId(pup1.id);
    navigate("/puppy");

  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigateOnSearch();
        }}
      >
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
    </>
  );
}
