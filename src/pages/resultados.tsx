import "./Page.css";
import "./css/Resultados.css";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from "react";
import { Link } from "react-router-dom";

const Resultado: React.FC = () => {
  const [imagen, setImagen] = useState<any>(
    "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
  );

  const [porcentaje, setPorcentaje] = useState<any>("");
  const [nivel, setNivel] = useState<any>("");

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    setImagen(image.webPath);
  };

  if (porcentaje === "") {
    return (
      <div className="screen">
        <div className="divBackground">
          <button onClick={() => takePicture()}>Tomar Foto</button>
          <div className="divDatos">
            <hr className="grayHr" />
            <label>Resultado de Evaluar el ojo del Ovino</label>
            <hr className="purpleHr" />
            <label>Imagen del Ovino</label>
            <div></div>
            <div className="res">
              <img src={imagen} alt="Conjuntiva" />
            </div>
            <label> Porcentaje {porcentaje}</label>
            <label>Nivel: {nivel}</label>
            <button onClick={()=>{alert("Primero toma una foto!");}}>Registrar</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="screen">
        <div className="divBackground">
          <button onClick={() => takePicture()}>Tomar Foto</button>
          <div className="divDatos">
            <hr className="grayHr" />
            <label>Resultado de Evaluar el ojo del Ovino</label>
            <hr className="purpleHr" />
            <label>Imagen del Ovino</label>
            <div></div>
            <div className="res">
              <img src={imagen} alt="Conjuntiva" />
            </div>
            <label> Porcentaje {porcentaje}</label>
            <label>Nivel: {nivel}</label>
            <Link className="link" to="/page/Registrar">
              <button>Registrar</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default Resultado;
