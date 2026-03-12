import Footer from '../composants/Footer'
import { VscGithub } from "react-icons/vsc"
import { TbBrandLinkedinFilled } from "react-icons/tb"
import { MdContactMail } from "react-icons/md";
import Navbar from '../composants/Header';

const Contact = () =>{
    return(
        <>
            <Navbar/>
            <main>

                <div>
                    <ul>
                       <li><a href="https://github.com/neshdras"><VscGithub className='react-icon' /></a></li>
                        <li><a href="https://www.linkedin.com/in/antonin-foret-78955a3a7/"><TbBrandLinkedinFilled className='react-icon' /></a></li>
                        <li><a href="mailto:antoninforet67@gmail.com"><MdContactMail className='react-icon' /></a></li>
                    </ul>
                </div>

                
            </main>
            <Footer/>
        </>
    )
};

export default Contact