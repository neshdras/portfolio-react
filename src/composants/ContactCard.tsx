import { VscGithub } from "react-icons/vsc"
import { TbBrandLinkedinFilled } from "react-icons/tb"
import { MdEmail } from "react-icons/md";

const Contact = () =>{
    return(
        <>
                <div className="contact">
                    <ul>
                       <li><a href="https://github.com/neshdras"><VscGithub className='react-icon' /></a></li>
                        <li><a href="https://www.linkedin.com/in/antonin-foret-78955a3a7/"><TbBrandLinkedinFilled className='react-icon' /></a></li>
                        <li className="tooltip"><MdEmail className='react-icon'/><span className="tooltiptext">antoninforet67@gmail.com</span></li>
                    </ul>
                </div>
        </>
    )
};



export default Contact