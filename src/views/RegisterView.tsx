import {useForm} from 'react-hook-form'

export default function RegisterView() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const handleRegister = () => {
        console.log('desde handle')
    }
    return(
        <>
            <form
                onSubmit={handleSubmit(handleRegister)}
                className=" bg-cyan-800 gap-2 p-2 border-black border-b-1"
            >
                <h1 className="text-4xl bg-cyan-600 text-white text-center capitalize py-1">agregar Nuevo negocio</h1>
                <div className='bg-gray-400 py-2 flex flex-col md:items-center gap-2'>
                    {/*name*/}
                    <div className="grid grid-cols-1 space-y-3">
                        {/*name*/}
                        <label htmlFor="name" className="text-2xl text-white capitalize">nombre de negocio</label>
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
                        <label htmlFor="name" className="text-2xl text-white capitalize">URL logo</label>
                        <input
                            id="name"
                            type="url"
                            placeholder="Logo"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('name', {required: 'logo es requerido'})}
                        />
                    </div>
                    {/*/!*location*!/*/}
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl text-white capitalize">URL ubicacion</label>
                        <input
                            id="name"
                            type="url"
                            placeholder="Ubicacion"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('name', {required: 'ubicacion es requerido'})}
                        />
                    </div>
                    {/*/!*social*!/*/}
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl text-white capitalize">URL facebook</label>
                        <input
                            id="name"
                            type="url"
                            placeholder="Facebook"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('name', {required: 'facebook es requerido'})}
                        />
                    </div>
                    {/*/!*social 0*!/*/}
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl text-white capitalize">URL instagram</label>
                        <input
                            id="name"
                            type="url"
                            placeholder="Instagram"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('name', {required: 'instagram es requerido'})}
                        />
                    </div>
                    {/*/!*description*!/*/}
                    <div className="grid grid-cols-1 space-y-3">
                        <label htmlFor="name" className="text-2xl text-white capitalize">URL ubicacion</label>
                        <input
                            id="name"
                            type="url"
                            placeholder="Ubicacion"
                            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                            {...register('name', {required: 'ubicacion es requerido'})}
                        />
                    </div>

                    {/*enviar*/}
                    <input
                        type="submit"
                        className=" bg-cyan-400 p-3 text-lg uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                        value='Crear Cuenta'
                    />
                </div>

            </form>
        </>
    )
}