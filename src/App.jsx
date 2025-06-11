import {BrowserRouter , Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import Admission from "./pages/AdmissionPage"
import Contact from "./pages/ContactPage"
import Courses from "../../../OJT-REACT-PROJECT/FirstProject/src/pages/Courses"


const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/admissionpage" element={<Admission/> } />
          <Route path="/contactpage" element={<Contact />} />
          <Route path="/coursespage" element={<Courses />} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App