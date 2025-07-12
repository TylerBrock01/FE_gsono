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
                className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
            >
                <div className="grid grid-cols-1 space-y-3">
                    <label htmlFor="name" className="text-2xl text-slate-500 capitalize">nombre de negocio</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Negocio"
                        className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
                        {...register('name', {required: 'nombre es requerido'})}
                    />
                </div>


                <input
                    type="submit"
                    className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
                    value='Crear Cuenta'
                />
            </form>
        </>
    )
}