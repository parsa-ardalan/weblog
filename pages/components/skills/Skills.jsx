import Skill from "./Skill";


export default function Skills() {

    const skills = [
        { id: 0, name: "responsive", image: "/icons/attrebutes/responsive.png" },
        { id: 1, name: "ssr", image: "/icons/attrebutes/ssr.png" },
        { id: 2, name: "fast", image: "/icons/attrebutes/fast.png" }
    ];

    return (


        <div className="grid grid-cols-3 gap-2 w-full h-1/6 mt-3 p-2 md:w-1/4">

            {skills.map((index) => <Skill key={index.id} icon={index.image} name={index.name} />)}

           
        </div>
    )
}