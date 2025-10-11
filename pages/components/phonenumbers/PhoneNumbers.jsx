export default function PhoneNumber() {

    return (

        <div className="flex w-full h-16 mt-6">

            {/* phone numbers */}
            <div className="w-3/4 h-full" dir="ltr">

                <div className="w-full h-1/2 flex items-center justify-start">
                <h1 className="text-md text-white/70 text-shadow-sm text-shadow-black" dir="ltr"> +98 937 563 2332 </h1>
                </div>

                <div className="w-full h-1/2 flex items-center justify-start">
                <h1 className="text-md text-white/70 text-shadow-sm text-shadow-black" dir="ltr"> +98 996 092 5093 </h1>
                </div>

           </div>

            {/* phonenumber logo */}
            <div className="w-1/4 h-full flex items-center justify-center">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-green-700/70">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>

            </div>

        </div>
    )
}