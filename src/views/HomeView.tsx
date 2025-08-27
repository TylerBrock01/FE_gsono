import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function HomeView() {
    const autoservicio = [
        {name: "inscripciones", url :"#"},
        {name: "finanzas de campus", url :"#"},
        {name: "Datos personales", url :"#"},
        {name: "Registros academicos ", url :"#"},
        {name: "progreso de graduacion ", url :"#"},
        {name: "convalidaciones", url :"#"},
        {name: "admision alumnos", url :"#"}
    ]
    return(
        <>
            <section className="flex justify-between p-1 capitalize">
                <h1>Menu</h1>
                <h2>Comunidad del campus</h2>
            </section>
            <div className=''>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Autoservicio</AccordionTrigger>
                        <AccordionContent>
                            <div className='grid gap-1 capitalize'>
                                {autoservicio.map((item, index) => (
                                    <a className=" bg-sky-800 py-3 hover:bg-sky-900 grid rounded-md justify-center" href={item.url} key={index}>{item.name}</a>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Comunidad</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Registros academicos</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>Progreso/Graduacion</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>Registros academicos</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
        </>
    )
}