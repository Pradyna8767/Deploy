import React from "react"
import Footer from "../components/Footer/Footers"
import { Link } from "react-router-dom"
import "../pagecss/AboutPage.css"
import Header from "../components/Header"

const AboutPage = () => {
    return(
        <div className="div">
            <Header />
            
            <h1 id="h1">About page</h1>
             <h2 id="head1">About Vivekanand college</h2>
            <p>Vivekanand College stands as a beacon of knowledge and intrigity committed to delivering transformative education since its ensiption in [ year of estalibshment eg. 1980 ]. Located in the bustling heart of [ City / Area eg. Chembur, Mumbai ] our college has cnsistantly strived to upholh the highest standareds of academic rigor and ethical vuales.  </p>
            
            <p>Our vision is to empower students with critical thinking skills a global prespective and a strong sence </p>
            
            <h2 id="head2">Our Mission</h2>
            <br />
            <ol>
              <li>To provide high-quality, accessible education across various disciplines.</li>
              <li>To foster research, innovation, and creativity among students and faculty.</li>
              <li>To cultivate a diverse and inclusive learning environment.</li>
              <li>To instill strong ethical values and leadership qualities.</li>
            </ol>

            <h2 id="head3">Our Values</h2>
            <hr />
            <p>Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.</p>
        
            <h2 id="head4">Our History</h2>
            <p>[Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.</p>
            <Footer/>
        </div>
    )
}

export default AboutPage