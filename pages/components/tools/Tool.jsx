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
        <div className="col-span-1 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 backdrop-blur-sm">
            <Image ref={imgRef} src={image} width={55} height={55} alt={name} />
        </div>
    );
}
