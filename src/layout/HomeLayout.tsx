import {Outlet} from "react-router-dom";
import {Link} from 'react-router-dom'
import NavBarComponent from "../components/HomeComponent/NavBarComponent.tsx";
import {scrollToTop} from "../components/MiscComponent/ScrollTop.ts";

export default function HomeLayout() {
    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>viva turismo</title>
            <link rel="shortcut icon" href="/src/img/dona.jpg" type="image/x-icon"   />

            <div className=' bg-cyan-800 min-h-screen '>
                <div onClick={scrollToTop} className='sticky z-5 border-1 border-cyan-300 top-0 right-0 left-0 bg-cyan-600 animate-slide-in-top flex justify-between p-1'>
                    <Link  to='/' className=' font-serif text-white  flex text-4xl  italic capitalize font-medium decoration-2 underline underline-offset-3'>
                        viva turismo
                    </Link>
                    <NavBarComponent/>
                </div>
                <header className='animate-blurred-fade-in bg-[url("/src/img/hero.jpg")] bg-cover bg-no-repeat md:bg-right lg:bg-center'>
                    <div className='flex flex-col md:flex-row justify-between md:items-center lg:items-end h-40 md:h-45 font-serif p-2  z-1 bg-black/60 text-white'>
                        <h2 className='italic p-1 text-2xl'>Tu guía esencial para encontrar lo mejor. </h2>
                        <label className="flex justify-end p-1 rounded-full gap-1 bg-cyan-500 text-white capitalize">
                            turismo
                            <Link className='' to="#">
                            </Link>
                        </label>
                    </div>

                </header>
                <h1 className='animate-blurred-fade-in font-serif bg-cyan-500 text-white flex justify-center p-1'>Encuentra tu proxima aventura en Guaymas!</h1>
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