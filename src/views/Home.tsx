// import { Link} from 'react-router-dom'

export default function Home() {
    return(
        <>
            <h1 className='bg-cyan-600 text-white flex justify-center p-1 border-black border-b-1'>Explora Guaymas: Descubre el Corazón de Nuestros Negocios Locales</h1>
            <section className='text-white relative'>
                <div className=' absolute z-1 inset-y-70 inset-x-5'>
                    <div className='p-1'>
                        <h1 className=' capitalize text-6xl decoration-cyan-600 decoration-3 underline-offset-8 underline font-serif'>
                            bienvenido a guaymas, sonora, mexico
                        </h1>
                        <h2 className='text-3xl'>El puerto de la experiencia</h2>
                    </div>

                    <section className=' mt-20 grid grid-cols-2 gap-4 '>
                        <div className='p-1'>
                            <h3 className='  text-2xl text-cyan-400'>Destinos</h3>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum non lorem eget vulputate. Suspendisse facilisis erat et justo pulvinar lobortis. Morbi sit amet libero sodales, fringilla felis quis, cursus sapien. Suspendisse potenti. Cras lectus mauris, commodo a tellus eget, porttitor aliquam est. Ut vulputate sodales luctus. Fusce consequat porttitor ornare. Aliquam scelerisque libero dui, sed sodales tellus vestibulum vitae. Aenean sed mi tincidunt, tincidunt tortor sit amet, gravida ipsum.

                            </p>
                        </div>
                        <div className='p-1'>
                            <h3 className=' text-2xl text-cyan-400'>Historia</h3>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum non lorem eget vulputate. Suspendisse facilisis erat et justo pulvinar lobortis. Morbi sit amet libero sodales, fringilla felis quis, cursus sapien. Suspendisse potenti. Cras lectus mauris, commodo a tellus eget, porttitor aliquam est. Ut vulputate sodales luctus. Fusce consequat porttitor ornare. Aliquam scelerisque libero dui, sed sodales tellus vestibulum vitae. Aenean sed mi tincidunt, tincidunt tortor sit amet, gravida ipsum.

                            </p>
                        </div>
                        <div className='p-1'>
                            <h3 className=' text-2xl text-cyan-400 capitalize'>restaurantes</h3>
                            <h3></h3>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum non lorem eget vulputate. Suspendisse facilisis erat et justo pulvinar lobortis. Morbi sit amet libero sodales, fringilla felis quis, cursus sapien. Suspendisse potenti. Cras lectus mauris, commodo a tellus eget, porttitor aliquam est. Ut vulputate sodales luctus. Fusce consequat porttitor ornare. Aliquam scelerisque libero dui, sed sodales tellus vestibulum vitae. Aenean sed mi tincidunt, tincidunt tortor sit amet, gravida ipsum.

                            </p>
                        </div>
                        <div className='p-1'>
                            <h3 className=' text-2xl text-cyan-400 capitalize'>comercios</h3>
                            <h3></h3>
                            <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum non lorem eget vulputate. Suspendisse facilisis erat et justo pulvinar lobortis. Morbi sit amet libero sodales, fringilla felis quis, cursus sapien. Suspendisse potenti. Cras lectus mauris, commodo a tellus eget, porttitor aliquam est. Ut vulputate sodales luctus. Fusce consequat porttitor ornare. Aliquam scelerisque libero dui, sed sodales tellus vestibulum vitae. Aenean sed mi tincidunt, tincidunt tortor sit amet, gravida ipsum.

                            </p>
                        </div>
                    </section>
                </div>
                <div className='relative'>
                    <img className='w-full' src="https://cdn.pixabay.com/photo/2019/06/14/06/09/utah-4272944_1280.jpg" alt=""/>
                    <div className='bg-black w-full h-full inset-0 absolute opacity-70'></div>
                </div>

            </section>
        </>
    )
}