import Image from "next/image";

export default function Tools() {


    const mainSkills = [

        { name: "react", imageLink: "/icons/react.png" },
        { name: "redux", imageLink: "/icons/redux.png" },
        { name: "nextJS", imageLink: "/icons/next.png" }
    ];

    const otherSkills = [

        { name: "tailwind", imageLink: "/icons/tailwind.png" },
        { name: "bootstrap", imageLink: "/icons/bootstrap.png" },
        { name: "vite", imageLink: "/icons/vite.png" },
        { name: "javaScript", imageLink: "/icons/javaScript.png" },
        { name: "nodeJS", imageLink: "/icons/node.png" }
    ];

    return (
        
        <div className="col-span-1 bg-white/10 rounded-2xl pb-4">


            {/* top part */}

            <div className="h-1/2 px-3 pt-4 py-4">

                {/* other skills */}

                <div className="grid grid-cols-3 h-full w-full gap-y-4" dir="ltr">

                    {otherSkills.map((item) => (

                        <div className="flex items-center justify-center">
                            <Image src={item.imageLink} alt={item.name} width={30} height={30} />
                        </div>
                    ))}

                </div>

            </div>


            {/* bottom part */}

            <div className="h-1/2 px-4 pt-5">

                {/* gray div */}

                <div className="grid grid-cols-3 h-full w-full bg-black/40 rounded-xl" dir="ltr">

                    {mainSkills.map((item) => (

                        <div className="flex items-center justify-center">
                            <Image src={item.imageLink} alt={item.name} width={50} height={50} />
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}