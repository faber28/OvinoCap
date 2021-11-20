import "./Page.css";
import "./css/Resultados.css";
import {
  IonTitle,
  IonToolbar,
  IonCardHeader,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonFooter,
} from "@ionic/react";

const Resultado: React.FC = () => {
  return (
    <div className="screen">
      <div className="divBackground">
        <button>Registrar Animal</button>
        <div className="divDatos">
          <hr className="grayHr" />
          <label>Resultado de Evaluar el ojo del Ovino</label>
          <hr className="purpleHr"/>
          <label>Imagen del Ovino</label>
          <div></div>
          <div className="res">
            <img
              src="https://www.cfsph.iastate.edu/DiseaseInfo/ImageDB/BT/BT_011.jpg"
              alt=""
            />
          </div>
          <label> Porcentaje 98%</label>
          <label>Nivel: 4</label>
        </div>
      </div>
    </div>
  );
};

export default Resultado;
