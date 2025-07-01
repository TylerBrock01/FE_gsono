import {Outlet} from "react-router-dom";
import {Link} from 'react-router-dom'

export default function HomeLayout() {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Starkiller Team</title>
            <body className='bg-black min-h-screen'>
                <header className='bg-white font-serif grid p-3 border-black border-b-1'>
                    <h1 className=' text-4xl antialiased italic uppercase font-semibold'>Visita guaymas</h1>
                    <div className="sm:grid md:flex md:justify-between ">
                        <h2 className='italic p-1 flex-col justify-center text-2xl'>Tu guía esencial para encontrar lo mejor. </h2>
                        <Link className='border-black border-2  p-1 rounded-full flex justify-center gap-1' to="/">
                            <h2>Guaymas, Sonora, Mexico</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                            </svg>
                        </Link>
                    </div>
                </header>
                <section className=' bg-white text-cyan-600 p-1 border-black border-b-1 sm:grid md:flex md:justify-between pr-2 pl-2'>
                    <h1 className='font-serif'>Encuentra tu proxima aventura en Guaymas!</h1>
                    <nav className='flex italic md:justify-start gap-2'>
                        <Link className='capitalize underline' to="/">gastronomia</Link>
                        <Link className='capitalize underline' to="/">compras</Link>
                        <Link className='capitalize underline' to="/">experiencia</Link>
                        <Link className='capitalize underline' to="/">servicios</Link>
                    </nav>
                </section>
                <div>
                    <Outlet/>
                </div>
                <footer className='text-white text-center p-2'>
                    <nav className=" grid capitalize">
                        <Link className='text-white' to="/">Home</Link>
                        <Link className='text-white' to="/about">Acerca de nosotros</Link>
                    </nav>
                    <h2>Copyright 2025</h2>
                </footer>
            </body>

        </>
    )
}