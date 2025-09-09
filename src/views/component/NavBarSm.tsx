const option = [
    {name: "inicio", url :"#", style: "bg-blue-700 text-white"},
    {name: "favoritos", url :"#", style: "bg-yellow-300"},
    {name: "Comunidad", url :"#", style: "bg-sky-300 "},
    {name: "desconexion", url :"/", style: "ml-3 bg-red-800 text-white"},
]

export default function NavBarSm (){
    return(
        <>
            {
                option.map((item, index) => (
                    <a key={index} className={item.style+" "+"font-serif p-2 rounded-md flex items-center"} href={item.url}>{item.name}</a>
                ))
            }
        </>
    )
}