import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import './App.css';
import SupportBox from './components/SupportBox';
import PayBox from './components/PayBox';
import InfoBox from './components/InfoBox';
import Imager from './components/Imager';
import Footer from './components/Footer';
import Auth from './components/Auth';
import Login from './components/Login'
import SetAcc from './components/SetAcc'
import Dashboard from './components/Dashboard'

function App() {
    return (
        <Router>
            <div className="App">
                <ConditionalHeader />
                <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/account/setup" element={<SetAcc />} />
                    <Route path="/login" element={<Login Heading="Welcome Back" SubHeading="Enter your email of your account."/>} />
                    <Route path="/login/new" element={<Login  Heading="Enter your credentials" SubHeading="Enter your email to continue." />} />
                    <Route path="/join" element={<Auth />} />
                    <Route path="/" element={
                        <>
                            <Hero />
                            <SupportBox
                                Heading="Give your audience an easy and secure way to say thanks."
                                SubHeading="Buy Me a Chai makes supporting fun and easy. In just a couple of taps, your fans can make the payment (buy you a coffee) and leave a message."
                                PayComponent={<PayBox />} 
                                InfoComponent={<InfoBox />} 
                            />
                            <SupportBox
                                Heading="Made Only specially for Indians"
                                SubHeading="Buy Me a Chai makes supporting secure and easy by utilizing UPI. Cut out the middleman and send your Chai directly to the creators who fuel your daily grind in couple of taps using your phone."
                                PayComponent={<Imager />} 
                            />
                            <Footer />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

function ConditionalHeader() {
    const location = useLocation();

    if (location.pathname === '/') {
        return <Header />;
    }

    return null;
}

// function App(){
//     return(
//         <SetAcc Heading="Welcome Back" SubHeading="Enter your email of your account."/>
//     )
// }

export default App;
