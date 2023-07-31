import React, { useState, useEffect } from "react";
import envs from "../../config/envs.js";
import "./AllCatsImages.css";

const imagesAPIurl = envs.imagesAPIurl;

function CatsImages(props) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchCatImage();
  }, []);

  const fetchCatImage = () => {
    fetch(`${imagesAPIurl}/getimg`)
      .then((response) => response.json())
      .then((data) => setImageUrl(data[0].url))
      .catch((error) => console.log(error));
  };
  return (
    <div className="AllCatsImages">
      <form>
        <ul>
          <img src={imageUrl} alt="Cat Images" />
          <li>
            <strong>Nome:</strong> {props.cats.name}
          </li>
          <li>
            <strong>Cidade:</strong> {props.cats.city}
          </li>
          <li>
            <strong>Estado:</strong> {props.cats.state}
          </li>
          <li>
            <strong>Telefone:</strong> +{props.cats.phone}
          </li>
          <li>
            <strong>Fêmeas para adoção:</strong> {props.cats.qtyFemale}
          </li>
          <li>
            <strong>Machos para adoção:</strong> {props.cats.qtyMale}
          </li>
          <li>
            <strong>Observações:</strong> {props.cats.notes}
          </li>
        </ul>
      </form>
    </div>
  );
}

export default CatsImages;
