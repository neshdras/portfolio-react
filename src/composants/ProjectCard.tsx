import { Link } from "react-router-dom";

type ProjetCardProps = {
    id: number;
    title: string;
    description: string;
    image: string;

};

const ProjectCard: React.FC<ProjetCardProps> = ({id, title, description, image}) => (
    <div className="project-card">
        <Link data-id={id} to={`/project/${id}`}>
            <h3>{title}</h3>
            <img src={image} alt={title}/>
        </Link>
        <p>{description}</p>
    </div>
);

export default ProjectCard;