import { useEffect, useState } from 'react';
import api from "../../config/axios.ts";
import { isAxiosError } from "axios";
import type { Bussines } from "../../typesModel/Bussines.ts";
import {Link} from "react-router-dom";
import {MapIcon} from "@heroicons/react/24/solid";
import {ButtonStyle} from "./ButtonStyle.ts";
import {card} from "./CardStyle.ts";
import {BuildingStorefrontIcon} from "@heroicons/react/16/solid";

export default function ShowBussinesChain({children} : {children: React.ReactNode}) {
    const [bussinesList, setBussinesList] = useState<Bussines[]>([]);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchBussines = async () => {
            try {
                const response = await api.get(`/showchainbussines`, { params: { chain: children } });
                if (Array.isArray(response.data)) {
                    setBussinesList(response.data);
                } else {
                    throw new Error("El formato de la respuesta de la API no es un array.");
                }
            } catch (error) {
                if(isAxiosError(error) && error.response){
                    console.log(error.response.data.error);
                } else {
                    console.log("error inesperado");
                }
                setError("Ocurrió un error al cargar los datos.");
            } finally {
                setLoading(false);
            }
        };

        fetchBussines();
    }, []);

    if (loading) {
        return <p>Cargando negocios...</p>;
    }

    if (error) {
        console.log(error);
        return <p>Hubo un error. No se pueden mostrar los negocios.</p>;
    }

    if (bussinesList.length === 0) {
        return <p>No se encontraron negocios para esta cadena.</p>;
    }

    return (
        <>
            {bussinesList.map((bussinesItem: Bussines) => (
                <article className={card}>
                    <label className='bg-cyan-500 rounded-md flex gap-1 p-1 '>
                        <BuildingStorefrontIcon className=' text-white h-9'></BuildingStorefrontIcon>
                        <h1 className='text-2xl capitalize font-serif flex items-center'>{bussinesItem.name}</h1>
                    </label>
                    <div className='grid-cols-2 grid gap-1'>
                        <section className='grid gap-1'>
                            <img className='h-45 w-50 rounded-md'
                                 src={'https://as1.ftcdn.net/v2/jpg/04/19/31/50/1000_F_419315027_H0G3ycDGIsUlD9OvzQfqyylqxQKgrOMy.jpg'}
                                 alt='dona'/>
                            <div className='grid gap-1'>
                                <Link to='#'
                                      className='py-1 rounded-md bg-blue-500 border-black/60 border-1 flex justify-center capitalize'>facebook</Link>
                                <Link to='#'
                                      className='py-1 rounded-md bg-pink-500 border-black/60 border-1 flex justify-center capitalize'>instagram</Link>

                            </div>

                        </section>
                        <article className='grid'>
                            <p className='bg-cyan-500 p-1 rounded-md'>{bussinesItem.description}</p>
                            <p className=' m-1 rounded-md capitalize grid items-center '>#{bussinesItem.chain}</p>
                            <Link to={bussinesItem.location} className={ButtonStyle + "mt-1 rounded-md py-1 flex justify-center capitalize text-md items-center gap-1"}>
                                <MapIcon className='h-8'></MapIcon>Visitanos!</Link>
                        </article>

                    </div>
                </article>
            ))}
        </>
    );
}