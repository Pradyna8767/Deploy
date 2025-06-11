import React from "react"
import Header from "../components/Header"


const Admission = () => {
    return(
        <div>
                <Header />
                    <h2 id='h1'>Admissions at Vivekanand College</h2><br />
        <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p><br />
        <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p><br />

        <h2 id='h2'>Eligibility Criteria for Undergraduate Programs</h2><hr/><br />

     

        <h2>Application Process</h2><hr /><br />
        <ol>
          <li><b>Online Application:</b>Fill out the application form available on our portal.</li>
          <li><b>Document Submission:</b>Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
          <li><b>Entrance Exam (if applicable):</b>Appear for the college's entrance examination.</li>
          <li><b>Merit List & Interview:</b> Check the merit list and attend the interview if shortlisted.</li>
          <li><b>Fee Payment:</b> Complete the admission by paying the required fees.</li>
        </ol>

        <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our <a href="/coursespage">Courses page</a> or <a href="/contactpage">Contact us</a> directly.</p>
        </div>
    );
};

export default Admission

