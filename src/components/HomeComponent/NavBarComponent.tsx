import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import {Link} from "react-router-dom";
import {scrollToTop} from "../MiscComponent/ScrollTop.ts";


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
                <MenuButton onClick={scrollToTop} className="capitalize focus:outline-0  gap-2 rounded-md bg-cyan-700  border-1 border-cyan-800 hover:border-cyan-400 px-3 py-1 text-sm/6 font-semibold text-white">
                    <Bars3Icon className='h-6 w-6' aria-hidden='true'/>
                </MenuButton>

                <MenuItems

                    anchor="bottom end"
                    className="animate-slide-in-right grid gap-1 z-5 mt-2 w-70 focus:outline-0 capitalize  rounded-xl bg-cyan-200   p-1 text-sm/6 text-white  "
                >
                    <MenuItem>
                        <Link to='/register' className="bg-cyan-500 group flex  justify-center gap-2 rounded-lg px-3 py-1 border-1 border-cyan-800 hover:border-cyan-400 hover:bg-cyan-800 hover:text-cyan-400">
                            gastronomy
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='#' className="bg-cyan-500 group flex  justify-center gap-2 rounded-lg px-3 py-1 border-1 border-cyan-800 hover:border-cyan-400 hover:bg-cyan-800 hover:text-cyan-400">
                            services
                        </Link>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </nav>

    )
}