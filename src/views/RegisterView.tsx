import {useForm} from 'react-hook-form'
import ErrorMessage from "../components/ErrorMessage.tsx";
import {ButtonStyle} from "../components/MiscComponent/ButtonStyle.ts";
import {inputTextStyle} from "../components/MiscComponent/InputTextStyle.ts";
import type {Bussines} from "../typesModel/Bussines.ts";
import axios,{isAxiosError} from "axios";

function addBussinestittle(){
    return(
        <h1 className="animate-slide-in-top flex justify-center text-4xl bg-cyan-700 text-white font-bold capitalize px-4 py-1">agregar negocio</h1>
    )
}

export default function RegisterView() {
    // console.log(errors)
    const intialValues = {
        name: '',
        logo: '',
        location: '',
        social: '',
        social0: '',
        description: '',
        chain: 'default',
    }
    const {register, handleSubmit,/**watch,**/ formState: {errors}} = useForm<Bussines>({defaultValues: intialValues});
    // const chain = watch('chain')
    // console.log(chain)
    const handleRegister = async (formData: Bussines) => {
        try{
            const {data} = await axios.post('http://localhost:3000/auth/registerbussines', formData)
            console.log(data)
        }catch (error){
            if(isAxiosError(error) && error.response){
                console.log(error.response.data.error)
                // if(e.response?.data.message){
                //     alert(e.response?.data.message)
                // }
                // if(e.response?.data.errors){
                //     for(const error in e.response?.data.errors){
                //         alert(e.response?.data.errors[error])
                //     }
                // }
            }
        }
    }
    return(
        <>
            {addBussinestittle()}
            <form
                onSubmit={handleSubmit(handleRegister)}
                className="animate-blurred-fade-in  gap-2 py-2 border-black border-b-1 flex flex-col items-center"
            >
                <div className='bg-white  rounded-2xl mt-2 w-80 md:w-100 gap-2 p-2 px-4 font-light'>
                    {/*name*/}
                    <label id='nameLabel' className="grid grid-cols-1 space-y-3">
                        {/*name*/}
                        <label htmlFor="name" className="text-2xl capitalize">nombre de negocio
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Negocio"
                            className={inputTextStyle}
                            {...register('name', {required: 'nombre requerido'})}
                        />
                        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

                    </label>
                    {/*logo*/}
                    <label id='logoLabel' className="grid grid-cols-1 space-y-3">
                        <label htmlFor="logo" className="text-2xl  capitalize">URL logo</label>
                        <input
                            id="logo"
                            type="text"
                            placeholder="Logo"
                            className={inputTextStyle}
                            {...register('logo', {
                                required: 'logo requerido',
                                minLength:{
                                    value:20,
                                    message: 'el link debe tener al menos caracteres'
                                }
                            })}
                        />
                        {errors.logo && <ErrorMessage>{errors.logo.message}</ErrorMessage>}
                    </label>
                    {/*/!*location*!/*/}
                    <label id='locationLabel' className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl  capitalize">URL ubicacion</label>
                        <input
                            id="location"
                            type="url"
                            placeholder="Ubicacion"
                            className={inputTextStyle}
                            {...register('location', {
                                required: 'localizacion requerido',
                                minLength:{
                                    value:20,
                                    message: 'el link debe tener al menos caracteres'
                                }
                            })}
                        />
                        {errors.location && <ErrorMessage>{errors.location.message}</ErrorMessage>}

                    </label>
                    {/*/!*social*!/*/}
                    <label id='faceLabel' className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl  capitalize">URL facebook</label>
                        <input
                            id="social"
                            type="url"
                            placeholder="Facebook"
                            className={inputTextStyle}
                            {...register('social', {
                                required: 'facebook requerido',
                                minLength:{
                                    value:20,
                                    message: 'el link debe tener al menos caracteres'
                                }
                            })}
                        />
                        {errors.social && <ErrorMessage>{errors.social.message}</ErrorMessage>}

                    </label>
                    {/*/!*social 0*!/*/}
                    <label id='instaLabel' className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl  capitalize">URL instagram</label>
                        <input
                            id="social0"
                            type="url"
                            placeholder="Instagram"
                            className={inputTextStyle}
                            {...register('social0', {
                                required: 'instagram requerido',
                                minLength:{
                                    value:20,
                                    message: 'el link debe tener al menos caracteres'
                                }
                            })}
                        />
                        {errors.social0 && <ErrorMessage>{errors.social0.message}</ErrorMessage>}

                    </label>
                    {/*/!*description*!/*/}
                    <label id='descriptionLabel' className="grid grid-cols-1 space-y-3">
                        <label htmlFor="description" className="text-2xl  capitalize"> descripcion</label>
                        <textarea
                            id="description"
                            minLength={250}
                            rows={4}
                            maxLength={500}
                            placeholder="Ubicacion"
                            className={inputTextStyle}
                            {...register('description', {
                                required: 'descripcion requerido'
                            })}
                        />
                        {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}

                    </label>
                    {/*chain*/}
                    <div id='chainDiv' className="grid grid-cols-1 space-y-3 capitalize">
                        <label htmlFor={"chain"} className=" text-2xl">Tipo:</label>
                        <select id='chain'
                                className={inputTextStyle}
                                {...register(
                                    'chain',
                                    {required: 'tipo requerido',
                                        validate: (value) => value !== 'default' || 'seleccione un tipo'
                                    }
                                    )
                        } >
                            <option id='' value="default" disabled={true} selected={true}>Seleccione</option>
                            <option id='gastronomia' value="gastronomia">Gastronomia</option>
                            <option id='compras' value="compras">Compras</option>
                            <option id='experiencia' value="experiencia">Experiencia</option>
                            <option id='servicio' value="servicio">Servicio</option>
                        </select>
                        {errors.chain && <ErrorMessage>{errors.chain.message}</ErrorMessage>}
                    </div>
                    {/*sent*/}
                    <div className="flex justify-center m-4">
                        <input
                            id="submit"
                            type="submit"
                            className={"p-3 text-lg uppercase  rounded-lg font-bold cursor-pointer border-1 "+ButtonStyle}
                            value='Crear Cuenta'
                        />
                    </div>

                </div>

            </form>
        </>
    )
}