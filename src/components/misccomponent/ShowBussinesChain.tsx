// src/components/ShowBussinesChain.tsx
import { useEffect, useState } from 'react';
import api from "../../config/axios.ts";
import { toast } from "sonner";
import { isAxiosError } from "axios";
import type { Bussines } from "../../typesModel/Bussines.ts";

export default function ShowBussinesChain() {
    const [bussinesList, setBussinesList] = useState<Bussines[]>([]);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBussines = async () => {
            try {
                const response = await api.get(`/showchainbussines`, { params: { chain: 'experiencia' } });
                if (Array.isArray(response.data)) {
                    setBussinesList(response.data);
                    toast.success("Datos cargados correctamente");
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
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Negocios</h1>
            <ul>
                {bussinesList.map((bussinesItem: Bussines) => (
                    <li>
                        {bussinesItem.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}