// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import NavbarComponent from './components/NavbarComponent';
// import FooterComponent from './components/FooterComponent';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Product from './pages/Product';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Signup from './pages/Signup';






function App() {
  return <div>
    <NavbarComponent/>

    <Routes>
      <Route path="/" Component={HomePage}/>
      <Route path="/product" Component={Product}/>
      <Route path="/Aboutus" Component={Aboutus}/>
      <Route path="/signin" Component={Signin}/>
      <Route path="/contact" Component={Contact}/>
      <Route path="/signup" Component={Signup}/>
    </Routes>

    {/* <FooterComponent/> */}
     </div>;
  
}

export default App
