import Bottom from "./Bottom"
import Middle from "./Middle"
import Top from "./Top"

export default function Main() {

    return (

        <div className="container mx-auto bg-white/50 rounded-xl w-5/6 h-3/5 mt-52">

            <Top />

            <Middle />

            <Bottom/>
    
        </div>
    )
}