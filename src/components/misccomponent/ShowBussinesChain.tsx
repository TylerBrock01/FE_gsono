import {bussinesStore} from "../../typesModel/Store.ts";
import {card} from "./CardStyle.ts";
import {BuildingStorefrontIcon, MapIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";
import {ButtonStyle} from "./ButtonStyle.ts";

export default function ShowBussinesChain() {

    // 5. Renderiza los datos o un mensaje si no hay datos
    return (
        <>
            {bussinesStore.map((category) => (
                <article className={card}>
                    <label className='bg-cyan-500 rounded-md flex gap-1 p-1 '>
                        <BuildingStorefrontIcon className=' text-white h-9'></BuildingStorefrontIcon>
                        <h1 className='text-2xl capitalize font-serif flex items-center'>{category.name}</h1>
                    </label>
                    <div className='grid-cols-2 grid gap-1'>
                        <section className='grid gap-1'>
                            <img className='h-45 w-50 rounded-md'
                                 src={'https://as1.ftcdn.net/v2/jpg/04/19/31/50/1000_F_419315027_H0G3ycDGIsUlD9OvzQfqyylqxQKgrOMy.jpg'}
                                 alt='dona'/>
                            <div className='grid gap-1'>
                                <Link to='#'
                                      className='py-1 rounded-md bg-blue-500 border-black/60 border-1 flex justify-center capitalize'>facebook</Link>
                                <Link to='#'
                                      className='py-1 rounded-md bg-pink-500 border-black/60 border-1 flex justify-center capitalize'>instagram</Link>

                            </div>

                        </section>
                        <article className='grid'>
                            <p className='bg-cyan-500 p-1 rounded-md'>{category.description}</p>
                            <p className=' m-1 rounded-md capitalize grid items-center '>#{category.chain}</p>
                            <Link to={category.location} className={ButtonStyle + "mt-1 rounded-md py-1 flex justify-center capitalize text-md items-center gap-1"}>
                                <MapIcon className='h-8'></MapIcon>Visitanos!</Link>
                        </article>

                    </div>
                </article>
            ))}
        </>
    )
}