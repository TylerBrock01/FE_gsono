import {useForm} from 'react-hook-form'
import ErrorMessage from "../components/ErrorMessage.tsx";

export default function RegisterView() {
    // console.log(errors)
    const intialValues = {
        name: '',
        logo: '',
        location: '',
        face: '',
        insta: '',
        description: '',
        chain: 'default',
    }
    const {register, handleSubmit/**watch**/, formState: {errors}} = useForm({defaultValues: intialValues});
    // const url = watch('logo')

    const handleRegister = () => {
        console.log('--------------------------\n\tdesde handle\n--------------------------')
    }
    return(
        <>
            <h1 className="animate-slide-in-top flex justify-start md:justify-center text-4xl bg-cyan-700 text-white font-bold capitalize px-4 py-1">agregar negocio</h1>

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
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
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
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('logo', {
                                required: 'logo requerido',
                                minLength:{
                                    value:20,
                                    message: 'el link debe tener al menos caracteres'
                                }
                                // pattern: {
                                //     value: /^(https?:\/\/)?(www\.)?(facebook\.com|fb\.com|fbcdn\.net|scontent\..*?\.fbcdn\.net)\/(.*?\/)?(photos|photo\.php|images|media|v|profilepic)\/.*?\.(jpg|jpeg|png|gif|webp)(\?.*)?$/,
                                //     message: "URL de imagen de Facebook no válida",
                                // },
                                // validate : (value)=> value === url ||'url no valido'
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
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
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
                            id="face"
                            type="url"
                            placeholder="Facebook"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('face', {
                                required: 'facebook requerido',
                                minLength:{
                                    value:20,
                                    message: 'el link debe tener al menos caracteres'
                                }
                            })}
                        />
                        {errors.face && <ErrorMessage>{errors.face.message}</ErrorMessage>}

                    </label>
                    {/*/!*social 0*!/*/}
                    <label id='instaLabel' className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl  capitalize">URL instagram</label>
                        <input
                            id="insta"
                            type="url"
                            placeholder="Instagram"
                            className="bg-slate-100 border-none p-3 rounded-lg  placeholder-slate-400"
                            {...register('insta', {
                                required: 'instagram requerido',
                                minLength:{
                                    value:20,
                                    message: 'el link debe tener al menos caracteres'
                                }
                            })}
                        />
                        {errors.insta && <ErrorMessage>{errors.insta.message}</ErrorMessage>}

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
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('description', {
                                required: 'descripcion requerido'
                            })}
                        />
                        {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}

                    </label>
                    {/*chain*/}
                    <div id='chainDiv' className="grid grid-cols-1 space-y-3">
                        <label htmlFor={"chain"} className=" text-2xl capitalize">Tipo:</label>
                        <select id='chain' className="bg-slate-100 text-slate-400 border-none p-3 rounded-lg placeholder-slate-400 capitalize"
                                {...register('chain', {required: 'tipo requerido'})} >
                            <option id='' value="default" disabled={true} selected={true}>seleccione</option>
                            <option id='gastronomia' value="gastronomia">gastronomia</option>
                            <option id='compras' value="compras">compras</option>
                            <option id='experiencia' value="experiencia">experiencia</option>
                            <option id='servicio' value="servicio">servicio</option>
                        </select>
                        {errors.chain && <ErrorMessage>{errors.chain.message}</ErrorMessage>}
                    </div>
                    {/*enviar*/}
                    <div className="flex justify-center m-4">
                        <input
                            id="submit"
                            type="submit"
                            className=" bg-cyan-400 p-3 text-lg uppercase text-slate-600 rounded-lg font-bold cursor-pointer "
                            value='Crear Cuenta'
                        />
                    </div>

                </div>

            </form>
        </>
    )
}