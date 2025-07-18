import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react'
import {
    Bars3Icon,
    ShoppingBagIcon,
    BriefcaseIcon,
    CalendarIcon,
    NewspaperIcon,
    PhoneIcon, PhotoIcon, GlobeAmericasIcon
} from '@heroicons/react/24/solid'
import {Link} from "react-router-dom";
import {scrollToTop} from "../MiscComponent/ScrollTop.ts";

export default function NavBarComponent() {


    const categories = [
        {name: 'gastronomia', icon: GlobeAmericasIcon , id: 1, path:"/"},
        {name: 'compras', icon: ShoppingBagIcon, id:2, path:"/"},
        {name: 'experiencia', icon:PhotoIcon, id:3, path:"/" },
        {name: 'servicios', icon: BriefcaseIcon, id:4, path:"/"},
        {name: 'eventos', icon: CalendarIcon, id: 5, path:"/"},
        {name: 'noticias', icon: NewspaperIcon, id: 6, path:"/"},
        {name: 'contacto', icon: PhoneIcon, id: 7, path:"/register"}
    ]
    return(
        <Popover className='flex items-center'>
            <PopoverButton onClick={scrollToTop} className="capitalize focus:outline-0  gap-2 rounded-md bg-cyan-700  border-1 border-cyan-800 hover:border-cyan-400 px-3 py-1 text-sm/6 font-semibold text-white">
                <Bars3Icon className='h-7 w-7' aria-hidden='true'/>
            </PopoverButton>

            <PopoverPanel
                anchor="bottom end"
                className="animate-slide-in-right grid md:flex gap-1 mt-3 focus:outline-0 capitalize rounded-xl bg-cyan-200/60 p-1 text-sm/6 text-white  "
            >

                {categories.map((category) => (
                    <Link to={category.path} className=" bg-cyan-500 flex justify-between md:justify-center gap-1 px-15 md:px-0  rounded-lg  py-4 border-1 border-cyan-100 hover:border-cyan-400 hover:bg-cyan-800 hover:text-cyan-400">

                        <category.icon className='h-6 w-6'  />
                        <p className='mr-5'>{category.name}</p>
                    </Link>
                ))}
            </PopoverPanel>
        </Popover>

    )
}