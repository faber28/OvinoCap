import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonBackButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";
import "./Page.css";
import Captura from "./Captura";
import Perfil from "./Perfil";
import Resultado from "./resultados";
import Registro from "./Registro";
import Guia from "./Guia";
import Bienvenido from "./Bienvenido";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  if (name === "Inicio") {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Captura />
        </IonContent>
      </IonPage>
    );
  } else if (name === "Perfil") {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/Page/Inicio" />
            </IonButtons>
            <IonTitle>Mi {name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Perfil />
        </IonContent>
      </IonPage>
    );
  } else if (name === "Resultado") {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/Page/Inicio" />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Resultado />
        </IonContent>
      </IonPage>
    );
  } else if (name === "Registrar") {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/Page/Resultado" />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Registro />
        </IonContent>
      </IonPage>
    );
  } else if (name === "Bienvenido") {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">faber{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Bienvenido />
        </IonContent>
      </IonPage>
    );
  } else if (name === "Guia") {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/Page/Inicio" />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Guia />
        </IonContent>
      </IonPage>
    );
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/Page/Inicio" />
          </IonButtons>
          <IonTitle>Ups! Lo sentimos!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="divError">Algo salió mal. Intenta con otra ventana.</div>
      </IonContent>
    </IonPage>
  );
};

export default Page;
