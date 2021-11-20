import "./Page.css";
import "./css/Captura.css";
import CardSheep from "../components/CardSheep";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";

import { IonListHeader, IonMenu, IonMenuToggle, IonNote } from "@ionic/react";
interface OvinesCard {
  id: string;
  categoria: string;
  raza: string;
  nivel: string;
}

/* const cardOvines: OvinesCard[] = [
    {
        id: "101",
        categoria: "Lactante",
        raza: "Negra",
        nivel: "5"
    },
    {
        id: "102",
        categoria: "Lactante",
        raza: "Blanca",
        nivel: "2"
    },
    {
        id: "103",
        categoria: "Lactante",
        raza: "Negra",
        nivel: "5"
    },
    {
        id: "104",
        categoria: "Lactante",
        raza: "Blanca",
        nivel: "2"
    },
    {
        id: "105",
        categoria: "Lactante",
        raza: "Negra",
        nivel: "5"
    },
    {
        id: "106",
        categoria: "Lactante",
        raza: "Blanca",
        nivel: "2"
    },
]; */

const Perfil: React.FC = () => {
  return (
    <div>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/" />
        </IonButtons>
        <IonTitle>Mi Perfil</IonTitle>
      </IonToolbar>
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
