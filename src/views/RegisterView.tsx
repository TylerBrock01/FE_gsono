import {useForm} from 'react-hook-form'

export default function RegisterView() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const handleRegister = () => {
        console.log('desde handle')
    }
    return(
        <>
            <h1 className="text-4xl bg-cyan-600 text-white text-center capitalize py-1">agregar Nuevo negocio</h1>

            <form
                onSubmit={handleSubmit(handleRegister)}
                className=" bg-cyan-800 gap-2 py-2 border-black border-b-1 flex flex-col items-center"
            >
                <div className='bg-white rounded-2xl mt-2 w-80 md:w-100 gap-2 p-2 px-4 font-light'>
                    {/*name*/}
                    <div className="grid grid-cols-1 space-y-3">
                        {/*name*/}
                        <label htmlFor="name" className="text-2xl capitalize">nombre de negocio</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Negocio"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('name', {required: 'nombre es requerido'})}
                        />
                    </div>
                    {/*logo*/}
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl  capitalize">URL logo</label>
                        <input
                            id="logo"
                            type="url"
                            placeholder="Logo"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('name', {required: 'logo es requerido'})}
                        />
                    </div>
                    {/*/!*location*!/*/}
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl  capitalize">URL ubicacion</label>
                        <input
                            id="location"
                            type="url"
                            placeholder="Ubicacion"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('name', {required: 'ubicacion es requerido'})}
                        />
                    </div>
                    {/*/!*social*!/*/}
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl  capitalize">URL facebook</label>
                        <input
                            id="face"
                            type="url"
                            placeholder="Facebook"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('name', {required: 'facebook es requerido'})}
                        />
                    </div>
                    {/*/!*social 0*!/*/}
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl  capitalize">URL instagram</label>
                        <input
                            id="insta"
                            type="url"
                            placeholder="Instagram"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('name', {required: 'instagram es requerido'})}
                        />
                    </div>
                    {/*/!*description*!/*/}
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="description" className="text-2xl  capitalize"> descripcion</label>
                        <textarea
                            id="description"
                            minLength={250}
                            rows={4}
                            maxLength={500}
                            placeholder="Ubicacion"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('name', {required: 'ubicacion es requerido'})}
                        />
                    </div>
                    {/*chain*/}
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor={"chain"} className="  capitalize">Tipo:</label>
                        <select className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400 capitalize"
                                {...register('chain', {required: 'tipo'})} >
                            <option value="default" disabled={true} selected={true}>seleccione</option>
                            <option value="gastronomia">gastronomia</option>
                            <option value="compras">compras</option>
                            <option value="experiencia">experiencia</option>
                            <option value="servicio">servicio</option>
                        </select>
                    </div>
                    {/*enviar*/}
                    <div className="flex justify-center m-4">
                        <input
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