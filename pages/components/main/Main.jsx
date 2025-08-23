import Bottom from "./Bottom"
import Middle from "./Middle"
import Top from "./Top"

export default function Main() {

    return (

        <div className="container mx-auto bg-black-10 backdrop-blur-xs border border-white rounded-xl w-3/4 h-3/5 mt-36">

            <Top />

            <Middle />

            <Bottom/>
    
        </div>
    )
}