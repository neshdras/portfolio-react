import { Link } from "react-router-dom";
import '../styles/header.scss';
import Contact from "./ContactCard";


const Navbar = () => (
    <header>
        <a href="/"><img src="/img/poro.jpg" alt="logo" height="75" /></a>
        <nav className="navbar">
            <Link to="/">Accueil</Link>
            <Link to="/projects">Projets</Link>
        </nav>
            <Contact/>
            <a href="mailto:"></a>
    </header>
);

export default Navbar;