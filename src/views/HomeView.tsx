import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"
import type {ItsonServiceModel} from "../ItsonServiceModel.ts";

export default function HomeView() {
    const itsonService : ItsonServiceModel[] = [
        {
            nameOption: "Autoservicio",
            serviceOption:  [
                {name: "horario", url: "/test"},
                {name: "bajas", url: "/test"},
                {name: "reservas", url: "/test"},

            ]
        },
        {
            nameOption: "Reportes",
            serviceOption:  [
                {name: "horario", url: "/test"},
                {name: "bajas", url: "/test"},
                {name: "reservas", url: "/test"},

            ]
        },

    ]
    return(
        <>
            <section className="flex justify-between p-1 capitalize items-center">
                <h1 className="text-xl font-serif">Bienvenido</h1>
            </section>
            {/*nav sm*/}
            <div className='mt-1 md:hidden gap-2 font-serif '>
                <Accordion type="single" collapsible>
                    {itsonService.map((item, index) => (
                        <AccordionItem key={index} value={item.nameOption}>
                            <AccordionTrigger>{item.nameOption}</AccordionTrigger>
                            <AccordionContent>
                                <div className='grid gap-1 capitalize'>
                                    {item.serviceOption.map((item, index) => (
                                        <a href={item.url} className="mx-1 text-sm bg-sky-400 hover:bg-sky-600 p-2 rounded-md capitalize" key={index} > {item.name}</a>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            {/*nav md*/}
            <div className="hidden md:grid gap-2 md:grid-cols-3 lg:grid-cols-6 ">
                {itsonService.map((item, index) => (
                    <div key={index} className="grid capitalize bg-sky-500 text-white rounded-md p-2 gap-1">
                        <h1 className="text-xl font-serif">{item.nameOption}</h1>
                        <div className='grid gap-1 capitalize'>
                            {item.serviceOption.map((item, index) => (
                                <a href={item.url} className="mx-1 text-sm bg-sky-400 hover:bg-sky-600 p-2 rounded-md capitalize" key={index} > {item.name}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}