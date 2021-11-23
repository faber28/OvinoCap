import { IonPage, setupConfig } from "@ionic/react";
import { Link } from "react-router-dom";
import IconOvine from "../assets/OvinoCap.png";
import "./Page.css";

setupConfig({
  hardwareBackButton: false
});

const Inicio: React.FC = () => {
  
  return (
    <IonPage>
      <div className="screenInicio">
        <img alt="imagen" src={IconOvine} />
        <label>Hola!</label>
        <p>El mejor momento para cuidar de nuestros animales</p>
        <Link className="link" to="/page/Bienvenido">
          <button className="btnRelleno">Iniciar</button>
        </Link>
      </div>
    </IonPage>
  );
};

export default Inicio;
