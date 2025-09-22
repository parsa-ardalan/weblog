export default function Headpages(props) {

    return (

        <a href={props?.pageAddress} className="col-span-1 pt-5 select-none">

            <h1 className="text-white text-lg text-center text-shadow-sm text-shadow-black"> {props?.pageName} </h1>

        </a>
    )
}