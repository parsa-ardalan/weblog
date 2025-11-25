import { Typewriter } from 'react-simple-typewriter'

export default function Resume() {

    return (

        <h1 className='text-white text-sm'>


            <Typewriter
                words={[
                    'برنامه نویس فرانت اند. سه سال سابقه در حوزه وب و فراگیری مبانی UI / UX. دارای مدرک بین المللی و رسمی برنامه نویسی از دانشگاه هاروارد امریکا.'
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={1000}
            />

        </h1>
    )
}
