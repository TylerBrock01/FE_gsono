import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import {Link} from "react-router-dom";


export default function NavBarComponent() {
    // const categories = [
    //     {name: 'gastronomia', icon: 'food-drink', id: 1, path:"/"},
    //     {name: 'compras', icon: 'shopping-bag', id:2, path:"/"},
    //     {name: 'experiencia', icon: 'xd', id:3, path:"/" },
    //     {name: 'servicios', icon: 'briefcase', id:4, path:"/"},
    //     {name: 'eventos', icon: 'calendar', id: 5, path:"/"},
    //     {name: 'noticias', icon: 'newspaper', id: 6, path:"/"},
    //     {name: 'contacto', icon: 'phone', id: 7, path:"/register"},
    // ]
    return(
        <nav className='flex ' >
            <Menu>
                <MenuButton className="capitalize  items-center gap-2 rounded-md bg-cyan-500 data-open:bg-cyan-800 px-3 py-1 text-sm/6 font-semibold text-white">
                    <Bars3Icon className='h-6 w-6' aria-hidden='true'/>
                </MenuButton>

                <MenuItems
                    transition
                    anchor="bottom end"
                    className="capitalize animate-blurred-fade-in origin-top-right rounded-xl border border-white  p-1 text-sm/6 text-white  "
                >
                    <MenuItem>
                        <Link to='#' className="bg-cyan-500 group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                            xd
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='#' className="bg-cyan-500 group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
                            xd
                        </Link>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </nav>

    )
}