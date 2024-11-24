import { fetchSinglePlayer, putDownPuppy } from "../API";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
    image: {        
        width: "500px",
        height: "auto",
        borderRadius: "1rem",
      },
    button: {
      backgroundColor: "#823329",
      color: "#EADEDA",
      borderRadius: "1rem",
    }
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
      <div> Pupper
        {
            puppy && (
              <div>
                <div>Name: {puppy.name}</div>
                <div>Breed: {puppy.breed}</div>
                <img style={styles.image} src={puppy.imageUrl} alt={puppy.name} />
              </div>
            )
        }
        <button onClick={(e) => {
        navigate('/'); 
        setPuppyId('');}}>Home</button>
        <br />
        <button style={styles.button} onClick={(e) => {
          e.preventDefault()
          putDownPuppy(puppy.id)
          navigate('/');}
          }>Old Yeller Time...</button>
      </div>
      
    </>
  );
}
