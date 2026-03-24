import  Navbar  from "../composants/Header";
import Footer from "../composants/Footer";
import '../styles/projectSolo.scss'
import data from '../data/project.json'
import { useParams } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
const ProjectSolo = () => {
    const { id } = useParams()
    const projectSolo = id ? data.find((project) => project.id === Number(id)): undefined
    console.log(projectSolo)
    return(
        <>
        <Navbar/>
        <section>
            <h1>{projectSolo?.title}</h1>
            <p>{projectSolo?.description}</p>
            <img src={projectSolo?.image} alt="" />
            <p>{projectSolo?.txt}</p>
            <a href={projectSolo?.link}><FaGithubSquare /></a>
        </section>
        
        <Footer/>
        </>
    )
}
export default ProjectSolo;