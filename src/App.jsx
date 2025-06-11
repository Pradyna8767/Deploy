import {BrowserRouter , Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"

import AdmissionPage from "./pages/AdmissionPage"
import ContactPage from "./pages/ContactPage"
import CoursesPage from "./pages/CoursesPage"



const App = () => {
  return(
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
  )
}


export default App