import React from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonApp } from '@ionic/react';
import Header from './components/Headers/Headers'
import Footer from './components/Footer/Footer'
import Routes from './Routes'
 
const App = () => {
    return (
      <IonApp>
        <Header />
        <Routes />
        <Footer />
      </IonApp>
    );
}    
 
export default App;