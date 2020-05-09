import React from 'react';

import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
} from '@ionic/react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Setting page</IonCardTitle>
            </IonCardHeader>
            <Link to="/"><IonButton color="primary">Home</IonButton></Link>
            <Link to="/about"><IonButton color="secondary">About</IonButton></Link>
          </IonCard>
        </IonContent>
    
    ); 
}  

export default Home;