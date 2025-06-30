import {Link} from "react-router-dom";

export default function About() {
    return(
        <>
            <h1 className='bg-purple-500 text-6xl'>Acerca de nosotros</h1>
            <nav className='p-2 bg-gray-400 flex gap-2'>
                <Link className='rounded-full p-1 bg-sky-500 hover:bg-sky-800 hover:text-white' to="/home">Home</Link>
                <Link className='rounded-full p-1 bg-sky-500 hover:bg-sky-800 hover:text-white' to="/home">Home</Link>
                <Link className='rounded-full p-1 bg-sky-500 hover:bg-sky-800 hover:text-white' to="/home">Home</Link>

            </nav>
        </>
    )
}