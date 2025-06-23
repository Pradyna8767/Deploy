import React from "react";
import { Link } from "react-router-dom";
import "../pagecss/ContactPage.css"
import Footer from "../components/Footer/Footers";
import Headers from "../components/Headers";


const ContactPage = () => {
    return (
        <div id="tact">
            <Headers />
             <h2 id="compo">Contact Us</h2>
             <p className="para4">We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>
            
            <hr />
             <h2 id="compo">General Enquiries</h2>
             <h4 className="para4"><b>Vivekanand College Main Campus</b></h4>
             <p className="para4">[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071] India</p>
             <p className="para4">Phone: **+91 12345 67890**</p>
             <p className="para4">Email: **info@vivekanandcollege.edu**</p>
             <p className="para4">Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>

            <hr />
             <h2 id="compo">Admissions Office</h2>
             <p className="para4">For all admission-related queries regarding undergraduate or postgraduate programs:</p>
             <p className="para4">Phone: +91 98765 43210</p>
             <p className="para4">Email: studentsupport@vivekanandcollege.edu</p>

            <hr />
             <h2 id="compo"><b>Find Us on the Map</b></h2>
             <p className="para4"> [You can embed a Google Map here later using an iframe or a React map library.] </p>

            <hr />
             <h2 id="compo"><b>Send Us a Message</b></h2>
             <p className="para4"> [A contact form with fields for Name, Email, Subject, Message can be added here.] </p>
        </div>
    );
};

export default ContactPage