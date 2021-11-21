import "./Page.css";
import "./css/Guia.css";
import { IonTitle } from "@ionic/react";

const Guia: React.FC = () => {
  return (
    <div>
      <div className="titulo">
        <IonTitle className="subtitulo">¿Cómo uso OvinoCap?</IonTitle>
      </div>
      <div className="divBody">
        <p>
          A continuación encontrarás un video sobre el uso de la App, donde
          aprenderás a como puedes registrar a cada uno de tus ovinos!
        </p>
        <a href="https://www.youtube.com/watch?v=PKK22hmd6WM">
          Mira el video guía ¡Aquí!
        </a>
      </div>
    </div>
  );
};

export default Guia;
