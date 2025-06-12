import React from "react";
import { Link } from "react-router-dom";
import "../pagecss/ContactPage.css"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";


const ContactPage = () => {
    return (
        <div>
            <Header />
             <h2 id="h1">Contact Us</h2>
            <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>

            <h2 id="h2">General Enquiries</h2><hr />
            <h4><b>Vivekanand College Main Campus</b></h4>
            <p>[Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071] India</p>
            <p>Phone: **+91 12345 67890**</p>
            <p>Email: **info@vivekanandcollege.edu**</p>
            <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>

            <h2 id="h3">Admissions Office</h2><hr />
            <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
            <p>Phone: +91 98765 43210</p>
            <p>Email: studentsupport@vivekanandcollege.edu</p>

            <h2 id="h4"><b>Find Us on the Map</b></h2><hr />
            <p> [You can embed a Google Map here later using an iframe or a React map library.] </p>
            <a href="">View on Google Maps</a>

            <h2 id="h5"><b>Send Us a Message</b></h2><hr />
            <p> [A contact form with fields for Name, Email, Subject, Message can be added here.] </p>
            <Footer/>
        </div>
    );
};

export default ContactPage