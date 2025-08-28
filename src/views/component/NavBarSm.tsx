const option = [
    {name: "inicio", url :"#", style: "bg-blue-700 text-white"},
    {name: "favoritos", url :"#", style: "bg-yellow-300"},
    {name: "desconexion", url :"/", style: "bg-red-800 text-white"},
]

export default function NavBarSm (){
    return(
        <>
            {
                option.map((item, index) => (
                    <a key={index} className={item.style+"  p-1 rounded-md grid items-center"} href={item.url}>{item.name}</a>
                ))
            }
        </>
    )
}