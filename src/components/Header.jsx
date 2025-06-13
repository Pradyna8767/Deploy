import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return(
        <header id="head">
            <h2 id="vivek">Vivekanand College</h2>
            <nav id="nav">
                <Link to="/" className="color"><b> Home </b></Link>
                <Link to="/aboutpage" className="color"><b> About </b></Link>
                <Link to="/admissionpage" className="color"><b> Admission </b></Link>
                <Link to="/contactpage" className="color"><b> Contact </b></Link>
                <Link to="/coursespage" className="color"><b> Courses </b></Link>
                <button type="button" id="now"><Link to="/admissionpage" className="col"><b> Apply now! </b></Link></button>
            </nav>
        </header>
    )
}

export default Header;