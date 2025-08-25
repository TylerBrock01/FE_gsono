export default function LogIn() {
    const xd= 'w-80'
    return(
        <>
            <div className='flex justify-center p-3 '>
                <div className='bg-gray-300 p-2 rounded-md'>
                    <div>
                        <img alt='xd' className={xd} src="https://apps9.itson.edu.mx/CIA/img/ITSON-MARCA.png"/>
                        <img alt='xd' className={xd} src="https://apps9.itson.edu.mx/CIA/img/CIA.png"/>
                    </div>
                    <div className='flex justify-center'>
                        <input className='bg-white rounded-md px-2 text-slate-700/70' type="text" placeholder="Ingresar ID ITSON"/>
                        <input className='' type={"submit"}/>
                    </div>

                </div>

            </div>
        </>
    )
}