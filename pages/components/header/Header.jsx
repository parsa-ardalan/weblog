import Headpages from "./Headpages"

export default function Header() {

    const pages = [
        {
            id: 0,
            name: "درباره من",
            address: "/"
        },
        {
            id: 1,
            name: "مهارت / سوابق",
            address: "/resume"
        },
        {
            id: 2,
            name: "نمونه کارها",
            address: "/templates"
        },
    ]


    return (

        <div className="grid grid-cols-3 gap-3 w-11/12 mx-auto h-16 rounded-xl">


            {pages.map((page) => (

                <Headpages key={page?.id} pageName={page?.name} pageAddress={page?.address} />

            ))}

        </div>
    )
}