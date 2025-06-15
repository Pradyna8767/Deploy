import React from "react";
import { Link } from "react-router-dom";
import '../pagecss/CoursesPage.css'
import Footer from "../components/Footer/Footers";
import Header from "../components/Header";


const CoursesPage = () => {
    return (
        <div id="page">
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
            
            <ol><b>Bachelor of Arts (B.A.)</b></ol>c
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
            
          <table id="table">
            <tr className="tr">
              <td>Program Type</td> <td>Course Name</td> <td>Duration</td> <td>Annual Fee (INR)</td> <td> Eligibility</td>
            </tr>
            
            <tr className="tr">
              <td>UG</td> <td>B.Sc. Computer Science</td> <td>3 Years</td> <td>₹ 85,000</td> <td>10+2 with PCM (50%)</td>
            </tr>
            
            <tr className="tr">
              <td>UG</td> <td>B.Com. Accounting & Finance</td> <td> 3 Years</td> <td> ₹ 70,000</td> <td>10+2 Commerce (45%)</td>
            </tr>
            
            <tr className="tr">
              <td>PG</td> <td>M.Sc. Information Technology</td> <td>2 Years</td> <td>₹ 95,000</td> <td>B.Sc. IT/CS (50%)</td>
            </tr>
          </table>
            
          <h2 id="h5">Specialized & Vocational Courses</h2><hr />
          <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p><br />
          <p>Have questions about a specific course?</p>
          <button type="button" id="button">Inquire About Courses</button>
          <Footer/>
                  
        </div>
    );
};

export default CoursesPage