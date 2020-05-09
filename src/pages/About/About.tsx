import React from 'react';
import { Link } from 'react-router-dom'
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonButton,
  IonCardTitle,
} from '@ionic/react';

const About = () => {
    return (
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>About page</IonCardTitle>
            </IonCardHeader>
            <Link to="/"><IonButton color="primary">Home</IonButton></Link>
            <Link to="/settings"><IonButton color="secondary">Settings</IonButton></Link>
          </IonCard>
        </IonContent>
    ); 
}  

export default About;