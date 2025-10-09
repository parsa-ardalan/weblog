import Tool from "./Tool"

export default function Tools() {

    const tools = [
        { id: 0, name: "React", image: "/icons/react.png" },
        { id: 1, name: "next", image: "/icons/next.png" },
        { id: 2, name: "redux", image: "/icons/redux.png" },
    ]

    return (

        <div className="grid grid-cols-3 h-1/5 w-full gap-2 py-2" dir="ltr">

            {
                tools.map((item) => (
                    <Tool key={item.id} name={item.name} image={item.image} />
                ))
            }

        </div>
    )
}