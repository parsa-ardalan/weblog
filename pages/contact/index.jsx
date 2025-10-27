import Header from "../components/header/Header";
import PhoneNumber from "../components/phonenumbers/PhoneNumbers";
import Platforms from "../components/platforms/Platforms";

export default function Contact() {

    return (

        <div className="w-screen h-screen pt-10 px-5 md:px-20" dir="rtl">

            <Header />

            <div className="w-full h-1/6 mt-10 pt-4 pr-5">

                <h1 className="text-2xl text-white/70 text-shadow-sm text-shadow-black"> ارتباط با ما</h1>

                <p className="text-sm text-white/70 text-shadow-sm text-shadow-black mt-2 md:text-lg">
                    از طریق راه های ارتباطی زیر با ما در تماس باشید.
                </p>

            </div>

            <Platforms />

            <PhoneNumber />

        </div>
    )
}