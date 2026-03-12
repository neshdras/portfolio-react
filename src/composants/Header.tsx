import { Link } from "react-router-dom";
import '../styles/header.scss';

const Navbar = () => (
    <header>
        
        <nav className="navbar">
            <Link to="/">Accueil</Link>
            <Link to="/projects">Projets</Link>
            <Link to="/contact">Contact</Link>
        </nav>
    </header>
);

export default Navbar;