import { Link} from 'react-router-dom'

export default function Home() {
    return(
        <>
            <h1 className='bg-green-500 text-6xl'>Bienvenido a</h1>

            <nav className='p-2 bg-gray-400 flex gap-2'>
                <Link className='rounded-full p-1 bg-sky-500 hover:bg-sky-800 hover:text-white' to="/about">acerca de nosotros</Link>
                <Link className='rounded-full p-1 bg-sky-500 hover:bg-sky-800 hover:text-white' to="/about">acerca de nosotros</Link>
                <Link className='rounded-full p-1 bg-sky-500 hover:bg-sky-800 hover:text-white' to="/about">acerca de nosotros</Link>
                <Link className='rounded-full p-1 bg-sky-500 hover:bg-sky-800 hover:text-white' to="/about">acerca de nosotros</Link>

            </nav>
        </>
    )
}