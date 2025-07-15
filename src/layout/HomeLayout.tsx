import {NavLink, Outlet} from "react-router-dom";
import {Link} from 'react-router-dom'
import { MapPin } from 'lucide-react';

export default function HomeLayout() {
    const categories = [
        {name: 'gastronomia', icon: 'food-drink', id: 1, path:"/register"},
        {name: 'compras', icon: 'shopping-bag', id:2, path:"/"},
        {name: 'experiencia', icon: 'xd', id:3, path:"/" },
        {name: 'servicios', icon: 'briefcase', id:4, path:"/"},
        {name: 'eventos', icon: 'calendar', id: 5, path:"/"},
        {name: 'noticias', icon: 'newspaper', id: 6, path:"/"},
        {name: 'contacto', icon: 'phone', id: 7, path:"/"},
    ]
    const categoryStyle = 'capitalize p-2 rounded-full bg-cyan-500'

    return (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>vive guaymas</title>
            <link rel="shortcut icon" href="/src/img/dona.jpg" type="image/x-icon"   />
            <div className=' min-h-screen'>
                <header className=' bg-[url("/src/img/hero.jpg")] bg-cover bg-no-repeat md:bg-right lg:bg-center'>
                    <div className='lg:h-45 font-serif grid p-3 border-black border-b-1 z-1 bg-black/60 text-white'>
                        <h1 className=' text-4xl  italic capitalize font-semibold'>vive guaymas</h1>
                        <h2 className='italic p-1 flex-col justify-center text-2xl underline'>Tu guía esencial para encontrar lo mejor. </h2>
                        <div className="row-start-1 md:row-start-3 flex">
                            <Link className='p-1 py-2 rounded-full flex justify-center items-center gap-1 bg-cyan-500' to="/register">
                                <h2>Guaymas, Sonora, Mexico</h2>
                                <MapPin></MapPin>
                            </Link>
                        </div>
                    </div>

                </header>
                <nav className=' bg-white p-1 py-2 border-black border-b-1 sm:grid md:flex md:justify-between pr-2 pl-2'>
                    <h1 className='font-serif text-cyan-600 flex justify-center items-center'>Encuentra tu proxima aventura en Guaymas!</h1>
                    <ul className='flex italic md:justify-start gap-2 text-gray-100 p-1'>
                        {categories.map((category) => ( // Itera sobre el array de categorías
                            <li key={category.id}>
                                <NavLink
                                    to={category.path} // ¡Usa category.path, no Link.path!
                                    end={category.path === '/'} // ¡Usa category.path, no Link.path!
                                    className={categoryStyle} // Usa la función de estilos
                                >
                                    <span>{category.name}</span> {/* El texto del link */}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
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