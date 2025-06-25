import React from "react";
import { Link } from "react-router-dom";
// import "../pagecss/Homepage.css"
import "./Homepage.css"
import Headers from "../components/Headers";


//import Header from "../components/Header";  
//import Footers from "../components/Footer/Footers";

const Homepage = () => {
  return (
      <div className="home">
        <Headers/>
          <div className="wel">
                <h2 id="h1"><b>Welcome to Vivekanand College</b></h2>
                <h1 id="h2"><b>Your journey to excellence starts here.</b> </h1>
                <button type="button" id="apply"><a href="AdmissionPage.jsx" id="now">Apply Now</a></button>
          </div>

          <div className="come">
            <p className="para"> ** vivekanand College ** is a premier educational institution dedicated to fostering academic execellance, innovation and holistic development. Established in [ year of Establishment eg. 1980 ] we have proudly served generations of students, empowering them to achieve their full potentional.</p>
            <p className="para"> At vivekanand college, we believe in a vibrant learning environment that extends beyound textbooks. Our state-of-the art facilities, experienced faculty and diverse student comuunity create a unique ecosystem where curiosty thrives and future leaders are shaped.</p>

            <h2 id="h3"> <b>Why choose Vivekanand College?</b> </h2><hr />

            <p className="para"> **Legacy of Excellance** Decades of commitments to quality educationa.</p>
            <p className="para"> **Experinced Fcaulty** learn from renowned expert and passinate educators.</p>
            <p className="para"> **Moden Facilities** Well-equipped labs, expensive liberary and comfortable campus.</p>
            <p className="para"> **Holistic development** focus on co-crricular activities, sports, and community service. </p>
            <p className="para"> **Strong Placement** Execullent carrer oppourtunities with laeding compnies.</p>

            <h2 id="h4"><b>Campus Life and Facilities</b></h2><hr />

            <img id="campus" src="/Image/one.jpeg" />
            <img id="holding" src="/Image/two.jpeg" />

            <p className="para">Explore our vibrant campus and state-of-the-art facilities designed to enhance your learning experience and personal growth.</p>
            <p className="para">Ready to Explore our courses?</p>

            <button id="apply">Explore Courses</button>

          </div>
          <hr />
        </div>
  );
};

export default Homepage;