import { useEffect, useState } from 'react';
import api from "../config/axios.ts";
import { isAxiosError } from "axios";
import type { Bussines } from "../typesModel/Bussines.ts";
import {Link} from "react-router-dom";
import {MapIcon} from "@heroicons/react/24/solid";
import {ButtonStyle} from "../components/misccomponent/ButtonStyle.ts";
import {card} from "../components/misccomponent/CardStyle.ts";
import {BuildingStorefrontIcon} from "@heroicons/react/16/solid";

export default function SelectBussinesName({children} : {children: React.ReactNode}) {
    const [bussines, setBussines] = useState<Bussines | null>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchBussines = async () => {
            try {
                const response = await api.get(`/selectbussines`, { params: { name: children } });
                setBussines(response.data);
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
    }, [children]);

    if (loading) return <p>Buscando negocio...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!bussines) return <p>No se encontraron resultados.</p>;

    return (
        <>
            <article className={card}>
                <label className='bg-cyan-500 rounded-md flex gap-1 p-1 '>
                    <BuildingStorefrontIcon className=' text-white h-9'></BuildingStorefrontIcon>
                    <h1 className='text-2xl capitalize font-serif flex items-center'>{bussines.name}</h1>
                </label>
                <div className='grid-cols-2 grid gap-1'>
                    <section className='grid gap-1'>
                        <img className='h-45 w-45 rounded-md'
                             src={bussines.logo}
                             alt='dona'/>
                        <div className='grid gap-1'>
                            <Link to='#'
                                  className='py-1 rounded-md bg-blue-500 border-black/60 border-1 flex justify-center capitalize'>facebook</Link>
                            <Link to='#'
                                  className='py-1 rounded-md bg-pink-500 border-black/60 border-1 flex justify-center capitalize'>instagram</Link>

                        </div>

                    </section>
                    <article className='grid'>
                        <p className='bg-cyan-500 p-1 rounded-md'>{bussines.description}</p>
                        <p className=' m-1 rounded-md capitalize grid items-center '>#{bussines.chain}</p>
                        <Link to={bussines.location} className={ButtonStyle + "mt-1 rounded-md py-1 flex justify-center capitalize text-md items-center gap-1"}>
                            <MapIcon className='h-8'></MapIcon>Visitanos!</Link>
                    </article>

                </div>
            </article>
        </>
    );
}