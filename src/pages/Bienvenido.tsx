import React from 'react';
import { Link } from 'react-router-dom';
import {  IonPage, } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

import { IonIcon, IonTitle ,
     IonApp,
     IonContent,
     IonSlides,
IonButton



} from "@ionic/react";
import "./Page.css";
import IconOvine from "../assets/OvinoCap.png";
const Home: React.FC = () => {
  return (
    <IonApp className="swiper-slide">
       
    <IonContent fullscreen class="ion-padding" scroll-y="true">
      <IonSlides className="">

        <IonSlides  className="swiper-slide">
           
          <div className="">
         
            <img src="https://github.com/ionic-team/ionic-docs/blob/legacy/src/demos/api/slides/slide-2.png?raw=true"/>
            <h2>Bienvenido!</h2>
            <p> <b>OvinoCap app</b> Es una aplicacion quer nos ayuda a detectar Conjuntivitis en nuestros Ovinos, 
            a travez del metodo de la <b>Famacha</b></p>
            <h2>Listo Para Explorar?</h2>
            <br />
            <br />
          <IonButton fill="clear">Continuar <IonIcon slot="end" name="arrow-forward"></IonIcon>----{'>>'}</IonButton>
          </div>
        
        </IonSlides>

        <IonSlides  className="swiper-slide">
        <img src="https://github.com/ionic-team/ionic-docs/blob/legacy/src/demos/api/slides/slide-1.png?raw=true"/>
          <h2>What is Ionic?</h2>
          <p><b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.</p>
        </IonSlides>

        <IonSlides  className="swiper-slide">
        <img src={IconOvine}/>
          <h2>What is Appflow?</h2>
          <p><b>Appflow</b> is a powerful set of services and features built on top of Ionic Framework that brings a totally new level of app development agility to mobile dev teams.</p>
        </IonSlides>

        <IonSlides className="swiper-slide">
        <img src={IconOvine}/>
          <h2>Ready to Play?</h2>
          </IonSlides>
          <Link  to="/Inicio">
              <IonTitle  className="border">
              <IonButton   fill="clear">Continue <IonIcon slot="end" name="arrow-forward"></IonIcon></IonButton>

              </IonTitle>

          </Link>
      

      </IonSlides>
    </IonContent>
  </IonApp>

  );
};
export default Home;
