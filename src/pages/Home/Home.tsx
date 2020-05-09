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
              <IonCardTitle>Home page</IonCardTitle>
            </IonCardHeader>
            <Link to="/about"><IonButton color="primary">About</IonButton></Link>
            <Link to="/settings"><IonButton color="secondary">settings</IonButton></Link>
            
          </IonCard>
        </IonContent>
    
    ); 
}  

export default Home;