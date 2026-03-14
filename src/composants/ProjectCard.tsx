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
        </a>
            <p>{description}</p>
    </div>
);

export default ProjectCard;