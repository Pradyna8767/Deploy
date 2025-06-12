import { Link } from "react-router-dom"

const Header = () => {
    return(
        <header >
            <Link to="/">Home</Link>
            <Link to="/aboutpage">About</Link>
            <Link to="/admissionpage">Admission</Link>
            <Link to="/contactpage">Contact</Link>
            <Link to="/coursespage">Courses</Link>
        </header>
    )
}

export default Header