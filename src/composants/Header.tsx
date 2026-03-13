import { Link } from "react-router-dom";
import '../styles/header.scss';
import Contact from "./ContactCard";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {

        const [toggle, setToggle] = useState(false)

        const handleBurger = () => {
            setToggle(!toggle)
        }
    return (
            <header>
                <a href="/"><img src="/img/poro.jpg" alt="logo" height="75" /></a>

                <nav className={`navbar ${toggle} ? "active" : "" `}>
                    <Link to="/">Accueil</Link>
                    <Link to="/projects">Projets</Link>
                </nav>
                <Contact/>
                <div><RxHamburgerMenu className="burger-menu" onClick={handleBurger}/></div>
            </header>
        )
};

export default Navbar;