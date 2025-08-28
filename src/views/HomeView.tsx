import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import type {itsonServiceModel} from "../ItsonServiceModel.ts";

export default function HomeView() {
    const itsonService : itsonServiceModel[] = [
        {
            nameOption: "Autoservicio",
            serviceOption: [
                {name: "horario", url: "/test"},
                {name: "bajas", url: "/test"},
            ]
        },
    ]
    return(
        <>
            <section className="flex justify-between p-1 capitalize items-center">
                <h1 className="">Menu</h1>
                <a href="#" className=" rounded-md bg-sky-500 text-white px-1">Comunidad del campus</a>
            </section>
            {/*nav sm*/}
            <div className='mt-1 md:hidden gap-2'>
                <Accordion type="single" collapsible>
                    {itsonService.map((item, index) => (
                        <AccordionItem key={index} value={item.nameOption}>
                            <AccordionTrigger>{item.nameOption}</AccordionTrigger>
                            <AccordionContent>
                                <div className='grid gap-1 capitalize'>
                                    {item.serviceOption.map((item, index) => (
                                        <a href={item.url} className="ml-1 bg-sky-400 hover:bg-sky-600 p-2 rounded-md capitalize" key={index} > {item.name}</a>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Autoservicio</AccordionTrigger>
                        <AccordionContent>
                            <div className='grid gap-1 capitalize'>

                            </div>
                        </AccordionContent>
                    </AccordionItem>

                </Accordion>
            </div>
            {/*nav md*/}
            <div className="hidden md:grid gap-2 md:grid-cols-2 ">
                {/*<div className="bg-sky-500  rounded-md p-1">*/}
                {/*    {itsonService.map((item, index) => (*/}
                {/*        <h1 className="capitalize border-b-2" key={index} > {item.nameOption}</h1>*/}
                {/*        <div className="grid capitalize py-1 gap-1 text-white"></div>*/}

                {/*        ))}*/}
                {/*</div>*/}
            </div>
        </>
    )
}