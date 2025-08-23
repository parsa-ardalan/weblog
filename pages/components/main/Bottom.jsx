import Link from "next/link";

export default function Bottom() {

    return (

        <div className="w-full h-1/6 flex items-center justify-start pl-4" dir="ltr">

            <Link href={"#"} >

                <h3 className="text-lg text-white/70 text-shadow-sm text-shadow-black duration-400 hover:ml-2"> مشاهده نمونه کارها </h3>

            </Link>

        </div>
    )
}