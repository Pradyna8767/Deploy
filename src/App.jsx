import React from "react";
import './App.css'

import Header from "./components/Header";

import AboutPage from "./pages/AboutPage";

import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App = () => {
  return(
    <div>
      <div>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/aboutpage" element={<AboutPage />} />
            <Route path="/admissionpage" element={<AdmissionPage/> } />
            <Route path="/contactpage" element={<ContactPage/>} />
            <Route path="/coursespage" element={<CoursesPage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}


export default App;