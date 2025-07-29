import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react'
import {
    Bars3Icon,
    ShoppingBagIcon,
    BriefcaseIcon,
    CalendarIcon,
    NewspaperIcon,
    PhoneIcon, PhotoIcon, GlobeAmericasIcon,ExclamationTriangleIcon
} from '@heroicons/react/24/solid'
import {Link} from "react-router-dom";
import {scrollToTop} from "../misccomponent/ScrollTop.ts";
import {ButtonStyle} from "../misccomponent/ButtonStyle.ts";

export default function NavBarComponent() {


    const categories = [
        {name: 'gastronomia', icon: GlobeAmericasIcon , id: 'navGastronomy', path:"/gastronomy"},
        {name: 'compras', icon: ShoppingBagIcon, id:'navSales', path:"#"},
        {name: 'experiencia', icon:PhotoIcon, id:'navExperience', path:"#" },
        {name: 'servicios', icon: BriefcaseIcon, id:'navService', path:"#"},
        {name: 'eventos', icon: CalendarIcon, id: 'navShows', path:"#"},
        {name: 'noticias', icon: NewspaperIcon, id: 'navNews', path:"#"},
        {name: 'contacto', icon: PhoneIcon, id: 'navContact', path:"/register"},
        {name: 'test', icon: ExclamationTriangleIcon, id: 'navTest', path:"/test"},
    ]
    return(
        <Popover className='flex items-center p-1'>
            <PopoverButton onClick={scrollToTop} className={" capitalize focus:outline-0  gap-2 rounded-md px-3 py-1 text-sm/6 font-semibold "+ButtonStyle}>
                <Bars3Icon className='h-7 w-7' aria-hidden='true'/>
            </PopoverButton>

            <PopoverPanel
                anchor="bottom end"
                className="animate-slide-in-right md:animate-slide-out-bottom grid md:flex gap-1 mt-3 md:mt-0 focus:outline-0 capitalize rounded-xl bg-cyan-200/60 p-1 text-sm/6 text-white  "
            >

                {categories.map((category) => (
                    <Link id={category.id} to={category.path} className={"flex justify-between md:justify-center gap-1 px-15 md:px-2  rounded-lg  py-4 "+ButtonStyle}>

                        <category.icon className='h-6 w-6'  />
                        <p className='mr-5'>{category.name}</p>
                    </Link>
                ))}
            </PopoverPanel>
        </Popover>

    )
}