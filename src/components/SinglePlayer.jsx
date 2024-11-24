import { fetchSinglePlayer } from "../API";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
    image: {        
        width: "500px",
        height: "auto",
        borderRadius: "1rem",
      },
    }

export default function SinglePlayer({ puppyId, setPuppyId }) {
    const [puppy, setPuppy] = useState(null);
    const navigate = useNavigate();

  useEffect(() => {
    async function fetchPuppy(id) {
      const pupperoni = await fetchSinglePlayer(id);
      setPuppy(pupperoni);
    }
    fetchPuppy(puppyId);
  }, []);
  return (
    <>
      <div onClick={(e) => {
        navigate('/'); 
        setPuppyId('');}}> Pupperoni
        {
            puppy && (
              <div>
                <div>Name: {puppy.name}</div>
                <div>Breed: {puppy.breed}</div>
                <img style={styles.image} src={puppy.imageUrl} alt={puppy.name} />
              </div>
            )
        }
      </div>
      
    </>
  );
}
