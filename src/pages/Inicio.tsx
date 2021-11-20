import { IonPage } from "@ionic/react";
import { Link } from "react-router-dom";
import IconSheep from "../assets/ic_sheep.webp";

import "./Page.css";

const Inicio: React.FC = () => {
  return (
    <IonPage>
      <div className="screen">
        <img alt="imagen" src={IconSheep} />
        <label>Hola!</label>
        <p>El mejor momento para cuidar de nuestros animales</p>
        <Link className="link" to="/page/Inicio">
          <button className="btnRelleno">Iniciar</button>
        </Link>
      </div>
    </IonPage>
  );
};

export default Inicio;
