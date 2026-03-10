type ProjetCardProps = {
    title: string;
    description: string;
    image: string;
};

const ProjectCard: React.FC<ProjetCardProps> = ({ title, description, image }) => (
    <div className="project-card">
        <img src={image} alt="{title}"/>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default ProjectCard;