import TittleComponent from "../../components/TittleComponent.tsx";
import ShowBussinesChain from "../../actions/ShowBussinesChain.tsx";

export default function ExperienceView() {
    return (
        <>
            {<TittleComponent>experiencia</TittleComponent>}
            <section className='grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-cyan-700 p-1'>
                {/**/}
                {<ShowBussinesChain>{'experiencia'}</ShowBussinesChain>}
            </section>
        </>
    )
}