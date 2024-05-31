import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';
import SupportBox from './components/SupportBox';
import PayBox from './components/PayBox';
import InfoBox from './components/InfoBox';
import Imager from './components/Imager';
import Footer from './components/Footer'


function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <SupportBox
             Heading = "Give your audience an easy and secure way to say thanks."
             SubHeading = "Buy Me a Chai makes supporting fun and easy. In just a couple of taps, your fans can make the payment (buy you a coffee) and leave a message."
             PayComponent={<PayBox />} 
             InfoComponent={<InfoBox />} />

            <SupportBox
             Heading = "Made Only specially for Indians"
             SubHeading = "Buy Me a Chai makes supporting secure and easy by utilizing UPI. Cut out the middleman and send your Chai directly to the creators who fuel your daily grind in couple of taps using your phone."
             PayComponent={<Imager />} />
             <Footer />
            
            
        </div>
    );
}

export default App;
