import  Navbar  from "../composants/Header";
import Footer from "../composants/Footer";
import '../styles/projectSolo.scss'
import data from '../data/project.json'
import { Navigate, useParams } from "react-router-dom";
import { FaGithubSquare, FaExternalLinkSquareAlt } from "react-icons/fa";
import '../styles/projectSolo.scss'

const ProjectSolo = () => {
    const { id } = useParams()
    const projectSolo = id ? data.find((project) => project.id === String(id)): undefined


    if(projectSolo){

        return(
            <>
            <Navbar/>
            <section>
                <h1>{projectSolo?.title} </h1>
                <article>
                    <img src={projectSolo?.image} alt={projectSolo?.title} />
                    <div className="info">
                        <p>{projectSolo?.txt}</p>
                        <div className="link-logo">
                            <a href={projectSolo?.link}><FaGithubSquare  /></a>
                            {projectSolo?.vercel && <a href={projectSolo?.vercel}><FaExternalLinkSquareAlt /></a> }
                        </div>                
                        
                    </div>
                </article>

            </section>
            
            <Footer/>
            </>
        )
    } else return <Navigate to={'*'}/>
}
export default ProjectSolo;