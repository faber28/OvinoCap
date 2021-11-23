import React from "react";
import { Link } from "react-router-dom";
import {
  IonIcon,
  IonTitle,
  IonApp,
  IonContent,
  IonSlides,
  IonButton,
  IonSlide,
} from "@ionic/react";
import "./Page.css";
import IconOvine from "../assets/OvinoCap.png";
import slide from "../assets/slide.png";

const Bienvenido: React.FC = () => {
  return (
    <IonApp className="swiper-slide">
      <IonContent fullscreen class="ion-padding" scroll-y="true">
        <IonSlides className="">
          <IonSlide className="swiper-slide">
            <div className="divBody">
              <img
                alt=""
                src={slide}
              />
              <h2>Bienvenido!</h2>
              <p>
                <b>OvinoCap app</b> Es una aplicacion que nos ayuda a identificar el nivel de conjuntiva en nuestros Ovinos para la prenvención, a través del metodo de la{" "}
                <b>Famacha</b>
              </p>
              <h2>Listo Para Explorar?</h2>
              <br />
              <br />
              <IonButton routerLink="/page/Inicio" fill="clear">
                Continuar
              </IonButton>
            </div>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonApp>
  );
};
export default Bienvenido;
