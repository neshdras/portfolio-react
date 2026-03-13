import { useEffect, useState } from "react";
import ProjectCard from "../composants/ProjectCard";
import data from '../data/project.json';
import Navbar from "../composants/Header";

type Project ={
    id: number;
    title: string;
    description: string;
    image: string;
};
    
const Projects = () => {

    const [projects, setProjects] = useState<Project[]>([]);
    const [search, setSearch] = useState('');

    useEffect(()=>{
        setProjects(data)
    }, []);

    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <>
        <Navbar/>
        <section>
            <h2>Mes projets</h2>

            <input
                type="text"
                placeholder="Rechercher un projet..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />

            <div className="project-list">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        />
                    ))
                ) : (
                    <p>Aucun projet ne correspond à votre recherche.</p>
                )}
            </div>
        </section>
                </>
    );
};

export default Projects;