import React from "react";
import { Link } from "react-router-dom";
import "../pagecss/HomePage.css"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";


const HomePage = () => {
    return(
        <div>
            <Header/>
            <div id="container">
                <h2 id="h1">Welcome to Vivekanand College</h2>
                <h1 id="h2">Your journey to excellence starts here. </h1>
                <button type="button" id="button"><a href="/admissionpage">Apply Now</a></button>
            </div>

            <p className="para2"> ** vivekanand College ** is a premier educational institution dedicated to fostering academic execellance, innovation and holistic development. Established in [ year of Establishment eg. 1980 ] we have proudly served generations of students, empowering them to achieve their full potentional.</p>
            <p className="para2"> At vivekanand college, we believe in a vibrant learning environment that extends beyound textbooks. Our state-of-the art facilities, experienced faculty and diverse student comuunity create a unique ecosystem where curiosty thrives and future leaders are shaped.</p>

            <h2 id="h3"> Why choose Vivekanand College? </h2>

            <p className="para"><span className="arrow"></span> **Legacy of Excellance** Decades of commitments to quality educationa.</p>
            <p className="para"><span className="arrow"></span> **Experinced Fcaulty** learn from renowned expert and passinate educators.</p>
            <p className="para"><span className="arrow"></span> **Moden Facilities** Well-equipped labs, expensive liberary and comfortable campus.</p>
            <p className="para"><span className="arrow"></span> **Holistic development** focus on co-crricular activities, sports, and community service. </p>
            <p className="para"><span className="arrow"></span> **Strong Placement** Execullent carrer oppourtunities with laeding compnies.</p>
            <h2 id="h4">Campus Life and Facilities</h2> 

            <img id="img" src="/Image/one.jpeg "/>
            <img id="img" src="/Image/two.jpeg"  />

            <p>Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            <p>Ready to Explore our courses?</p>

            <button id="explore">Explore Courses</button>
            <Footer/>

        </div>
    )
}

export default HomePage;
