import ProjectCard from "../composants/ProjectCard";
import data from '../data/project.json';
import Navbar from "../composants/Header";
import Footer from "../composants/Footer";
import '../styles/project.scss'


const Projects = () => {


    return(
        <>
        <Navbar/>
        <section className="project-section">
            <h2 className="title">Mes projets</h2>


            <div className="project-list">
                {
                    data.map((project) => (
                        <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}

                        />
                    ))
                }
            </div>
        </section>
        <Footer/>
                </>
    );
};

export default Projects;