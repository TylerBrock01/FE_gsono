import {NavLink} from "react-router-dom";

export default function NavBarComponent() {
    const categories = [
        {name: 'gastronomia', icon: 'food-drink', id: 1, path:"/"},
        {name: 'compras', icon: 'shopping-bag', id:2, path:"/"},
        {name: 'experiencia', icon: 'xd', id:3, path:"/" },
        {name: 'servicios', icon: 'briefcase', id:4, path:"/"},
        {name: 'eventos', icon: 'calendar', id: 5, path:"/"},
        {name: 'noticias', icon: 'newspaper', id: 6, path:"/"},
        {name: 'contacto', icon: 'phone', id: 7, path:"/register"},
    ]
    return(
        <nav className=' animate-blurred-fade-in bg-white grid p-1'>
            <ul className='grid grid-cols-2 md:flex md:justify-evenly lg:justify-center gap-2 italic '>
                {categories.map((category) => ( // Itera sobre el array de categorías
                    <li key={category.id}>
                        <NavLink
                            to={category.path} // ¡Usa category.path, no Link.path!
                            end={category.path === '/'} // ¡Usa category.path, no Link.path!
                            className='flex justify-center capitalize rounded-md p-1 bg-cyan-500 text-white' // Usa la función de estilos
                        >
                            <span>{category.name}</span> {/* El texto del link */}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}