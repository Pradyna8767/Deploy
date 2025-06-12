import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return(
        <header >
            <h2 id="vivek">Vivekanand College</h2>
            <nav id="nav">
                <Link to="/homepage"> Home </Link>
                <Link to="/aboutpage"> About </Link>
                <Link to="/admissionpage"> Admission </Link>
                <Link to="/contactpage"> Contact </Link>
                <Link to="/coursespage"> Courses </Link>
                <Link to="/admissionpage"><b>Apply now!</b></Link>
            </nav>
        </header>
    )
}

export default Header