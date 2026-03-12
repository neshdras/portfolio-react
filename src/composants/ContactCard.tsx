import { VscGithub } from "react-icons/vsc"
import { TbBrandLinkedinFilled } from "react-icons/tb"
import { MdEmail } from "react-icons/md";

const Contact = () =>{
    return(
        <>
                <div>
                    <ul>
                       <li><a href="https://github.com/neshdras"><VscGithub className='react-icon' /></a></li>
                        <li><a href="https://www.linkedin.com/in/antonin-foret-78955a3a7/"><TbBrandLinkedinFilled className='react-icon' /></a></li>
                        <li><a href="mailto:antoninforet67@gmail.com"><MdEmail className='react-icon'  /></a></li>
                    </ul>
                </div>
        </>
    )
};

export default Contact