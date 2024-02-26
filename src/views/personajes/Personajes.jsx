import { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const obtener = async () => {
      try {
        const response = await axios.get(
          "https://thronesapi.com/api/v2/Characters"
        );
        setPersonajes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    obtener();
  }, []);

  console.log(personajes);

  return (
    <>
      <h1>Personajes Game Of Thrones</h1>
      <ul>
        {personajes.map((p, i) => {
          return (
            <li key={i}>
              <h4>Nombre:{p.fullName}</h4>
              <img src={p.imageUrl} alt="" width={300}/>
              <p>Casa :{p.family}</p>
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default About;
