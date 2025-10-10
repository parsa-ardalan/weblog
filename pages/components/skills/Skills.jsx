import Skill from "./Skill";


export default function Skills() {

    const skills = [
        { id: 0, name: "واکنش گرایی", image: "/icons/responsive.png" },
        { id: 1, name: "امنیت و سرعت", image: "/icons/ssr.png" },
        { id: 2, name: "طراحی مدرن", image: "/icons/webIcon.png" }
    ];

    return (


        <div className="grid grid-cols-3 gap-2 w-1/2 h-full pr-2 py-1">

            {
                skills.map((item) =>

                    <Skill key={item.id} name={item.name} icon={item.image} />
                )
            }

        </div>
    )
}