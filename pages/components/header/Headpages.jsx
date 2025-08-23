import Link from "next/link";

export default function Headpages(props) {

    return (

        <Link href={props?.pageAddress} className="col-span-1 pt-5 select-none">

            <h1 className="text-white text-lg text-center text-shadow-sm text-shadow-black"> {props?.pageName} </h1>

        </Link>
    )
}