import {Outlet} from "react-router-dom";
import { Link} from 'react-router-dom'

export default function HomeLayout() {
    return (
        <>
            <title>Starkiller Team</title>
            <div className='bg-black min-h-screen'>
                <header className='bg-white font-serif grid p-3 border-black border-b-1'>
                    <h1 className=' text-4xl antialiased italic uppercase font-semibold'>Visita guaymas</h1>
                    <div className="flex justify-between ">
                        <h2 className='italic p-1 flex-col justify-center text-2xl'>Descubriendo negocios </h2>
                        <Link className='border-black border-2  p-1 rounded-full' to="/">Guaymas, Sonora, Mexico</Link>
                    </div>
                </header>
                <section className=' bg-white text-cyan-600 p-1 border-black border-b-1 flex justify-between pr-2 pl-2'>
                    <h1 className='font-serif'>Encuentra tu proxima aventura en Guaymas!</h1>
                    <nav className='flex italic justify-start gap-2'>
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
                    <nav className="grid flex capitalize">
                        <Link className='text-white' to="/">Home</Link>
                        <Link className='text-white' to="/about">Acerca de nosotros</Link>
                    </nav>
                    <h2>Copyright 2025</h2>
                </footer>
            </div>

        </>
    )
}