import Headpages from "./Headpages"

export default function Header() {

    const pages = [
        {
            id: 0,
            name: "درباره من",
            address: "#",
        },
        {
            id: 1,
            name: "مهارت / سوابق",
            address: "#",
        },
        {
            id: 2,
            name: "نمونه کارها",
            address: "#",
        },
    ]

    return (

        <div className="grid grid-cols-3 gap-3 w-11/12 h-10">


            {pages.map((page) => (

                <Headpages key={page?.id} pageName={page?.name} pageAddress={page?.address} />

            ))}

        </div>
    )
}