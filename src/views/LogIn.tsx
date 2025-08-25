import ButtonStyle from "../ButtonStyle.tsx";

export default function LogIn() {
    const xd= 'w-80'
    return(
        <>
            <div className=' flex justify-center p-3 '>
                <div className='bg-gray-100/80 p-2 rounded-md'>
                    <div>
                        <img alt='xd' className={xd} src="https://apps9.itson.edu.mx/CIA/img/ITSON-MARCA.png"/>
                        <img alt='xd' className={xd} src="https://apps9.itson.edu.mx/CIA/img/CIA.png"/>
                    </div>
                    <div className='flex flex-col gap-3 justify-center p-10'>
                        <label className='grid'>
                            <input className=' focus:outline-blue-400 bg-white rounded-md px-2 text-slate-700/70' type="text" placeholder="Ingresar ID ITSON"/>
                        </label>
                        <label className='grid'>
                            <input className=' focus:outline-blue-400 bg-white rounded-md px-2 text-slate-700/70' type="password" placeholder="Ingresar clave"/>
                        </label>
                        <label className='grid'>
                            { ButtonStyle('ingresar')}
                        </label>
                        <label className='flex justify-center'>
                            <a className="text-blue-500 capitalize" href="/">aviso de privacidad</a>
                        </label>
                    </div>

                </div>

            </div>
        </>
    )
}