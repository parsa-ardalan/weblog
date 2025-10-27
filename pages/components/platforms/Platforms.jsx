import Platform from "./Platform"

export default function Platforms() {

    const platforms = [
        { id: 0, name: "telegram", link: "#", icon: "/icons/platforms/telegram.png" },
        { id: 1, name: "whatsapp", link: "#", icon: "/icons/platforms/whatsapp.png" },
        { id: 2, name: "instagram", link: "#", icon: "/icons/platforms/instagram.png" },
        { id: 3, name: "facebook", link: "#", icon: "/icons/platforms/facebook.png" }
    ];

    return (

        <div className="grid grid-cols-4 gap-3 px-3 w-full h-auto mt-3 md:w-1/2 md:pl-20 md:mt-5">

            {
                platforms.map((item) => (
                    <Platform key={item.id} name={item.name} image={item.icon} url={item.link} />
                ))
            }
        </div>
    )
}