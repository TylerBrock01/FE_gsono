import HeroComponent from "../components/homecomponent/HeroComponent.tsx";
import SelectBussinesName from "../actions/SelectBussinesName.tsx";
import TittleComponent from "../components/TittleComponent.tsx";

export default function HomeView() {


    return(
        <>
            {/*navbar*/}
            {/*index*/}
            <h1 className='animate-blurred-fade-in bg-cyan-700 text-white flex justify-between p-1  border-black border-b-1 '>Descubre nuevas experiencias en tu viaje.</h1>
            {/*hero*/}
            <HeroComponent/>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 border-b-5 text-white font-serif border-cyan-800 p-1 gap-1'>
                {/*month business*/}
                <article>
                    {<TittleComponent>{"Negocio del mes"}</TittleComponent>}
                    {<SelectBussinesName>{'be a man'}</SelectBussinesName>}
                </article>
                {/*last business opened*/}
                <article>
                    {<TittleComponent>{"recien abiertos"}</TittleComponent>}
                    {<SelectBussinesName>{'be a man'}</SelectBussinesName>}
                </article>
                <article>
                    {<TittleComponent>{"Negocio del mes"}</TittleComponent>}
                    {<SelectBussinesName>{'be a man'}</SelectBussinesName>}
                </article>
                {/*last business opened*/}
                <article>
                    {<TittleComponent>{"recien abiertos"}</TittleComponent>}
                    {<SelectBussinesName>{'be a man'}</SelectBussinesName>}
                </article>
            </div>
            {/*hot*/}
            <h1 className='mt-1 capitalize text-5xl font-serif italic p-1 bg-white text-cyan-600 border-cyan-600 border-l-20  flex md:justify-center'>votados por la comunidad</h1>

        </>
    )
}