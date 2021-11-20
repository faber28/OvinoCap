import "./Page.css";
import "./css/Captura.css";
import CardSheep from "../components/CardSheep";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from "react";
import { Link } from "react-router-dom";

interface OvinesCard {
  id: string;
  categoria: string;
  raza: string;
  nivel: string;
}

const cardOvines: OvinesCard[] = [
  {
    id: "101",
    categoria: "Lactante",
    raza: "Negra",
    nivel: "5",
  },
  {
    id: "102",
    categoria: "Lactante",
    raza: "Blanca",
    nivel: "2",
  },
  {
    id: "103",
    categoria: "Lactante",
    raza: "Negra",
    nivel: "5",
  },
  {
    id: "104",
    categoria: "Lactante",
    raza: "Blanca",
    nivel: "2",
  },
  {
    id: "105",
    categoria: "Lactante",
    raza: "Negra",
    nivel: "5",
  },
  {
    id: "106",
    categoria: "Lactante",
    raza: "Blanca",
    nivel: "2",
  },
];

const Captura: React.FC = () => {
  const [imagen, setImagen] = useState<any>(
    "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
  );

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    setImagen(image.webPath);
  };

  return (
    <div className="screen">
      <div className="divBack">
        <div className="divDato">
          <hr className="grayH" />
          <Link className="link" to="/page/Resultado">
            <button onClick={() => takePicture()}>Tomar Foto</button>
          </Link>
          {/* <img alt="OvineFoto" className="ig" src={imagen}/> */}
          {cardOvines.map((ovine) => {
            return (
              <CardSheep
                id={ovine.id}
                categoria={ovine.categoria}
                raza={ovine.raza}
                nivel={ovine.nivel}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Captura;
