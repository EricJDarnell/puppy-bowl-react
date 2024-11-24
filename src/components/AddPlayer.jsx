import { useNavigate } from "react-router-dom";
import { addPlayer } from "../API";
import { useState } from "react";
const styles = {
    image: {        
        width: "500px",
        height: "auto",
        borderRadius: "1rem",
      },
    }

export default function AddPlayer() {
  const [goodBoy, setGoodBoy] = useState({});
  const [pupObj, setPupObj] = useState({
    name: "",
    breed: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPupObj((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await addPlayer(pupObj);
    console.log('response: ', await response);
    console.log('response.data.newPlayer: ', await response.data.newPlayer);
    setGoodBoy(await response.data.newPlayer);
  }
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>home</button><br />
      Add A New Player Here
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          {" "}
          Puppy Name
          <input
            type="text"
            name="name"
            value={pupObj.name}
            onChange={handleChange}
          />
        </label> <br />
        <label htmlFor="url">
          Image Url
          <input
            type="text"
            name="imageUrl"
            value={pupObj.imageUrl}
            onChange={handleChange}
          />
        </label> <br />
        <label htmlFor="breed">
          Breed
          <input
            type="text"
            name='breed'
            value={pupObj.breed}
            onChange={handleChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
      <div>{
            (goodBoy.name) && (
              <div>
                <div>Name: {goodBoy.name}</div>
                <div>Breed: {goodBoy.breed}</div>
                <img style={styles.image} src={goodBoy.imageUrl} alt={goodBoy.name} />
              </div>
            )
        }</div>
    </div>
  );
}
