import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList, IonItemDivider } from '@ionic/react';

const Tab1: React.FC = () => {

  const [text, setText] = useState<string>();
  const [text2, setText2] = useState<string>();
  const [number, setNumber] = useState<number>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Return of Investment Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Enter Crop Name</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter Input" autofocus onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItemDivider>Enter Investment</IonItemDivider>
          <IonItem>
            <IonInput value={text2} placeholder="Enter Input" onIonChange={e => setText2(e.detail.value!)} clearInput></IonInput>
          </IonItem>

          <IonItemDivider>Duration</IonItemDivider>
          <IonItem>
            <IonInput type="number" value={number} placeholder="Enter Number" onIonChange={e => setNumber(parseInt(e.detail.value!, 10))}></IonInput>
          </IonItem>

          {/* <IonItemDivider>Disabled input</IonItemDivider>
          <IonItem>
            <IonInput value={text} disabled></IonInput>
          </IonItem>

          <IonItemDivider>Readonly input</IonItemDivider>
          <IonItem>
            <IonInput value={text} readonly></IonInput>
          </IonItem> */}

          <IonItemDivider>Return</IonItemDivider>

          <IonItem>
            <IonLabel>Output</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Return</IonLabel>
            <IonInput value={text2} color="danger" ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="fixed">Crop Name:</IonLabel>
            <IonInput value={text} color="success" ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Duration:</IonLabel>
            <IonInput value={number} color="tertiary" > </IonInput>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;