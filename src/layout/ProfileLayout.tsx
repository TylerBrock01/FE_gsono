import {Outlet} from "react-router-dom";

export default function profileLayout() {
    const option = [
        {name: "inicio", url :"#", style: "bg-blue-700 text-white"},
        {name: "favoritos", url :"#", style: "bg-yellow-300"},
        {name: "desconexion", url :"#", style: "bg-red-800 text-white"},
    ]
    return(
        <>


            <div className="bg-sky-500 p-1 flex justify-between  capitalize ">
                <label className="grid justify-center bg-sky-500">
                    <img alt='xd' className='  h-12' src="https://apps9.itson.edu.mx/CIA/img/ITSON-MARCA.png"/>
                </label>
                {
                    option.map((item, index) => (
                        <a key={index} className={item.style+"  px-1 rounded-md grid items-center"} href={item.url}>{item.name}</a>
                    ))
                }
            </div>
            <div className="bg-sky-200 p-2">
                <Outlet/>
            </div>
        </>
    )
}