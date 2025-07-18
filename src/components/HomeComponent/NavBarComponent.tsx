import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react'
import {
    Bars3Icon,
    ShoppingBagIcon,
    BriefcaseIcon,
    CalendarIcon,
    NewspaperIcon,
    PhoneIcon, PhotoIcon
} from '@heroicons/react/24/solid'
import {Link} from "react-router-dom";
import {scrollToTop} from "../MiscComponent/ScrollTop.ts";

export default function NavBarComponent() {


    const categories = [
        {name: 'gastronomia', icon: Bars3Icon, id: 1, path:"/"},
        {name: 'compras', icon: ShoppingBagIcon, id:2, path:"/"},
        {name: 'experiencia', icon:PhotoIcon, id:3, path:"/" },
        {name: 'servicios', icon: BriefcaseIcon, id:4, path:"/"},
        {name: 'eventos', icon: CalendarIcon, id: 5, path:"/"},
        {name: 'noticias', icon: NewspaperIcon, id: 6, path:"/"},
        {name: 'contacto', icon: PhoneIcon, id: 7, path:"/register"}
    ]
    return(
        <nav className='flex ' >
            <Popover>
                <PopoverButton onClick={scrollToTop} className="capitalize focus:outline-0  gap-2 rounded-md bg-cyan-700  border-1 border-cyan-800 hover:border-cyan-400 px-3 py-1 text-sm/6 font-semibold text-white">
                    <Bars3Icon className='h-6 w-6' aria-hidden='true'/>
                </PopoverButton>

                <PopoverPanel
                    anchor="bottom end"
                    className="animate-slide-in-right grid gap-1 z-5 mt-2 w-70 focus:outline-0 capitalize  rounded-xl bg-cyan-200   p-1 text-sm/6 text-white  "
                >

                    {categories.map((category) => (
                        <label className="bg-cyan-500 flex  justify-between gap-2 rounded-lg  py-1 border-1 border-cyan-100 hover:border-cyan-400 hover:bg-cyan-800 hover:text-cyan-400">
                            {/*<Bars3Icon className='h-6 w-6'/>*/}
                            <category.icon className='h-6 w-6 ml-5'   />
                            <p>{category.name}</p>
                            <Link to={category.path}></Link>
                        </label>
                    ))}
                </PopoverPanel>
            </Popover>
        </nav>

    )
}