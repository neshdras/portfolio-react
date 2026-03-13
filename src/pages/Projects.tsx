import { useEffect, useState } from "react";
import ProjectCard from "../composants/ProjectCard";
import data from '../data/project.json';
import Navbar from "../composants/Header";
import Footer from "../composants/Footer";

type Project ={
    id: number;
    title: string;
    description: string;
    image: string;
    link: string
};
    
const Projects = () => {

    const [project, setProjects] = useState<Project[]>([]);

    useEffect(()=>{
        setProjects(data)
    }, []);


    return(
        <>
        <Navbar/>
        <section>
            <h2>Mes projets</h2>


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