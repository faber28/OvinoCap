import "./Page.css";
import "./css/Registro.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonFooter,

} from "@ionic/react";
import Logo from "../assets/icon.png";
const Resultado: React.FC = () => {
  return (
    <div className="screen">
      <div className="divBackground">
        <label className="registrar">Registrar Animal</label>
        <div className="divDatos">
          <IonCardHeader>
       {/*      <IonCardTitle> <b>Nombre</b> : Luna </IonCardTitle> */}
          </IonCardHeader>
          <IonItem className="ion-activated">
            <IonIcon  slot="start" />
            <IonLabel  className="result">Resultado de Evaluar <br />
            el ojo del Ovino</IonLabel>
          </IonItem> 
         
          <IonCardContent></IonCardContent>

          <IonItem href="#" className="ion-activated res">
            <IonIcon slot="start" />
           
          </IonItem>
          <IonLabel className="res" ><b>Imagen del Ovino</b></IonLabel>
          <div ></div>
          <div className="res" >
              <img src="https://www.cfsph.iastate.edu/DiseaseInfo/ImageDB/BT/BT_011.jpg" alt="" />
          
          </div>
          <div className="res">
          <IonCardContent><b> Porcentaje</b>: 98%</IonCardContent>
          <IonCardContent> <b>Nivel </b>: 4</IonCardContent>
          </div>
         
          <IonFooter className="ion-no-border">
      <IonToolbar>
        <IonTitle></IonTitle>
      </IonToolbar>
    </IonFooter>

<div  className="res">
<IonFooter  id="logo" >
      <IonToolbar>
        <IonTitle>OvinoCap</IonTitle>
      </IonToolbar>
    </IonFooter>
</div>
 
        </div>
      </div>
    </div>
  );
};

export default Resultado;
