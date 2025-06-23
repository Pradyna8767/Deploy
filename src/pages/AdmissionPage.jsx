import React from "react"
import { Link } from "react-router-dom";
import "../pagecss/AdmissionPage.css"

import Footer from "../components/Footer/Footers";
import Headers from "../components/Headers";



const AdmissionPage = () => {
    return(
        <div id="mission">
            <Headers />
            <h2 id='at'>Admissions at Vivekanand College</h2>
            <p className="para3">Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p><br />
            <p className="para3">Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p><br />

            <hr />
            <h2 id="at">Eligibility Criteria for Undergraduate Programs</h2>

            <table className="mini">
                <tr id="tr">
                    <td>Program</td> <td>Minimum Qualification</td> <td>Required Subjects</td> <td>Minimum Marks (%)</td>
                </tr>

                <tr id='tr'>
                     <td>B.Sc. Computer Science</td> <td>10+2 (or equivalent)</td> <td>  Physics, Chemistry, Maths</td> <td>50%</td>
                </tr>

                <tr id='tr'>
                    <td>B.Com. Accounting & Finance</td> <td>10+2 (or equivalent)</td> <td>Commerce Stream</td> <td>45%</td>
                </tr>

                <tr id='tr'>
                    <td>B.A. English Literature</td> <td>10+2 (or equivalent)</td> <td> Any Stream</td> <td>40%</td>
                </tr>
            </table>

            <hr />
            <h2 id="at">Application Process</h2><hr />
            <ol>
                <li><b>Online Application:</b>Fill out the application form available on our portal.</li>
                <li><b>Document Submission:</b>Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
                <li><b>Entrance Exam (if applicable):</b>Appear for the college's entrance examination.</li>
                <li><b>Merit List & Interview:</b> Check the merit list and attend the interview if shortlisted.</li>
                <li><b>Fee Payment:</b> Complete the admission by paying the required fees.</li>
            </ol>

            <p className="para3">For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <a href="/coursespage">Courses page</a> or <a href="/contactpage">Contact us</a> directly.</p>
        </div>
    );
};

export default AdmissionPage

