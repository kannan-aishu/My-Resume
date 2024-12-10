import logo from './logo.svg';
import { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/R.gif'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { useState } from 'react';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App text-white bg-black">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
     

      <Footer/>
      </BrowserRouter>
    </div>
  );
}



export default App;

