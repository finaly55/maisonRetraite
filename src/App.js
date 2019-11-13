import React from 'react';
import './App.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePageComponent/homePage';

//components

function App() {
  return (
    <div className="App">
        <Header/>
          <HomePage/>
        <Footer/>
    </div>
  );
}

export default App;
