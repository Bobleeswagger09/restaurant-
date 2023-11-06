import { React }  from 'react';
import Header from "../src/container/Header/Header"
import AboutUs from "../src/container/AboutUs/AboutUs"
import Menu from "../src/container/Menu/Menu"
import Chef from "../src/container/Chef/Chef"
import Intro from './container/Intro/intro';
import Laurels from './container/Laurels/Laurels';
import Gallery from "./container/Gallery/Gallery"
import FindUs from './container/Findus/FindUs';
import Footer from './container/Footer/Footer';
import  { Navbar}   from '../src/components/Navbar/Navbar'
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
