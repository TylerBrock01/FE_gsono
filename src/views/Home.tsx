import { Link} from 'react-router-dom'
// import persy from '../img/persy.jpg'
// import dona from '../img/dona.jpg'
export default function Home() {
    return(
        <>
            {/*index*/}
            <h1 className='bg-cyan-600 text-white flex justify-center p-1 border-black border-b-1'>Explora Guaymas: Descubre el Corazón de Nuestros Negocios Locales</h1>
            <section className='text-white'>
                <div className='bg-[url("/src/img/hero1.jpg")] bg-cover bg-no-repeat bg-right'>
                    <div className='bg-black/50 p-3 flex flex-col justify-center gap-4 h-120 md:h-130 lg:h-screen'>
                        <div className='grid'>
                            <h1 className=' capitalize text-6xl decoration-cyan-600 decoration-3 underline-offset-8 underline font-serif'>
                                bienvenido a guaymas
                            </h1>
                            <h2 className='text-3xl'>El puerto de la experiencia</h2>
                        </div>
                        <div className='grid'>
                            <article>
                                <Link to="/" className=' text-xl capitalize text-cyan-400 underline'>proximos eventos</Link>
                                <p className='font-serif'>
                                    Cras pharetra tempus imperdiet. Aenean at varius elit. Vestibulum tincidunt sapien eu turpis ornare, vitae efficitur nunc euismod. Aenean posuere ipsum orci. Vivamus consectetur mollis nulla, eu vehicula mi feugiat in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            {/*main*/}
            <main className=' text-white font-serif border-l-10 border-cyan-600 grid grid-cols-1 lg:grid-cols-2'>
                {/*month bussines*/}
                <section className=''>
                    <h1 className='  text-5xl font-serif italic p-1 bg-cyan-600 flex justify-center'>¡Negocio del Mes!</h1>
                    <article className=' bg-white text-black capitalize p-2 '>
                        {/*bussines name*/}
                        <h2 className=' text-3xl flex gap-2 pb-1'>
                            <svg className="w-10 h-10 " aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
                            </svg>

                            Hot dogs: el persy'
                        </h2>
                        <div className=' md:grid grid-cols-2 gap-2 p-2 border-cyan-500 border-2'>
                            <div className=' justify-center p-1 grid gap-1'>
                                {/*image bussines*/}
                                <img className=" lg:h-80" src={'https://as2.ftcdn.net/v2/jpg/00/63/09/65/1000_F_63096517_WFNDiMYu4rKrtgxa2DgZCVgEzOmp2JHP.jpg'} alt='persy'/>
                                {/*social link bussines*/}
                                <Link className='bg-blue-600 flex text-white justify-center items-center gap-1' to='/'>
                                    <svg className="w-6 h-6  " aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    hot dogs persy
                                </Link>
                                <Link className='bg-pink-400 flex text-white justify-center items-center gap-1' to='/'>
                                <svg className="w-6 h-6 " aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd"
                                              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    hot dogs persy
                                </Link>
                            </div>

                            <aside className='grid  gap-2  p-3'>
                                <h2 className='text-cyan-600'>Descripcion</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum non lorem eget
                                    vulputate. Suspendisse facilisis erat et justo pulvinar lobortis. Morbi sit amet
                                    libero sodales, fringilla felis quis, cursus sapien. Suspendisse potenti. Cras
                                    lectus mauris, commodo a tellus eget, porttitor aliquam est. Ut vulputate sodales luctus. Fusce consequat porttitor ornare. Aliquam scelerisque libero dui, sed sodales tellus vestibulum vitae. Aenean sed mi tincidunt, tincidunt tortor sit amet, gravida ipsum.
                                </p>
                                <p className='flex text-green-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    30-50 C/U
                                </p>
                                <Link className='  bg-cyan-600  p-1 rounded-full flex justify-center items-center  text-white ' to="/">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                                    </svg>
                                    <h1>Visitanos!</h1>
                                </Link>
                            </aside>
                        </div>
                    </article>
                </section>
                {/*last bussines opened*/}
                <section className=''>
                    <h1 className='  text-5xl font-serif italic p-1 bg-cyan-600 flex justify-center'>¡Recien abiertos!</h1>
                    <article className=' bg-white text-black capitalize p-2 '>
                        {/*bussines name*/}
                        <h2 className=' text-3xl flex gap-2 pb-1'>
                            <svg className="w-10 h-10 " aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                 viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M6 12c.263 0 .524-.06.767-.175a2 2 0 0 0 .65-.491c.186-.21.333-.46.433-.734.1-.274.15-.568.15-.864a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 12 9.736a2.4 2.4 0 0 0 .586 1.591c.375.422.884.659 1.414.659.53 0 1.04-.237 1.414-.659A2.4 2.4 0 0 0 16 9.736c0 .295.052.588.152.861s.248.521.434.73a2 2 0 0 0 .649.488 1.809 1.809 0 0 0 1.53 0 2.03 2.03 0 0 0 .65-.488c.185-.209.332-.457.433-.73.1-.273.152-.566.152-.861 0-.974-1.108-3.85-1.618-5.121A.983.983 0 0 0 17.466 4H6.456a.986.986 0 0 0-.93.645C5.045 5.962 4 8.905 4 9.736c.023.59.241 1.148.611 1.567.37.418.865.667 1.389.697Zm0 0c.328 0 .651-.091.94-.266A2.1 2.1 0 0 0 7.66 11h.681a2.1 2.1 0 0 0 .718.734c.29.175.613.266.942.266.328 0 .651-.091.94-.266.29-.174.537-.427.719-.734h.681a2.1 2.1 0 0 0 .719.734c.289.175.612.266.94.266.329 0 .652-.091.942-.266.29-.174.536-.427.718-.734h.681c.183.307.43.56.719.734.29.174.613.266.941.266a1.819 1.819 0 0 0 1.06-.351M6 12a1.766 1.766 0 0 1-1.163-.476M5 12v7a1 1 0 0 0 1 1h2v-5h3v5h7a1 1 0 0 0 1-1v-7m-5 3v2h2v-2h-2Z"/>
                            </svg>
                            bazar don ast
                        </h2>
                        <div className=' md:grid grid-cols-2 gap-2 p-2 border-cyan-500 border-2'>
                            <div className=' justify-center p-1 grid gap-1'>
                                {/*image bussines*/}
                                <img className=" lg:h-80" src={'https://as1.ftcdn.net/v2/jpg/03/05/92/84/1000_F_305928424_visqTeQnMLvzfT3XBtDZWX9TNTlVLML6.jpg'} alt='persy'/>
                                {/*social link bussines*/}
                                <Link className='bg-blue-600 flex text-white justify-center items-center gap-1' to='/'>
                                    <svg className="w-6 h-6  " aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                         viewBox="0 0 24 24">
                                        <path fill-rule="evenodd"
                                              d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    bazar don ast
                                </Link>
                                <Link className='bg-pink-400 flex text-white justify-center items-center gap-1' to='/'>
                                    <svg className="w-6 h-6 " aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                         viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd"
                                              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                              clip-rule="evenodd"/>
                                    </svg>
                                    bazar don ast
                                </Link>
                            </div>

                            <aside className='grid  gap-2  p-3'>
                                <h2 className='text-cyan-600'>Descripcion</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum non lorem eget
                                    vulputate. Suspendisse facilisis erat et justo pulvinar lobortis. Morbi sit amet
                                    libero sodales, fringilla felis quis, cursus sapien. Suspendisse potenti. Cras
                                    lectus mauris, commodo a tellus eget, porttitor aliquam est. Ut vulputate sodales luctus. Fusce consequat porttitor ornare. Aliquam scelerisque libero dui, sed sodales tellus vestibulum vitae. Aenean sed mi tincidunt, tincidunt tortor sit amet, gravida ipsum.
                                </p>
                                <p className='flex text-green-500'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                    </svg>
                                    30-50 C/U
                                </p>
                                <Link className='  bg-cyan-600  p-1 rounded-full flex justify-center items-center  text-white ' to="/">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                                    </svg>
                                    <h1>Visitanos!</h1>
                                </Link>
                            </aside>
                        </div>
                    </article>
                </section>
                {/*hot bussines*/}
                <section>
                    <h1 className='capitalize text-5xl font-serif italic p-1 bg-cyan-600 flex justify-center'> mas populares entre la comunidad</h1>
                </section>
                {/*community bussined loved*/}
                <section>
                    <h1 className='capitalize text-5xl font-serif italic p-1 bg-cyan-600 flex justify-center'>recomendado por la comunidad</h1>
                </section>
            </main>
        </>
    )
}