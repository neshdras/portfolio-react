type SkillProps = {
    name: string;
    img: string;
}

const SkillCard: React.FC<SkillProps> = ({ name, img }) => (
        <article className="skill-card">
            <span className="logo-wrapper" data-name={name}><img src={img} height="70" alt={name}/></span>
        </article>
);

export default SkillCard;
