import Link from "next/link";

export default function Project(props) {

    const project = {

        name: props?.name,
        info: props?.info,
        images: [props?.p1, props?.p2, props?.p3, props?.p4],
        link: props?.source
    }

    return (

        <Link
            href={{
                pathname: `/project/${props?.name}`,
                query: { data: JSON.stringify(project) }
            }}
            className="project col-span-4 flex shadow-sm shadow-white/50 rounded-sm" id={props?.id}
        >

            {/* project icon */}
            < div className="w-1/4 flex items-center justify-center" >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className="size-7 text-white/50">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>

            </div >


            <div className="w-3/4">

                {/* project name */}
                <div className="px-3 flex items-end justify-start h-1/2 w-full">

                    <h1 className="text-white/70 text-lg"> {props?.name} </h1>

                </div>


                {/* project info */}
                <div className="px-3 flex items-start justify-start h-1/2 w-full">

                    <p className="truncate text-white/70 text-sm"> {props?.info} </p>

                </div>

            </div>


        </Link >

    )
}