import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home';
import Navigator from './Components/Navigator/Navigator';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import { useEffect } from 'react';
import Skill from './Components/Skill/Skill';
import Portofolio from './Components/Portofolio/Portofolio';
// import './Components/About/About.css'


function App() {

  let tab;
  let i = 0;
  let index = 999999
  const pageOn = (e) => {
    const nav = e.target;
    const card = nav.getAttribute('id');
    let tab = card
    if (tab === 'about') {
      let about = document.querySelector('.about')
      about.style.display = 'block'
      if (i === i) {
        i += 1
        index += i
      }
      about.style.zIndex = index
    }
    else if (tab === 'contact') {
      let contact = document.querySelector('.contact')
      contact.style.display = 'block'
      if (i === i) {
        i += 1
        index += i
      }
      contact.style.zIndex = index
    }
    else if (tab === 'skill') {
      let skill = document.querySelector('.skill')
      skill.style.display = 'block'
      if (i === i) {
        i += 1
        index += i
      }
      skill.style.zIndex = index
    }
    else if (tab === 'portofolio') {
      let portofolio = document.querySelector('.portofolio')
      portofolio.style.display = 'block'
      if (i === i) {
        i += 1
        index += i
      }
      portofolio.style.zIndex = index
    }
    

  }




  return (
    <>
      <BrowserRouter>
        <Home />
        <Navigator pageOn={pageOn} />
        <About />
        <Contact />
        <Skill />
        <Portofolio/>
      </BrowserRouter>
    </>
  );
}

export default App;
