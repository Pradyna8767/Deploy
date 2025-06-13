import React from "react";

import AboutPage from "./pages/AboutPage";

import AdmissionPage from "./pages/AdmissionPage";
import ContactPage from "./pages/ContactPage";
import CoursesPage from "./pages/CoursesPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import Footers from "./components/Footer/Footers";
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DevloperInfoPopup";





const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return(
    <div>
      <div>
        {/* Your main application content */}


        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Pradnya Sardar Patil"
          studentPhotoUrl="/Image/Pradnya Patil.jpeg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
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
      <ChatbotComponent/>
      <Footers />
    </div>
  )
}


export default App;