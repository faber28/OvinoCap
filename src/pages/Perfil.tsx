import "./Page.css";
import "./css/Captura.css";
import {  IonBackButton, IonButtons, IonFab, IonFabButton } from '@ionic/react';
import {
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonListHeader,
  IonFooter,
  IonNote,
  IonSegment,
  IonSegmentButton,
  IonSelectOption,
  IonSelect,
  IonIcon,
} from "@ionic/react";

import { useState } from "react";
import {
  save,
  paw,
  location,
} from "ionicons/icons";

const Perfil: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [number1, setNumber1] = useState<number>();
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
        <IonListHeader>Faber Hoyos</IonListHeader>
        <IonNote className="NOTA">faberhoyo01@gmail.com</IonNote>
      </div>

      <div>
        <IonSegment
          onIonChange={(e) => console.log("Segment selected", e.detail.value)}
        >
          <IonSegmentButton value="friends">
            <IonLabel>Datos</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="enemies">
            <IonLabel>Mis Ovinos</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        <div className="divCont">
          <IonItemDivider>Nombre del Establecimiento</IonItemDivider>
          <br />
          <IonItem       className="inputradio">
            <IonInput
        
              color="primary"
              value={text}
              placeholder="Ej: FincaDeseo"
              onIonChange={(e) => setText(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <br />
          <IonItem  className="inputradio">
            <IonLabel>Produccion</IonLabel>
            <IonIcon   icon={paw} />
            <IonSelect>
              <IonSelectOption value="brown">Carne</IonSelectOption>
              <IonSelectOption value="blonde">Lana</IonSelectOption>
              <IonSelectOption value="black">Doble Proposito</IonSelectOption>
            </IonSelect>
          </IonItem>
          <br />
          <IonItem className="inputradio">
            <IonLabel>Localidad</IonLabel>
            <IonIcon icon={location} />
            <IonSelect>
              <IonSelectOption value="brown">Colombia</IonSelectOption>
              <IonSelectOption value="blonde">Ecuador</IonSelectOption>
              <IonSelectOption value="black">Brazil</IonSelectOption>
              <IonSelectOption value="red">Argentina</IonSelectOption>
            </IonSelect>
          </IonItem>

          <br />
          <IonItemDivider>Hectáreas</IonItemDivider>
          <br/>
          <IonItem className="inputradio">
            <IonInput
            
              type="number"
              value={number}
              placeholder="Ej: 20 Hc"
              onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>
          <br />
         
          <IonItemDivider>Telefono</IonItemDivider>
          <br/>
          <IonItem className="inputradio">
            <IonInput
            
              type="number"
              value={number1}
              placeholder="Ej: 3003987175"
              onIonChange={(e) => setNumber1(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>

        
        </div>
        <br />
        
        <IonFooter>
          <IonToolbar  className="tool">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>Salir</IonTitle>
          </IonToolbar>
        </IonFooter>
      {/*   <IonTabButton tab="about">
          <IonIcon icon={home} />
          <IonLabel>About</IonLabel>
        </IonTabButton> */}
     
      </div>
     
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon  icon={save}   />
          </IonFabButton>
        </IonFab>
    
   
       
    </div>
  );
};

export default Perfil;
