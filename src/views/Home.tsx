import { Link} from 'react-router-dom'
import persy from '../img/persy.jpg'
export default function Home() {
    return(
        <>
            <h1 className='bg-cyan-600 text-white flex justify-center p-1 border-black border-b-1'>Explora Guaymas: Descubre el Corazón de Nuestros Negocios Locales</h1>
            <section className='text-white'>
                <div className='hero'>
                    <div className='bg-black/50 p-3 flex flex-col justify-center h-180'>
                        <h1 className=' capitalize text-6xl decoration-cyan-600 decoration-3 underline-offset-8 underline font-serif'>
                            bienvenido a guaymas
                        </h1>
                        <h2 className='text-3xl'>El puerto de la experiencia</h2>
                    </div>
                </div>
            </section>
            <main className=' text-white font-serif'>
                <h1 className=' text-5xl font-serif italic p-1 bg-cyan-600 flex justify-center'>¡Empieza a Explorar!</h1>
                <div className=' bg-white text-black capitalize p-2'>
                    <h2 className=' text-3xl  '>Negocio del Mes:</h2>
                    <div className=' grid grid-cols-2 gap-2 border-cyan-500 border-2 p-2'>
                        <h1 className='text-xl col-start-1 col-end-3 border-cyan-500 border-b-2'>Hot dogs: el persi'</h1>
                        <img className='w-80 h-auto p-1' src={persy} alt='persy'/>

                        <div className='grid  gap-2 border-cyan-500 border-l-2 p-3'>
                            <h2 className='text-cyan-600'>Descripcion</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum non lorem eget vulputate. Suspendisse facilisis erat et justo pulvinar lobortis. Morbi sit amet libero sodales, fringilla felis quis, cursus sapien. Suspendisse potenti. Cras lectus mauris, commodo a tellus eget, porttitor aliquam est. Ut vulputate sodales luctus. Fusce consequat porttitor ornare. Aliquam scelerisque libero dui, sed sodales tellus vestibulum vitae. Aenean sed mi tincidunt, tincidunt tortor sit amet, gravida ipsum.
                            </p>
                            <p className='flex text-green-600'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor" className="size-6 ">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                30-50 C/U
                            </p>
                            <Link className=' w-50  bg-cyan-600  p-1 rounded-full flex  text-white  gap-1' to="/">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                                </svg>
                                <h1>hot dogs persy</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}