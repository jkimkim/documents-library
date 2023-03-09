import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TopNav from './components/top-nav';
import LogedInNav from './components/LogedInNav';
import Login from './components/login';
import IntroSection from './components/IntroSection.tsx';
import FeaturesCard from './components/FeaturesCards.tsx';
import CategoriesCard from './components/CategoriesCards.tsx';
import Bootcamps from './components/Bootcamps.tsx';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFZQdtjrFRDRhkmlsMCNFUPgyquZGqcuk",
  authDomain: "docslibr.firebaseapp.com",
  projectId: "docslibr",
  storageBucket: "docslibr.appspot.com",
  messagingSenderId: "124566359045",
  appId: "1:124566359045:web:7c783f648608216ed5206c",
  measurementId: "G-JYKJEGT8ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Render the top navigation bar
const header = ReactDOM.createRoot(document.getElementById('root'));
header.render(
  <React.StrictMode>
    <TopNav />
    <Login/>
    <IntroSection />
    <FeaturesCard />
    <CategoriesCard />
    <Bootcamps />
    <Footer />
  </React.StrictMode>
);

// Render the main content

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
