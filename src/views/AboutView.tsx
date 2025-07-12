import {Link} from "react-router-dom";

export default function AboutView() {
    return(
        <>
            <h1 className='bg-purple-500 text-6xl'>Acerca de nosotros</h1>
            <nav className='p-2 bg-gray-400 flex gap-2'>
                <Link className='rounded-full p-1 bg-sky-500 hover:bg-sky-800 hover:text-white' to="/">Home</Link>

            </nav>
        </>
    )
}