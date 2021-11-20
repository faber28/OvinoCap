import "./Page.css";
import "./css/Captura.css";
import {  IonFab, IonFabButton } from '@ionic/react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonItemDivider,
  IonTabButton,
} from "@ionic/react";

import {
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
  calendar,
  personCircle,
  save,
  paw,
  location,
  informationCircle,
} from "ionicons/icons";

const Perfil: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
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
        <IonNote className="NOTA">manuelguma25@gmail.com</IonNote>
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
              <IonSelectOption value="black">Artgentina</IonSelectOption>
            </IonSelect>
          </IonItem>

          <br />
          <IonItemDivider>Hectáreas</IonItemDivider>
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
          <IonItem className="inputradio">
            <IonInput
            
              type="number"
              value={number}
              placeholder="Ej: 3003987175"
              onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
            ></IonInput>
          </IonItem>

        
        </div>
        <br />
        <IonFooter>
          <IonToolbar>
            <IonTitle>Salir</IonTitle>
          </IonToolbar>
        </IonFooter>
      {/*   <IonTabButton tab="about">
          <IonIcon icon={home} />
          <IonLabel>About</IonLabel>
        </IonTabButton> */}
     
      </div>
      <div className="">

    
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon className="stiky" icon={save}   />
          </IonFabButton>
        </IonFab>
        </div>
    </div>
  );
};

export default Perfil;
