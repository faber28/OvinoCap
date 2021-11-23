import "./Page.css";
import "./css/Resultados.css";
import { Camera, CameraResultType } from "@capacitor/camera";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from '@capacitor/dialog';
import IconReconocer from '../assets/IconReconocer.png';


const showAlert = async () => {
  await Dialog.alert({
    title: 'Espera!',
    message: 'Debes tomar o agregar una foto antes de continuar',
  });
};

const Resultado: React.FC = () => {
  const [imagen, setImagen] = useState<any>(IconReconocer);

  const [porcentaje, setPorcentaje] = useState<any>("");
  const [nivel, setNivel] = useState<any>("");

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    setImagen(image.webPath);
    setPorcentaje("95%");
    setNivel("4");
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
            <label>Porcentaje: {porcentaje}</label>
            <label>Nivel: {nivel}</label>
            <button onClick={()=>{showAlert()}}>Registrar</button>
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
            <label>Porcentaje: {porcentaje}</label>
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
