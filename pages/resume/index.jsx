import Header from "../components/header/Header";
import Skills from "../components/resume/Skills";
import Tools from "../components/resume/Tools";

export default function Resume() {


    return (

        <div className="w-screen h-screen pt-7" dir="rtl">

            <Header />

            <div className="container mx-auto grid grid-cols-1 gap-y-3 py-6 px-4 bg-black-10 backdrop-blur-xs border border-white rounded-xl w-3/4 h-3/5 mt-36 overflow-y-scroll">

                {/* text info and skills */}

                <Skills />


                {/* tools and logos */}

                <Tools />

            </div>

        </div>

    )
}