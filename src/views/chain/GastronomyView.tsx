import TittleComponent from "../../components/TittleComponent.tsx";
import {BuildingStorefrontIcon, MapIcon} from "@heroicons/react/24/solid";
import {Link} from "react-router-dom";
import {ButtonStyle} from "../../components/misccomponent/ButtonStyle.ts";
import {card} from "../../components/misccomponent/CardStyle.ts";

export default function GastronomyView() {
    return(
        <>
            {<TittleComponent>Gastronomia</TittleComponent>}
            <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-cyan-700 '>
                {/**/}
                <article className={card}>
                    <label className='bg-cyan-500 rounded-md flex gap-1 p-1 '>
                        <BuildingStorefrontIcon className=' text-white h-9'></BuildingStorefrontIcon>
                        <h1 className='text-2xl capitalize font-serif flex items-center'>enson</h1>
                    </label>
                    <div className='grid-cols-2 grid gap-1'>
                        <section className='grid gap-1'>
                            <img className='h-45 w-50 rounded-md' src={'https://as1.ftcdn.net/v2/jpg/04/19/31/50/1000_F_419315027_H0G3ycDGIsUlD9OvzQfqyylqxQKgrOMy.jpg'} alt='dona'/>
                            <div className='grid gap-1'>
                                <Link to='#' className='py-1 rounded-md bg-blue-500 border-black/60 border-1 flex justify-center capitalize'>facebook</Link>
                                <Link to='#' className='py-1 rounded-md bg-pink-500 border-black/60 border-1 flex justify-center capitalize'>instagram</Link>

                            </div>

                        </section>
                        <article className='grid'>
                            <p className='bg-cyan-500 p-1 rounded-md'>
                                Cras pharetra tempus imperdiet. Aenean at varius elit. Vestibulum tincidunt sapien eu turpis ornare, vitae efficitur nunc euismod.                     </p>
                            <Link to='#' className={ButtonStyle +"mt-1 rounded-md py-1 flex justify-center capitalize text-md items-center gap-1"}> <MapIcon className='h-8'></MapIcon>Visitanos!</Link>
                        </article>

                    </div>
                </article>
                <article className={card}>
                    <label className='bg-cyan-500 rounded-md flex gap-1 p-1 '>
                        <BuildingStorefrontIcon className=' text-white h-9'></BuildingStorefrontIcon>
                        <h1 className='text-2xl capitalize font-serif flex items-center'>enson</h1>
                    </label>
                    <div className='grid-cols-2 grid gap-1'>
                        <section className='grid gap-1'>
                            <img className='h-45 rounded-md' src={'https://as2.ftcdn.net/v2/jpg/16/07/53/33/1000_F_1607533383_jLO5VUxjOs67tufUer2ZUXbBPye6YXlV.jpg'} alt='dona'/>
                            <div className='grid gap-1'>
                                <Link to='#' className='py-1 rounded-md bg-blue-500 border-black/60 border-1 flex justify-center capitalize'>facebook</Link>
                                <Link to='#' className='py-1 rounded-md bg-pink-500 border-black/60 border-1 flex justify-center capitalize'>instagram</Link>

                            </div>

                        </section>
                        <article className='grid'>
                            <p className='bg-cyan-500 p-1 rounded-md'>
                                Cras pharetra tempus imperdiet. Aenean at varius elit. Vestibulum tincidunt sapien eu turpis ornare, vitae efficitur nunc euismod.                     </p>
                            <Link to='#' className={ButtonStyle +"mt-1 rounded-md py-1 flex justify-center capitalize text-md items-center gap-1"}> <MapIcon className='h-8'></MapIcon>Visitanos!</Link>
                        </article>

                    </div>
                </article>
                <article className={card}>
                    <label className='bg-cyan-500 rounded-md flex gap-1 p-1 '>
                        <BuildingStorefrontIcon className=' text-white h-9'></BuildingStorefrontIcon>
                        <h1 className='text-2xl capitalize font-serif flex items-center'>enson</h1>
                    </label>
                    <div className='grid-cols-2 grid gap-1'>
                        <section className='grid gap-1'>
                            <img className='h-auto rounded-md' src={'/src/img/dona.jpg'} alt='dona'/>
                            <div className='grid gap-1'>
                                <Link to='#' className='py-1 rounded-md bg-blue-500 border-black/60 border-1 flex justify-center capitalize'>facebook</Link>
                                <Link to='#' className='py-1 rounded-md bg-pink-500 border-black/60 border-1 flex justify-center capitalize'>instagram</Link>

                            </div>

                        </section>
                        <article className='grid'>
                            <p className='bg-cyan-500 p-1 rounded-md'>
                                Cras pharetra tempus imperdiet. Aenean at varius elit. Vestibulum tincidunt sapien eu turpis ornare, vitae efficitur nunc euismod.                     </p>
                            <Link to='#' className={ButtonStyle +"mt-1 rounded-md py-1 flex justify-center capitalize text-md items-center gap-1"}> <MapIcon className='h-8'></MapIcon>Visitanos!</Link>
                        </article>

                    </div>
                </article>
                <article className={card}>
                    <label className='bg-cyan-500 rounded-md flex gap-1 p-1 '>
                        <BuildingStorefrontIcon className=' text-white h-9'></BuildingStorefrontIcon>
                        <h1 className='text-2xl capitalize font-serif flex items-center'>enson</h1>
                    </label>
                    <div className='grid-cols-2 grid gap-1'>
                        <section className='grid gap-1'>
                            <img className='h-auto rounded-md' src={'/src/img/dona.jpg'} alt='dona'/>
                            <div className='grid gap-1'>
                                <Link to='#' className='py-1 rounded-md bg-blue-500 border-black/60 border-1 flex justify-center capitalize'>facebook</Link>
                                <Link to='#' className='py-1 rounded-md bg-pink-500 border-black/60 border-1 flex justify-center capitalize'>instagram</Link>

                            </div>

                        </section>
                        <article className='grid'>
                            <p className='bg-cyan-500 p-1 rounded-md'>
                                Cras pharetra tempus imperdiet. Aenean at varius elit. Vestibulum tincidunt sapien eu turpis ornare, vitae efficitur nunc euismod.                     </p>
                            <Link to='#' className={ButtonStyle +"mt-1 rounded-md py-1 flex justify-center capitalize text-md items-center gap-1"}> <MapIcon className='h-8'></MapIcon>Visitanos!</Link>
                        </article>

                    </div>
                </article>
                <article className={card}>
                    <label className='bg-cyan-500 rounded-md flex gap-1 p-1 '>
                        <BuildingStorefrontIcon className=' text-white h-9'></BuildingStorefrontIcon>
                        <h1 className='text-2xl capitalize font-serif flex items-center'>enson</h1>
                    </label>
                    <div className='grid-cols-2 grid gap-1'>
                        <section className='grid gap-1'>
                            <img className='h-auto rounded-md' src={'/src/img/dona.jpg'} alt='dona'/>
                            <div className='grid gap-1'>
                                <Link to='#' className='py-1 rounded-md bg-blue-500 border-black/60 border-1 flex justify-center capitalize'>facebook</Link>
                                <Link to='#' className='py-1 rounded-md bg-pink-500 border-black/60 border-1 flex justify-center capitalize'>instagram</Link>

                            </div>

                        </section>
                        <article className='grid'>
                            <p className='bg-cyan-500 p-1 rounded-md'>
                                Cras pharetra tempus imperdiet. Aenean at varius elit. Vestibulum tincidunt sapien eu turpis ornare, vitae efficitur nunc euismod.                     </p>
                            <Link to='#' className={ButtonStyle +"mt-1 rounded-md py-1 flex justify-center capitalize text-md items-center gap-1"}> <MapIcon className='h-8'></MapIcon>Visitanos!</Link>
                        </article>

                    </div>
                </article>
                <article className={card}>
                    <label className='bg-cyan-500 rounded-md flex gap-1 p-1 '>
                        <BuildingStorefrontIcon className=' text-white h-9'></BuildingStorefrontIcon>
                        <h1 className='text-2xl capitalize font-serif flex items-center'>enson</h1>
                    </label>
                    <div className='grid-cols-2 grid gap-1'>
                        <section className='grid gap-1'>
                            <img className='h-auto rounded-md' src={'/src/img/dona.jpg'} alt='dona'/>
                            <div className='grid gap-1'>
                                <Link to='#' className='py-1 rounded-md bg-blue-500 border-black/60 border-1 flex justify-center capitalize'>facebook</Link>
                                <Link to='#' className='py-1 rounded-md bg-pink-500 border-black/60 border-1 flex justify-center capitalize'>instagram</Link>

                            </div>

                        </section>
                        <article className='grid'>
                            <p className='bg-cyan-500 p-1 rounded-md'>
                                Cras pharetra tempus imperdiet. Aenean at varius elit. Vestibulum tincidunt sapien eu turpis ornare, vitae efficitur nunc euismod.                     </p>
                            <Link to='#' className={ButtonStyle +"mt-1 rounded-md py-1 flex justify-center capitalize text-md items-center gap-1"}> <MapIcon className='h-8'></MapIcon>Visitanos!</Link>
                        </article>

                    </div>
                </article>
                <article className={card}>
                    <label className='bg-cyan-500 rounded-md flex gap-1 p-1 '>
                        <BuildingStorefrontIcon className=' text-white h-9'></BuildingStorefrontIcon>
                        <h1 className='text-2xl capitalize font-serif flex items-center'>enson</h1>
                    </label>
                    <div className='grid-cols-2 grid gap-1'>
                        <section className='grid gap-1'>
                            <img className='h-auto rounded-md' src={'/src/img/dona.jpg'} alt='dona'/>
                            <div className='grid gap-1'>
                                <Link to='#' className='py-1 rounded-md bg-blue-500 border-black/60 border-1 flex justify-center capitalize'>facebook</Link>
                                <Link to='#' className='py-1 rounded-md bg-pink-500 border-black/60 border-1 flex justify-center capitalize'>instagram</Link>

                            </div>

                        </section>
                        <article className='grid'>
                            <p className='bg-cyan-500 p-1 rounded-md'>
                                Cras pharetra tempus imperdiet. Aenean at varius elit. Vestibulum tincidunt sapien eu turpis ornare, vitae efficitur nunc euismod.                     </p>
                            <Link to='#' className={ButtonStyle +"mt-1 rounded-md py-1 flex justify-center capitalize text-md items-center gap-1"}> <MapIcon className='h-8'></MapIcon>Visitanos!</Link>
                        </article>

                    </div>
                </article>
                <article className={card}>
                    <label className='bg-cyan-500 rounded-md flex gap-1 p-1 '>
                        <BuildingStorefrontIcon className=' text-white h-9'></BuildingStorefrontIcon>
                        <h1 className='text-2xl capitalize font-serif flex items-center'>enson</h1>
                    </label>
                    <div className='grid-cols-2 grid gap-1'>
                        <section className='grid gap-1'>
                            <img className='h-auto rounded-md' src={'/src/img/dona.jpg'} alt='dona'/>
                            <div className='grid gap-1'>
                                <Link to='#' className='py-1 rounded-md bg-blue-500 border-black/60 border-1 flex justify-center capitalize'>facebook</Link>
                                <Link to='#' className='py-1 rounded-md bg-pink-500 border-black/60 border-1 flex justify-center capitalize'>instagram</Link>

                            </div>

                        </section>
                        <article className='grid'>
                            <p className='bg-cyan-500 p-1 rounded-md'>
                                Cras pharetra tempus imperdiet. Aenean at varius elit. Vestibulum tincidunt sapien eu turpis ornare, vitae efficitur nunc euismod.                     </p>
                            <Link to='#' className={ButtonStyle +"mt-1 rounded-md py-1 flex justify-center capitalize text-md items-center gap-1"}> <MapIcon className='h-8'></MapIcon>Visitanos!</Link>
                        </article>

                    </div>
                </article>

            </section>
        </>
    )
}