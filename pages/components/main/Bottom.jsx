import Link from "next/link";

export default function Bottom() {

    return (

        <div className="w-full h-1/6 flex items-center justify-center" dir="ltr">

            <Link href={"#"} >

                <h3 className="text-lg text-white/70 text-shadow-sm text-shadow-black"> مشاهده نمونه کارها </h3>

            </Link>

        </div>
    )
}