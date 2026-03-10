type Train = {
    school: string;
    website: string;
    curriculum: string;
    year: number;
}

const TrainCard: React.FC<Train> = ({ school, website, curriculum, year }) => (
        <article className="train-card">
            <h3>{curriculum}</h3>
            <a href={website}>{school}</a>
            <p>{year}</p>
        </article>
);

export default TrainCard;
