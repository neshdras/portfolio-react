import { useEffect, useState } from "react";
import TrainCard from "./TrainingCard";
import data  from "../data/school.json";
import '../styles/train.scss'

type Train = {
    id: number
    school: string;
    website: string
    curriculum: string;
    year: number;
}

const TrainList = () =>{
    const [train, setTrain] = useState<Train[]>([]);
    useEffect(()=>{
        setTrain(data)
    }, []);

    return(
        <>
            {train.map((item)=>(
                <TrainCard
                key={item.id}
                school={item.school}
                website={item.website}
                curriculum={item.curriculum}
                year={item.year}
                />
            ))}
        </>
    )
}

export default TrainList;