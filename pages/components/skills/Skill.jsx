
import Image from "next/image";

export default function Skill({icon , name}) {

    return (

        <div className="col-span-1 rounded-xl flex items-center justify-center">

            <Image src={icon} width={65} height={65} alt="skill" className="skills" id={name} />
        

        </div>

    )
}