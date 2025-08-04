import TittleComponent from "../../components/TittleComponent.tsx";
import ShowBussinesChain from "../../components/misccomponent/ShowBussinesChain.tsx";

export function GastronomyView() {

    return (
        <>
            {<TittleComponent>Gastronomia</TittleComponent>}
            <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-cyan-700 p-1'>
                {/**/}
                {<ShowBussinesChain>{'experiencia'}</ShowBussinesChain>}
            </section>
        </>
    )
}