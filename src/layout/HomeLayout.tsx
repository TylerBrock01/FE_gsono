import {Outlet} from "react-router-dom";
import {Link} from 'react-router-dom'

export default function HomeLayout() {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Starkiller Team</title>
            <link rel="shortcut icon" href="/src/img/dona.jpg" type="image/x-icon"   />
            <div className='bg-black min-h-screen'>
                <header className=' bg-[url("/src/img/hero.jpg")] bg-cover bg-no-repeat md:bg-right lg:bg-center'>
                    <div className='lg:h-45 font-serif grid p-3 border-black border-b-1 z-1 bg-black/60 text-white'>
                        <h1 className=' text-4xl  italic capitalize font-semibold'>explora guaymas</h1>
                        <h2 className='italic p-1 flex-col justify-center text-2xl underline'>Tu guía esencial para encontrar lo mejor. </h2>
                        <div className="row-start-1 md:row-start-3 flex">
                            <Link className='p-1 rounded-full flex justify-center items-center gap-1 bg-cyan-500' to="/register">
                                <h2>Guaymas, Sonora, Mexico</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>

                </header>
                <section className=' bg-white p-1 border-black border-b-1 sm:grid md:flex md:justify-between pr-2 pl-2'>
                    <h1 className='font-serif text-cyan-600 flex justify-center items-center'>Encuentra tu proxima aventura en Guaymas!</h1>
                    <nav className='flex italic md:justify-start gap-2 text-gray-100'>
                        <Link className='capitalize p-1 rounded-full bg-cyan-500' to="/">gastronomia</Link>
                        <Link className='capitalize p-1 rounded-full bg-cyan-500' to="/">compras</Link>
                        <Link className='capitalize p-1 rounded-full bg-cyan-500' to="/">experiencia</Link>
                        <Link className='capitalize p-1 rounded-full bg-cyan-500' to="/">servicios</Link>
                    </nav>
                </section>
                <div>
                    <Outlet/>
                </div>
                <footer className='text-white p-2'>
                    <nav className=" grid justify-center capitalize gap-1">
                        <Link className='text-white bg-cyan-800  flex justify-center rounded-full' to="/">Home</Link>
                        <Link className='text-white bg-gray-400' to="/about">Acerca de nosotros</Link>
                        <h2 className='flex justify-center'>Copyright 2025</h2>

                    </nav>
                </footer>
            </div>

        </>
    )
}