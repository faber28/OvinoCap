import "./Page.css";
import "./css/Captura.css";
import CardSheep from "../components/CardSheep";
import { Link } from "react-router-dom";
import { IonAlert, IonIcon, IonTitle, setupConfig } from "@ionic/react";
import { camera } from "ionicons/icons";
import { App } from '@capacitor/app';
import { useState } from "react";

interface OvinesCard {
  id: string;
  categoria: string;
  raza: string;
  nivel: string;
}

setupConfig({
  hardwareBackButton: false
});

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

  const [showBackAlert, setShowBackAlert] = useState(false);

  App.addListener('backButton', (ev: any) => {
      setShowBackAlert(true);
  });
  
  return (
    <div className="screen">
      <IonAlert
            isOpen={showBackAlert}
            header={'Por favor, confirma!'}
            message={'¿Quieres salir de la aplicación?'}
            buttons={[
              {
                text: 'Cancelar',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {}
              },
              {
                text: 'Continuar',
                handler: () => {
                  App.exitApp();
                }
              }
            ]}
            onDidDismiss={() => setShowBackAlert(false)}
            cssClass='my-custom-class'
          />
      <div className="divBack">
        <IonTitle className="titulo">
          Su Camara Debe Estar Limpia!
        </IonTitle>
        <IonIcon className="camera" icon={camera} />
        <div className="divDato">
          <hr className="grayH" />
          <Link className="link" to="/page/Resultado">
            <button>Tomar Foto</button>
          </Link>
          <br />

          <div className="over">
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
    </div>
  );
};

export default Captura;
