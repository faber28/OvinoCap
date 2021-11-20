import "./Page.css";
import "./css/Captura.css";

import { IonListHeader, IonNote } from "@ionic/react";

const Perfil: React.FC = () => {
  return (
    <div>
      <div className="perfilFoto">
        <div className="userLogo">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt=""
          />
        </div>
      </div>
      <div className="userLogo">
        <IonListHeader>Manuel Guzman</IonListHeader>
        <IonNote  className="NOTA">manuelguma25@gmail.com</IonNote>
      </div>
    </div>
  );
};

export default Perfil;
