import React from "react";
import { Link } from "react-router-dom";
import '../pagecss/CoursesPage.css'
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";


const CoursesPage = () => {
    return (
        <div>
            <Header/>
               <h1 id="h1">Our Academic Programs</h1><br />
          <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
          <h3 id="h2">Discover Campus Life</h3>
          {/* <video src="http://vck.codewonders.in/assets/college-tour-FAmcnyfF.mp4" controls loop></video> */}
          <hr />
            
          <h2 id="h3">Undergraduate Programs (UG)</h2><hr />
          <li>
            <ol><b>Bachelor of Science (B.Sc.)</b></ol>
            <ol>
              <li>Computer Science (3 years)</li>
              <li>Information Technology (3 years)</li>
              <li>Biotechnology (3 years)</li>
            </ol>
            
            <ol><b>Bachelor of Commerce (B.Com)</b></ol>
            <ol>
              <li>Accounting & Finance (3 years)</li>
              <li>Banking & Insurance (3 years)</li>
            </ol>
            
            <ol><b>Bachelor of Arts (B.A.)</b></ol>
            <ol>
              <li>English Literature (3 years)</li>
              <li>Psychology (3 years)</li>
            </ol>
          </li>
                    
          <h2>Postgraduate Programs (PG)</h2>
          <ol>
            <ol><b>Master of Science (M.Sc.)</b></ol>
            <ol>
              <li>Computer Science (2 years)</li>
              <li>Information Technology (2years)</li>
            </ol>
            
            <ol><b>Master of Commerce (M.Com) (2 years)</b></ol>
            
            <ol><b>Master of Arts (M.A.) (2 years)</b></ol>
          </ol>
            
          <h2 id="h4">Program Details & Fee Structure (Annual)</h2>
         
            
          <h2 id="h5">Specialized & Vocational Courses</h2><hr />
          <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p><br />
          <p>Have questions about a specific course?</p>
          <button type="button" id="button">Inquire About Courses</button>
          <Footer/>
                  
        </div>
    );
};

export default CoursesPage