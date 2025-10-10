import Image from "next/image";

export default function Tool(props) {

    return (

        <div className="col-span-1 bg-white/20 rounded-xl flex items-center justify-center duration-400 hover:bg-white/30 backdrop-blur-xs">
            <Image src={props?.image} width={55} height={55} alt={props?.name} />
        </div>
    )
}