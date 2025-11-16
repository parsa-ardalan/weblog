import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Tool({ name, image }) {

    const imgRef = useRef(null);

    useEffect(() => {
        if (name === "React" && imgRef.current) {
            imgRef.current.classList.add("animate-spin", "slow");
        }
    }, [name]);

    return (
        <div className="col-span-1 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/30 duration-300 backdrop-blur-sm md:col-span-3">
            <Image ref={imgRef} src={image} width={55} height={55} alt={name} className="lg:w-[70px] lg:h-[70px] hover:w-[80px] hover:h-[80px] duration-500" />
        </div>
    );
}
