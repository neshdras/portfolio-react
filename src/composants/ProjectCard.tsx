type ProjetCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
};

const ProjectCard: React.FC<ProjetCardProps> = ({ title, description, image, link }) => (
    <div className="project-card">
        <a href={link}>
            <h3>{title}</h3>
            <img src={image} alt={title}/>
            <p>{description}</p>
        </a>
    </div>
);

export default ProjectCard;