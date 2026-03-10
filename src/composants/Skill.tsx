import { useEffect, useState } from "react";
import devskill from '../data/skill.json';
import  SkillCard  from "./SkillCard";
import '../styles/skill.scss'

type Skill = {
    id: number;
    name: string;
    img: string;
}

const ListSkill = () => {
    const [skill, setSkill] = useState<Skill[]>([]);

    useEffect(()=>{
        setSkill(devskill)
    }, []);

    return (
            <>
            {skill.map((item)=>(
                <SkillCard
                    key={item.id}
                    name={item.name}
                    img={item.img}
                />
            ))}
            </>
    )

}


export default ListSkill;