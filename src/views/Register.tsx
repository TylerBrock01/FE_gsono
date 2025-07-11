export default function Register() {
    return(
        <>
            <h1 className='text-3xl text-white capitalize'>registrar nuevo negocio</h1>
            <div className='bg-cyan-600 text-white flex flex-col items-center p-2 '>
                <form className='p-1 border-black border-2 capitalize bg-cyan-800'>
                    <h2 className='text-xl'>nombre del negocio</h2>
                    <input className='bg-gray-400 rounded-full' type='text' placeholder='negociuu'/>
                    {/*<h2 className='text-xl'>logo</h2>*/}
                    {/*<input className='bg-gray-400 rounded-full' type='text' placeholder='logo' disabled={true}/>*/}
                    {/*<h2 className='text-xl'>direccion</h2>*/}
                    {/*<input className='bg-gray-400 rounded-full' type='text' placeholder='direccion'disabled={true}/>*/}
                    {/*<h2 className='text-xl'>facebook</h2>*/}
                    {/*<input className='bg-gray-400 rounded-full' type='text' placeholder='facebook'disabled={true}/>*/}
                    {/*<h2 className='text-xl'>instagram</h2>*/}
                    {/*<input className='bg-gray-400 rounded-full' type='text' placeholder='instagram'disabled={true}/>*/}
                    {/*<h2 className='text-xl'>descripcion</h2>*/}
                    {/*<input className='bg-gray-400 rounded-full' type='text' placeholder='descripcion'disabled={true}/>*/}
                    <h2 className='text-xl'>precio</h2>
                    <h2 className='text-xl'>cadena</h2>
                </form>
            </div>
        </>
    )
}