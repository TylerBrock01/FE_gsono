import {Link} from "react-router-dom";

export default function HeroComponent() {
    return (
        <section className='text-white  animate-blurred-fade-in  '>
            {/*photo bg*/}
            <div className='bg-[url("/src/img/hero1.jpg")]  bg-cover bg-no-repeat bg-right lg:bg-top-right'>
                {/*content*/}
                <div className='bg-black/50 p-3 flex flex-col justify-between md:justify-center gap-4 h-120 md:h-130 lg:h-screen'>
                    {/*title*/}
                    <div className='grid'>
                        <h1 className=' capitalize text-6xl decoration-cyan-600 decoration-3 underline-offset-8 underline font-serif'>
                            bienvenido a guaymas
                        </h1>
                        <h2 className='text-3xl'>El puerto de la experiencia</h2>
                    </div>
                    {/*articles*/}
                    <div className=' bg-cyan-600/50 p-2'>
                        <article className='gap-2'>
                            <Link to="/" className=' text-xl capitalize underline'>proximos eventos!</Link>
                            <p className='font-serif text-sm/6'>
                                Cras pharetra tempus imperdiet. Aenean at varius elit. Vestibulum tincidunt sapien eu turpis ornare, vitae efficitur nunc euismod. Aenean posuere ipsum orci. Vivamus consectetur mollis nulla, eu vehicula mi feugiat in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}