import Header from "../components/header/Header";
import Projects from "../components/projects/Projects";
import RecentProjects from "../components/recent-projects/Projects";

export default function templates() {

    return (

        <div className="w-screen h-screen pt-10 px-5" dir="rtl">

            <Header />

            <div className="w-full h-1/2 mt-10 pt-4 px-5">
                <h1 className="text-2xl text-white/70 text-shadow-sm text-shadow-black"> جدیدترین پروژه ها </h1>

                <RecentProjects />
            </div>

            <div className="w-full h-1/4">

                <Projects />
            </div>

        </div>
    )
}