import "./Page.css";
import "./css/Registro.css";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonFabButton,
  IonFab,
  IonProgressBar,
  IonTitle,
  IonListHeader,
  IonSelectOption,
  IonSelect,
  IonIcon,
} from "@ionic/react";
import { useState } from "react";
import { save, apps, eye, paw } from "ionicons/icons";
const Registro: React.FC = () => {
  const [text, setText] = useState<string>();
  const [id, setId] = useState<any>();
  const [lote, setLote] = useState<any>();
  return (
    <div>
      <div className="tittle">
        <IonTitle className="lav">Registrar Animal</IonTitle>
      </div>
      <div className="divCont">
        <form>
          <br />
          <IonItem className="inputradio">
            <IonLabel>Categorias</IonLabel>
            <IonIcon icon={apps} />
            <IonSelect>
              <IonSelectOption value="brown">Cuido</IonSelectOption>
              <IonSelectOption value="blonde">No Cuido</IonSelectOption>
              <IonSelectOption value="black">ventas</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonListHeader>Identificador del ovino</IonListHeader>
          <IonItem className="inputradio">
            <IonInput
              type="number"
              color="primary"
              value={id}
              placeholder="Ej: 0003445"
              onIonChange={(e) => setId(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <br />
          <IonItem className="inputradio">
            <IonLabel>Castrado</IonLabel>
            <IonIcon icon={paw} />
            <IonSelect>
              <IonSelectOption value="brown">SI</IonSelectOption>
              <IonSelectOption value="blonde">NO </IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonListHeader>Lote</IonListHeader>
          <IonItem className="inputradio">
            <IonInput
              type="number"
              color="primary"
              value={lote}
              placeholder="Ej: 125"
              onIonChange={(e) => setLote(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <br />
          <IonItem className="inputradio">
            <IonLabel>Sexo</IonLabel>
            <IonIcon icon={eye} />
            <IonSelect>
              <IonSelectOption value="brown">Macho</IonSelectOption>
              <IonSelectOption value="blonde">Hembra </IonSelectOption>
            </IonSelect>
          </IonItem>

          <br />
          <IonItemDivider>Nivel de Conjuntiva :4 </IonItemDivider>
          <br />
          <IonProgressBar
            className="progressbar"
            color="primary"
            value={0.80}
            buffer={0.5}
          ></IonProgressBar>
          <br />
        </form>
      </div>

      <IonFab className="bort" vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton>
          <IonIcon icon={save} />
        </IonFabButton>
      </IonFab>
    </div>
  );
};

export default Registro;
