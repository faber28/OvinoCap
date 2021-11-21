import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  flagOutline,
  flag,
  medkitOutline,
  medkit,
  home,
  person,
  paperPlaneOutline,
  homeOutline,
  exitOutline,
  exit,
  shareSocialOutline,
  shareSocial,
  mailOutline,
  mail,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

interface AppLabels {
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Inicio",
    url: "/page/Inicio",
    iosIcon: homeOutline,
    mdIcon: home,
  },
  {
    title: "Perfil",
    url: "/page/Perfil",
    iosIcon: paperPlaneOutline,
    mdIcon: person,
  },
  {
    title: "Sanidad",
    url: "/page/Sanidad",
    iosIcon: medkitOutline,
    mdIcon: medkit,
  },
  {
    title: "Guia",
    url: "/page/Guia",
    iosIcon: flagOutline,
    mdIcon: flag,
  },
  {
    title: "Cerrar Sesión",
    url: "/",
    iosIcon: exitOutline,
    mdIcon: exit,
  }
];
const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Faber Hoyos</IonListHeader>
          <IonNote>faberhoyos01@gmail.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
