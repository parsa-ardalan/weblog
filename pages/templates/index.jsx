import Header from "../components/header/Header";
import projects from "@/data/top-projects.json"
import Project from "../components/project/Project";

export default function templates() {

    const title = "پروژه ها و نمونه کارها";

    return (

        <div className="w-screen h-screen pt-10 px-5 md:px-20 overflow-hidden" dir="rtl">

            <Header />

            {/* container div */}
            <div className="h-full flex items-center justify-center">


                {/* main division */}
                <div className="h-4/5 w-full">


                    {/* top part */}
                    <div className=" w-full h-1/6 flex items-center justify-start px-5">

                        <div className="h-1 w-8 bg-green-700/70 rounded-lg"> </div>

                        <h1 className="text-white/70 text-xl mr-3">  {title} </h1>
                    </div>

                    {/* projects div */}
                    <div className="grid grid-cols-4 w-full h-4/6 py-5 px-10 gap-5">

                        {
                            projects.map((item) =>

                                <Project key={item.id} id={item.user}
                                    name={item.name} source={item.github}
                                    info={item.info}
                                    photo={item.photo} p1={item.photo1} p2={item.photo2} p3={item.photo3} p4={item.photo4}
                                />
                            )
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}