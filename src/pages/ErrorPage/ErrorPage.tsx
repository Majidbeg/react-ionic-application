import React from 'react';

import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
} from '@ionic/react';

const ErrorPage = () => {
    return (
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>404 No page found</IonCardTitle>
            </IonCardHeader>
          </IonCard>
        </IonContent>
    
    ); 
}  

export default ErrorPage;